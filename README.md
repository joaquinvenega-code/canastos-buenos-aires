# Canastos de Basura Buenos Aires — V4

Landing estática, sin dependencias ni build. Publicada desde `main` en GitHub Pages:
https://joaquinvenega-code.github.io/canastos-buenos-aires/

## Archivos
- `index.html`: contenido comercial, fichas y formulario de consulta.
- `styles.css`: diseño responsive, navegación y estados de foco.
- `script.js`: menú, selección de modelo, armado/copiado de consulta y WhatsApp.
- `assets/producto-*-20260920.png`: las cuatro nuevas imágenes de producto enviadas el 20 de septiembre, en el orden 60 sin tapa, 100 sin tapa, 100 con tapa y 60 con tapa. Los PNG se conservan sin alteraciones y se encuadran con CSS.
- `assets/modelo-*.jpg`: las fichas comerciales originales. Cada tarjeta conserva su enlace a la ficha. La portada utiliza la nueva imagen del modelo de 60 cm con tapa, también confirmada por el usuario.
- `assets/canasto-*.svg`: ilustraciones de V2 conservadas, ya no visibles.
- `assets/logo-negocio.jpg`: logo original confirmado por el usuario, conservado sin alteraciones. Se usa en cabecera, pie y favicon.
- `tests/contact.test.cjs`: pruebas de interacción sin dependencias ni envíos reales.
- `REVIEW-V2.md`: auditoría, decisiones y validación.

## Datos conservados del proyecto
| Modelo | Precio final en Buenos Aires |
| --- | --- |
| 60 cm sin tapa | $160.000 |
| 60 cm con tapa | $180.000 |
| 100 cm sin tapa | $230.000 |
| 100 cm con tapa | $250.000 |

Todos: 0,50 m de ancho, 0,50 m de profundidad y 1,50 m de altura total.
Condiciones confirmadas por el cliente el 22 de septiembre: los cuatro precios son finales e incluyen envío e instalación sin cargo en todo Buenos Aires. Venta directa de fábrica, sin intermediarios. Estructura reforzada, trabas en patas y todos los medios de pago, incluido Mercado Pago. Fuera de Buenos Aires se cotiza el envío por Correo Argentino.

También se fabrican canastos más grandes a partir de los tamaños estándar y diseños específicos para barrios cerrados, con presupuesto según medidas y diseño.

## Contacto confirmado
WhatsApp: **+54 9 11 3284-9486**, enlace internacional `https://wa.me/5491132849486`.
Los botones de cabecera, portada, catálogo y barra móvil abren WhatsApp directamente. Cada tarjeta incluye su modelo en el mensaje. El formulario permite agregar localidad y revisar/copiar la consulta. El visitante envía desde WhatsApp.
Si el teléfono cambia, actualizar `WHATSAPP_NUMBER` en `script.js` y los enlaces `wa.me` en `index.html`.

El formulario no tiene backend, no guarda datos y no envía mensajes por sí solo. No se incluye analítica propia. La sección Instagram carga contenido externo de Instagram.

## Comentarios e Instagram
- Se conservan los tres comentarios de prueba por indicación del usuario del 22 de septiembre. Están identificados como ejemplos, no testimonios reales. No hay recepción, almacenamiento ni publicación de comentarios de visitantes; no se conectó ni contrató un servicio externo.
- Perfil confirmado por el usuario: https://www.instagram.com/canastosdebasurabuenosaires/
- Integración nativa del perfil mediante el script oficial `https://www.instagram.com/embed.js`. Instagram sirve su contenido; no se copian miniaturas a la web ni se coloca un token en el repositorio.
- El enlace al perfil permanece disponible si Instagram no carga. La disponibilidad depende de Instagram y de los permisos de contenido externo del navegador.
- El versionado de `styles.css` y `script.js` evita reutilizar recursos de la versión anterior.

## Material pendiente
Pendientes: enlace del Facebook confirmado, fotos reales para sustituir las imágenes generadas (portada: 100 cm con tapa). Los precios, cobertura, venta directa y pedidos a medida ya fueron confirmados por el cliente.

## Diseño V4
Se adapta la estética de las capturas aprobadas: azul oscuro, acentos celestes, botones verdes, logo circular, portada con producto, catálogo de cuatro columnas en escritorio y beneficios con iconos. En celulares las tarjetas se apilan para conservar legibilidad. Las fotos del negocio se conservan; las imágenes de referencia se usan como guía visual y no como evidencia de instalaciones ni cantidades de clientes.

## Verificación

`node --test tests/*.test.cjs`

Abrir con un servidor HTTP estático para revisar. La página, fichas, preguntas y navegación siguen accesibles sin JavaScript; la preparación automática del mensaje requiere JavaScript.

## WordPress
Los bloques son independientes: cabecera, hero, catálogo, instalación, preguntas y contacto. Se pueden trasladar a una plantilla o bloques de WordPress conservando contenido y estilos. Esta entrega mantiene GitHub Pages, sin cambiar hosting ni dominio.

## Ícono de WhatsApp
Símbolo SVG compartido entre los ocho accesos, basado en [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg). Mantiene proporciones y tamaños mínimos de 24 px en el catálogo, 26 px en navegación y 32 px en portada.
