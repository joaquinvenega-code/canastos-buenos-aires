# Canastos de Basura Buenos Aires — V4

Landing estática, sin dependencias ni build. Publicada desde `main` en GitHub Pages:
https://joaquinvenega-code.github.io/canastos-buenos-aires/

## Archivos
- `index.html`: contenido comercial, fichas y formulario de consulta.
- `styles.css`: diseño responsive, navegación y estados de foco.
- `script.js`: menú, selección de modelo, armado/copiado de consulta y WhatsApp.
- `assets/producto-*-20260920.png`: las cuatro nuevas imágenes de producto enviadas el 20 de septiembre, en el orden 60 sin tapa, 100 sin tapa, 100 con tapa y 60 con tapa. Los PNG se conservan sin alteraciones y se encuadran con CSS.
- `assets/modelo-*.jpg`: las fichas comerciales originales. Cada tarjeta conserva su enlace a la ficha y la portada mantiene su imagen anterior.
- `assets/canasto-*.svg`: ilustraciones de V2 conservadas, ya no visibles.
- `assets/logo-negocio.jpg`: logo original confirmado por el usuario, conservado sin alteraciones. Se usa en cabecera, pie y favicon.
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

## Contacto confirmado
WhatsApp: **+54 9 11 3284-9486**, enlace internacional `https://wa.me/5491132849486`.
Los botones de cabecera, portada, catálogo y barra móvil abren WhatsApp directamente. Cada tarjeta incluye su modelo en el mensaje. El formulario permite agregar localidad y revisar/copiar la consulta. El visitante envía desde WhatsApp.
Si el teléfono cambia, actualizar `WHATSAPP_NUMBER` en `script.js` y los enlaces `wa.me` en `index.html`.

El formulario no tiene backend, no guarda datos y no envía mensajes por sí solo. No se incluye analítica propia. La sección Instagram carga contenido externo de Instagram.

## Comentarios e Instagram
- Los tres comentarios son **ejemplos de redacción solicitados por el usuario**, no reseñas reales. La advertencia está visible en el encabezado y en cada tarjeta. No se inventan identidades, estrellas ni cifras de satisfacción. Reemplazarlos por testimonios reales antes de usar esta sección como prueba social en una campaña.
- Perfil confirmado por el usuario: https://www.instagram.com/canastosdebasurabuenosaires/
- Integración nativa del perfil mediante el script oficial `https://www.instagram.com/embed.js`. Instagram sirve su contenido; no se copian miniaturas a la web ni se coloca un token en el repositorio.
- El enlace al perfil permanece disponible si Instagram no carga. La disponibilidad depende de Instagram y de los permisos de contenido externo del navegador.
- El versionado de `styles.css` y `script.js` evita reutilizar recursos de la versión anterior.

## Material pendiente
Se incorporaron las cuatro imágenes comerciales, el logo y el WhatsApp enviados por el usuario. Confirmar vigencia de precios, cobertura y condiciones comerciales con el negocio antes de la campaña. Los comentarios continúan identificados como ejemplos.

## Diseño V4
Se adapta la estética de las capturas aprobadas: azul oscuro, acentos celestes, botones verdes, logo circular, portada con producto, catálogo de cuatro columnas en escritorio y beneficios con iconos. En celulares las tarjetas se apilan para conservar legibilidad. Las fotos del negocio se conservan; las imágenes de referencia se usan como guía visual y no como evidencia de instalaciones ni cantidades de clientes.

## Verificación
`node --test tests/contact.test.cjs`

Abrir con un servidor HTTP estático para revisar. La página, fichas, preguntas y navegación siguen accesibles sin JavaScript; la preparación automática del mensaje requiere JavaScript.

## WordPress
Los bloques son independientes: cabecera, hero, catálogo, instalación, preguntas y contacto. Se pueden trasladar a una plantilla o bloques de WordPress conservando contenido y estilos. Esta entrega mantiene GitHub Pages, sin cambiar hosting ni dominio.
