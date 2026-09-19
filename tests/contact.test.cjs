// Pruebas sin dependencias ni mensajes reales: node --test tests/contact.test.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(require('node:path').join(__dirname,'../script.js'),'utf8');
function setup(number='54911XXXXXXXX',clipboardFails=false){
  class Element{
    constructor(){this.value='';this.textContent='';this.disabled=true;this.handlers={};this.attrs={};this.classes=new Set();this.classList={add:c=>this.classes.add(c),remove:c=>this.classes.delete(c),contains:c=>this.classes.has(c),toggle:c=>{if(this.classes.has(c)){this.classes.delete(c);return false;}this.classes.add(c);return true;}};}
    addEventListener(event,fn){this.handlers[event]=fn;} setAttribute(k,v){this.attrs[k]=v;}
    querySelectorAll(){return [];} focus(){this.focused=true;} select(){this.selected=true;} scrollIntoView(){}
  }
  const nodes={}; const get=s=>nodes[s]||(nodes[s]=new Element());
  get('#modelo').value='asesoramiento';
  const cards=['60-sin','60-con','100-sin','100-con'].map(id=>Object.assign(new Element(),{dataset:{model:id}}));
  const docEvents={},opened=[],copied=[];
  vm.runInNewContext(source.replace(/const WHATSAPP_NUMBER = '[^']+';/, `const WHATSAPP_NUMBER = ${JSON.stringify(number)};`),{
    document:{documentElement:get('html'),querySelector:get,querySelectorAll:()=>cards,addEventListener:(k,fn)=>docEvents[k]=fn},
    window:{matchMedia:()=>({matches:false,addEventListener(){}}),open:(...args)=>opened.push(args)},
    navigator:{clipboard:{writeText:async value=>{if(clipboardFails)throw Error('denied');copied.push(value);}}}
  });
  return {get,cards,docEvents,opened,copied};
}
test('placeholder and malformed numbers cannot open WhatsApp',()=>{
  for(const number of ['54911XXXXXXXX','','abc','0000000000','+5491112345678']){
    const s=setup(number);assert.equal(s.get('#send-button').disabled,true);
    s.get('#quote-form').handlers.submit({preventDefault(){}});assert.equal(s.opened.length,0);
  }
});
test('all product links target the confirmed WhatsApp with the matching model',()=>{
  const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
  const cards=[...html.matchAll(/<article class="product-card">([\s\S]*?)<\/article>/g)];
  assert.equal(cards.length,4);
  for(const [,card] of cards){
    const file=card.match(/assets\/modelo-(60|100)-(sin|con)\.jpg/);
    const url=new URL(card.match(/class="button product-cta" href="([^"]+)"/)[1]);
    assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/5491132849486');
    assert.ok(url.searchParams.get('text').includes(file[1]+' cm '+file[2]+' tapa'));
  }
});
test('configured contact opens correctly encoded text without sending it',()=>{
  // Synthetic fixture: window.open is mocked and no network request occurs.
  const s=setup('5491100000000');assert.equal(s.get('#send-button').disabled,false);
  s.get('#localidad').value='Adrogué & <prueba>';
  s.get('#quote-form').handlers.submit({preventDefault(){}});
  const [url,target,features]=s.opened[0];assert.equal(new URL(url).pathname,'/5491100000000');assert.equal(new URL(url).searchParams.get('text'),s.get('#mensaje').value);assert.equal(target,'_blank');assert.equal(features,'noopener,noreferrer');assert.equal(s.get('#contact-notice').hidden,true);
});
test('copy succeeds with explicit unsent status',async()=>{
  const s=setup();await s.get('#copy-button').handlers.click();assert.equal(s.copied[0],s.get('#mensaje').value);assert.match(s.get('#form-status').textContent,/no se envió/);
});
test('clipboard denial selects text for manual copying',async()=>{
  const s=setup(undefined,true);await s.get('#copy-button').handlers.click();assert.equal(s.get('#mensaje').selected,true);assert.match(s.get('#form-status').textContent,/opción Copiar/);
});
test('Escape closes menu and restores trigger focus',()=>{
  const s=setup();s.get('.menu-toggle').handlers.click();assert.equal(s.get('.menu-toggle').attrs['aria-expanded'],'true');s.docEvents.keydown({key:'Escape'});assert.equal(s.get('.menu-toggle').attrs['aria-expanded'],'false');assert.equal(s.get('.menu-toggle').focused,true);
});
