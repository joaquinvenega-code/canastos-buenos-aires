# Canastos de Basura Buenos Aires — V2

Landing estática, sin dependencias ni build. Publicada desde `main` en GitHub Pages:
https://joaquinvenega-code.github.io/canastos-buenos-aires/

## Archivos
- `index.html`: contenido comercial, fichas y formulario de consulta.
- `styles.css`: diseño responsive, navegación y estados de foco.
- `script.js`: menú, selección de modelo, armado/copiado de consulta y WhatsApp.
- `assets/canasto-*.svg`: cuatro ilustraciones **orientativas**, no fotografías ni planos de fabricación. Las versiones anteriores de los SVG se conservan, pero no se muestran.
- `assets/logo.svg`: marca provisional heredada.
- `tests/contact.test.cjs`: pruebas de interacción sin dependencias ni envíos reales.
- `REVIEW-V2.md`: auditoría, decisiones y validación.

## Datos conservados del proyecto
| Modelo | Precio de referencia |
| --- | --- |
| 60 cm sin tapa | $160.000 |
| 60 cm con tapa | $180.000 |
| 100 cm sin tapa | $230.000 |
| 100 cm con tapa | $250.000 |

Todos: 0,50 m de ancho, 0,50 m de profundidad y 1,50 m de altura total.
Se conserva información de instalación a confirmar por localidad, estructura reforzada,
trabas en patas, Mercado Pago, entrega en Buenos Aires, opción de Correo Argentino
y localidades de trabajos informadas: Campana, Adrogué y González Catán.
Los precios se identifican como referencia; no se anuncian como vigentes.

## Activar contacto cuando esté confirmado
1. Reemplazar `WHATSAPP_NUMBER` en `script.js` por el número real en formato internacional, sólo dígitos.
2. El botón se habilitará y abrirá `wa.me` con el modelo y localidad del formulario. El visitante revisa y envía desde WhatsApp.
3. Mientras siga `54911XXXXXXXX`, no se crea ningún enlace a un número ficticio. Se informa que el contacto está pendiente y se permite copiar el mensaje.

El formulario no tiene backend, no guarda datos y no envía mensajes por sí solo. No se incluye analítica ni servicios externos.

## Material pendiente
Fotos reales y logo original no están disponibles en este repositorio ni como adjuntos recuperables del contexto recibido. Incorporarlos cuando se entreguen; no presentar ilustraciones como instalaciones reales. Confirmar vigencia de precios, cobertura y condiciones comerciales con el negocio antes de la campaña.

## Verificación
`node --test tests/contact.test.cjs`

Abrir con un servidor HTTP estático para revisar. La página, fichas, preguntas y navegación siguen accesibles sin JavaScript; la preparación automática del mensaje requiere JavaScript.

## WordPress
Los bloques son independientes: cabecera, hero, catálogo, instalación, preguntas y contacto. Se pueden trasladar a una plantilla o bloques de WordPress conservando contenido y estilos. Esta entrega mantiene GitHub Pages, sin cambiar hosting ni dominio.
