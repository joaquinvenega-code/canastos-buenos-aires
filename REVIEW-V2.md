# Revisión V2 — 18 de septiembre de 2026

## Fuente y alcance
Revisión visual del sitio publicado (escritorio y celular) y del repositorio desde el commit `fb056f7da2861be16276695a37b70edda90a79da`. El historial contiene únicamente SVG, no fotos originales. El contexto recuperado no contiene archivos adjuntos ni WhatsApp real.

## Hallazgos y soluciones
| Problema observado en V1 | Cambio en V2 |
| --- | --- |
| CTA de WhatsApp abre una alerta técnica porque el número tiene X. No conserva la consulta como una acción útil. | Estado pendiente explícito, selección de modelo, localidad opcional, mensaje visible y copiable. Envío deshabilitado hasta tener un número real. |
| La misma ilustración se usa para cuatro productos; tapa y tamaño no se distinguen. | Cuatro SVG orientativos diferenciados. Medidas escritas siguen siendo la referencia comercial. |
| “Instalaciones reales” muestra tres copias de una ilustración. | Se retira la falsa galería y se conservan las localidades como trabajos informados, sin fingir fotos. |
| Imagen de portada usa object-fit:cover y recorta texto incrustado en el gráfico. | Ilustración sin texto incorporado, encuadre completo y rótulos HTML legibles. |
| Fondo oscuro uniforme, botones verdes repetidos y poco contraste entre secciones. | Fondo claro cálido, azul para acciones, sección de instalación verde oscuro y jerarquía más consistente. |
| Titular extenso y características apiladas demoran el catálogo en celular. | Titular breve, medidas resumidas en una fila, imagen más compacta y acceso fijo al catálogo/consulta. |
| Texto como “La idea de la landing…” y referencias al “material comercial provisto” hablan de la implementación. | Copy dirigido al comprador y aclaración simple de precios de referencia. |
| Precios y variantes aparecen en orden poco fácil de comparar. | Orden por tamaño y tapa: 60 sin/con; 100 sin/con. Precios, medidas y acciones alineados. |
| Menú móvil conserva etiqueta “Abrir” cuando está abierto y no responde a Escape. | Etiqueta/estado accesibles, cierre al navegar, clic fuera y Escape con devolución del foco. |
| Cabecera fija puede tapar destinos de enlaces. | Separación de scroll para anclas y foco visible. |

## Validación previa a publicación
- Revisión visual en escritorio y celular de portada, catálogo, preguntas y contacto.
- Anchos 320, 390, 600, 768, 1024, 1280 y 1440 px: sin desborde horizontal; imágenes cargadas; catálogo de una, dos o cuatro columnas según ancho.
- Modelo seleccionado desde la ficha y localidad con acentos conservados en el mensaje.
- Copiado comprobado desde navegador; confirma explícitamente que no se envió nada.
- FAQ expandible y menú con Escape comprobados; sin errores ni avisos en consola del sitio local.
- Todos los enlaces de ancla tienen destino y todas las imágenes tienen dimensiones y texto alternativo apropiado.
- Seis pruebas automatizadas: número pendiente/inválido, cuatro modelos, codificación de mensaje con número configurado simulado, copiado, alternativa si falla portapapeles y cierre del menú.
- La prueba del número configurado no abre servicios externos: simula window.open. No se realizó ningún envío.

## Límites de esta entrega
La landing queda lista para revisión de diseño. La captación por WhatsApp requiere el número real. No se añadieron reseñas, garantías, plazos, descuentos, certificaciones, direcciones ni otras afirmaciones sin respaldo. Las fotos y el logo original siguen pendientes. La validación responsive es en navegador con tamaños de viewport; no sustituye pruebas en dispositivos físicos o una auditoría completa de accesibilidad.
