# Canastos de Basura Buenos Aires — V3

Landing estática, sin dependencias ni build. Publicada desde `main` en GitHub Pages:
https://joaquinvenega-code.github.io/canastos-buenos-aires/

## Archivos
- `index.html`: contenido comercial, fichas y formulario de consulta.
- `styles.css`: diseño responsive, navegación y estados de foco.
- `script.js`: menú, selección de modelo, armado/copiado de consulta y WhatsApp.
- `assets/modelo-*.jpg`: las cuatro fichas comerciales enviadas por el usuario. Se muestran encuadres del producto mediante SVG en HTML, conservando los JPEG completos sin alteraciones. Cada tarjeta enlaza a su ficha original.
- `assets/canasto-*.svg`: ilustraciones de V2 conservadas, ya no visibles.
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

El formulario no tiene backend, no guarda datos y no envía mensajes por sí solo. No se incluye analítica propia. La sección Instagram carga contenido externo de Instagram.

## Comentarios e Instagram
- Los tres comentarios son **ejemplos de redacción solicitados por el usuario**, no reseñas reales. La advertencia está visible en el encabezado y en cada tarjeta. No se inventan identidades, estrellas ni cifras de satisfacción. Reemplazarlos por testimonios reales antes de usar esta sección como prueba social en una campaña.
- Perfil confirmado por el usuario: https://www.instagram.com/canastosdebasurabuenosaires/
- Integración nativa del perfil mediante el script oficial `https://www.instagram.com/embed.js`. Instagram sirve su contenido; no se copian miniaturas a la web ni se coloca un token en el repositorio.
- El enlace al perfil permanece disponible si Instagram no carga. La disponibilidad depende de Instagram y de los permisos de contenido externo del navegador.
- El versionado de `styles.css` y `script.js` evita reutilizar recursos de la versión anterior.

## Material pendiente
Se incorporaron las cuatro imágenes enviadas por el usuario. Siguen pendientes el WhatsApp real y el logo original. Confirmar vigencia de precios, cobertura y condiciones comerciales con el negocio antes de la campaña.

## Verificación
`node --test tests/contact.test.cjs`

Abrir con un servidor HTTP estático para revisar. La página, fichas, preguntas y navegación siguen accesibles sin JavaScript; la preparación automática del mensaje requiere JavaScript.

## WordPress
Los bloques son independientes: cabecera, hero, catálogo, instalación, preguntas y contacto. Se pueden trasladar a una plantilla o bloques de WordPress conservando contenido y estilos. Esta entrega mantiene GitHub Pages, sin cambiar hosting ni dominio.
