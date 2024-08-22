INSERT IGNORE INTO CATEGORIAS (nombre, ubicacion, imagen)
VALUES 
("NIEVE", "", "https://barilocheturismo.gob.ar/images/actividades/nieve/ski-01.jpg"), 
("PLAYAS", "", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/77/c4/ed/img-20190213-wa0063-largejpg.jpg"), 
("TREKKING", "", "https://s1.wklcdn.com/image_201/6059775/91336779/59655349Master.jpg"), 
("BODEGAS", "", "https://www.argentina4u.com/pub/media/wysiwyg/Argentina/maipu_wine.jpg");

INSERT IGNORE INTO PRODUCTOS (nombre, descripcion, descripcion_larga, itinerario, imagen_url, imagen_url2,
        imagen_url3, precio, disponible, ubicacion, detalle_itinerario, categoria_id, latitud, longitud)
VALUES
('San Carlos de Bariloche',
'Explora el Parque Nacional Tierra del Fuego y viaja en el Tren del Fin del Mundo en Ushuaia',
'Este tour te lleva a través del impresionante Parque Nacional Tierra del Fuego en Ushuaia. Incluye un viaje en el famoso Tren del Fin del Mundo, donde aprenderás sobre la historia de la región. También podrás disfrutar de caminatas y avistamiento de fauna local.',
'Día 1: Llegada y recorrido por el Parque Nacional.
Día 2: Viaje en el Tren del Fin del Mundo y exploración de la región.
Día 3: Actividades al aire libre y regreso.',
'https://t4.ftcdn.net/jpg/03/59/04/93/360_F_359049346_S8EnaUo5xfEpMgjRh1cWbrDb5poVduKv.jpg',
'https://t4.ftcdn.net/jpg/02/68/03/95/360_F_268039528_Eir6NkQ6qjags6nRuClgGye0csArZOPd.jpg',
'https://c0.wallpaperflare.com/preview/881/303/659/argentina-san-carlos-de-bariloche-lake-mountain.jpg',
300.00,
true,
'San Carlos de Bariloche, Argentina',
'Edad: 0 a 99 años. Máximo 6 por grupo. Duración: 3 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
1,
-41.1335,
-71.3080),

('Parque Nacional y Viaje en Tren al Fin del Mundo',
'Explora el Parque Nacional Tierra del Fuego y viaja en el Tren del Fin del Mundo en Ushuaia',
'Este tour te lleva a través del impresionante Parque Nacional Tierra del Fuego en Ushuaia. Incluye un viaje en el famoso Tren del Fin del Mundo, donde aprenderás sobre la historia de la región. También podrás disfrutar de caminatas y avistamiento de fauna local.',
'Día 1: Llegada y recorrido por el Parque Nacional.
Día 2: Viaje en el Tren del Fin del Mundo y exploración de la región.
Día 3: Actividades al aire libre y regreso.',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg',
'https://www.vivituviaje.com/wp-content/uploads/parque_nacional_tierra_del_fuego-02.jpg',
'https://blogimagestc.s3.amazonaws.com/tren_fin_del_mundo4.jpg',
300.00,
true,
'Ushuaia, Argentina',
'Edad: 0 a 99 años. Duración: 2 horas. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
1,
-54.7930,
-68.2055),

('Bodega Trapiche, Mendoza',
'Visita la famosa bodega Trapiche en Mendoza y disfruta de degustaciones de vino',
'Este tour incluye una visita a la renombrada bodega Trapiche en Mendoza. Conocerás el proceso de elaboración del vino y podrás degustar una selección de vinos premium. Además, disfrutarás de un almuerzo gourmet en el restaurante de la bodega.',
'Llegada y bienvenida.
Recorrido por los Viñedos.
Visita a la Bodega y Proceso de Vinificación.
Degustación de Vinos.
Almuerzo en el Restaurante de la Bodega.
Compra de Vinos y Souvenirs.',
'https://caminosdelvino.com/wp-content/uploads/2023/03/Rally-Bodegas-Trapiche-02.jpeg',
'https://www.clarin.com/img/2023/05/23/Isq0l2FiJ_720x0__1.jpg',
'https://bomtravel.com/wp-content/uploads/2022/04/1-35.jpg',
150.00,
true,
'Mendoza, Argentina',
'Edad: 0 a 99 años. Duración: 6 horas. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
4,
-32.971328,
-68.749974),

('Excursión a Cataratas de Iguazú',
'Descubre la majestuosidad de las Cataratas de Iguazú, una de las maravillas naturales del mundo',
'Este tour te lleva a las impresionantes Cataratas de Iguazú, ubicadas en la frontera entre Argentina y Brasil. Podrás explorar tanto el lado argentino como el brasileño de las cataratas, con visitas a los circuitos Superior e Inferior, la Garganta del Diablo, y más.',
'Llegada al Parque Nacional Iguazú.
Recorrido por el Sendero Superior.
Visita a la Garganta del Diablo.
Almuerzo en el Parque.
Recorrido por el Sendero Inferior y Paseo en Barco.
Visita a la Isla San Martín.',
'https://elcomercio.pe/resizer/2ITamSMqTz3Ot8IrtHlNWls0Idc=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PFSTC2F2P5GSDB2OAN3ERHITCY.jpg',
'https://www.iguazujungle.com/esp/web2/images/Web%20192016.jpg',
'https://www.welcomeargentina.com/paseos/cataratas_iguazu/cataratas-iguazu-2.jpg',
200.00,
true,
'Cataratas de Iguazú, Argentina',
'Edad: 0 a 99 años. Máximo 30 por grupo. Duración: 8-10 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
3,
-25.6953,
-54.4367),

('Cerro de los 7 Colores, Jujuy',
'Admira el impresionante Cerro de los 7 Colores en Purmamarca, Jujuy',
'Este tour te lleva al encantador pueblo de Purmamarca para ver el famoso Cerro de los 7 Colores. Aprenderás sobre la geología y la cultura local mientras disfrutas de vistas espectaculares y paseos por el pueblo.',
'Llegada a Purmamarca.
Inicio del Sendero al Cerro de los 7 Colores.
Vista Panorámica desde el Mirador.
Almuerzo en Purmamarca.
Visita al Paseo de los Colorados.
Tiempo Libre y Regreso.',
'https://www.argentinaparamirar.com.ar/wp-content/uploads/2024/01/cerro-de-los-7-colores.jpg',
'https://t3.ftcdn.net/jpg/03/70/04/56/360_F_370045689_YmVoAK0WAjsGS6WUGMZgZ3rvWUgTlEZ9.jpg',
'https://i.pinimg.com/736x/62/9a/b4/629ab4feb040d7c804704167e5c0eb14.jpg',
100.00,
true,
'Purmamarca, Jujuy, Argentina',
'Edad: 0 a 99 años. Máximo 27 por grupo. Duración: 12 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
3,
-24.4171,
-65.6985),

('Mini Trekking Glaciar Perito Moreno, El Calafate',
'Experimenta una caminata única sobre el glaciar Perito Moreno en El Calafate',
'Este tour te ofrece la oportunidad de realizar una caminata sobre el famoso glaciar Perito Moreno. Con la ayuda de guías experimentados, explorarás las formaciones de hielo y disfrutarás de vistas espectaculares del glaciar y el lago Argentino.',
'Llegada al Parque Nacional Los Glaciares.
Transporte al Glaciar.
Preparación y Briefing.
Inicio del Mini Trekking.
Almuerzo y Exploración.
Regreso a El Calafate.',
'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/04/b1/f4.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/eb/b1/caption.jpg?w=1200&h=-1&s=1',
'https://www.interpatagonia.com/paseos/trekkingperitomoreno/trekking-perito-moreno-7.jpg',
180.00,
true,
'El Calafate, Argentina',
'Edad: 8 a 65 años. Máximo 50 por grupo. Duración: 10 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
3,
-50.4960,
-73.0503),

('Las Salinas Grandes, Salta y Jujuy',
'Explora las vastas y deslumbrantes Salinas Grandes en el norte de Argentina',
'Este tour te lleva a las impresionantes Salinas Grandes, una vasta extensión de sal en el norte de Argentina. Aprenderás sobre la geología y la historia de la región mientras disfrutas de vistas únicas y oportunidades fotográficas.',
'Llegada a Salinas Grandes.
Primeras Impresiones.
Exploración del Salar y Sesión de Fotos.
Almuerzo en el Área de Servicios.
Visita a los Alrededores y Comunidad Local.
Regreso a Salta o Jujuy.',
'https://agathauraviajes.tur.ar/wp-content/uploads/2020/01/Salinas-Grandes.jpg',
'https://media.istockphoto.com/id/471724035/es/foto/las-salinas-grandes-sal-desierto-en-argentina-los-andes.jpg?s=612x612&w=0&k=20&c=BSCcye4st4sZF2Mrl2Ir6pc7e7FfX_voDBnzUz4EpPQ=',
'https://bomtravel.com/wp-content/uploads/2022/06/10-10.jpg',
120.00,
true,
'Salinas Grandes, Salta y Jujuy, Argentina',
'Edad: 0 a 69 años. Máximo 23 por grupo. Duración: 13 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
3,
-24.6586,
-66.4105),

('Tour para Pequeños Grupos en Buenos Aires',
'Descubre Buenos Aires en un tour personalizado para pequeños grupos',
'Este tour te ofrece una experiencia personalizada para explorar Buenos Aires en pequeños grupos. Visitarás los puntos más emblemáticos de la ciudad como la Plaza de Mayo, el barrio de La Boca, San Telmo y el moderno Puerto Madero. Aprenderás sobre la historia y la cultura porteña con guías locales.',
'Desayuno en una Cafetería Tradicional.
Visita al Barrio La Boca y Caminito.
Almuerzo en una Parrilla Local.
Paseo por el Barrio de San Telmo.
Paseo por el Puerto Madero y la Dársena Norte.
Visita al Obelisco.
Recorrido por los principales puntos turísticos de Buenos Aires.',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8d/5f/f9/caption.jpg?w=1200&h=-1&s=1',
'https://img.freepik.com/fotos-premium/ciudad-buenos-aires-vista-obelisco_686512-109.jpg',
'https://media.istockphoto.com/id/523040054/es/foto/colorido-edificio-la-boca-barrio-de-buenos-aires-argentina.jpg?s=612x612&w=0&k=20&c=N0AeTBfuve6TPCuV1UwhqVWA7pqo7eZZuTxKkdgcGsU=',
80.00,
true,
'Buenos Aires, Argentina',
'Edad: 0 a 99 años. Máximo 30 por grupo. Duración: 3-5 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
3,
'',
''),

('Recorrido vinícola de día completo con almuerzo gourmet', 
'Explore los vinos de la región vinícola más grande de Argentina',
'Explore los vinos de la región vinícola más grande de Argentina en esta excursión de lujo de un día para grupos pequeños desde Mendoza. 
Visitará tres o cuatro de las mejores bodegas de la región de Mendoza, con una guía para obtener información y anécdotas en la ruta. Disfruta de degustaciones guiadas en las bodegas mientras admiras sus 
impresionantes escenarios y saborea un almuerzo gourmet de varios platos con maridajes de vino como parte de la experiencia.',
'Empezará en Mendoza.
Pase por: Trout and Wine Tours - Lujan de Cuyo - Chacras de Coria - Agrelo.
Volverás al punto de partida',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a4/80/6d.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a4/82/fc.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/8a/b7/0d/caption.jpg?w=1000&h=-1&s=1',
180.00,
true,
'Mendoza, Argentina', 
'Edad: 18 a 90 años. Máximo 9 por grupo. Duración: 8 horas. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
4,
'',
''),

('Bodega Chandon + Almuerzo', 
'El Paseo es una experiencia única en donde se unen dos clásicas Bodegas.',
'El Paseo es una experiencia única en donde se unen dos clásicas Bodegas. El Enemigo liderada por el prestigioso Alejandro Vigil y Chandon mundialmente conocida por sus espumantes. La Visita incluye Transporte, Visita, Degustación y almuerzo completo maridado. Para cumplir con las normativas de los lugares que visitarán, el ingreso de los niños queda sujeto a cada bodega por protocolos de seguridad.',
'Se le recogerá.
Bodega Chandon (parada de 2 horas, entrada incluida).
Casa El enemigo (parada de 3 horas, entrada incluida).',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/3d/ba/bb.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/3d/ba/cd.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/3d/ba/ce.jpg',
265.00,
true,
'Mendoza, Argentina',
'Edad: 18 a 90 años. Máximo 9 por grupo. Duración: de 5 a 7 horas. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
4,
'',
''),

('Experiencia en Bodega Renacer',
'Descubre el proceso de elaboración del vino en la Bodega Renacer en Lujan',
'Conozca el proceso de elaboración del vino de la vid al barril en este recorrido por la bodega Bodega Renacer en Lujan. Después de ir detrás de las escenas en los viñedos y bodega, diríjase a la sala de degustación para una degustación guiada de cuatro vinos clásicos. Actualice para incluir 
vinos premium directamente de las cubas y barriles, además de variedades de edición limitada.',
'Empezará en Bodega Renacer.
Bodega Renacer (parada 70 minutos - entrada incluida)',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/01/4d/03.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/0e/56/58.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/01/4d/02.jpg',
27.00,
true,
'Mendoza, Argentina',
'Edad: 18 a 65 años. Máximo 50 por grupo. Duración: de 1 hora. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
4,
'',
''),

('El Inicio WineTour x 2 Pax (Historia y Vinos)',
'Descubre la historia y los vinos de la región norte de Argentina en este tour de bodegas',
'Fue en Córdoba donde se creó y fabricó la primera bodega de nuestro país, en la Jesuítica Estancia de Jesús María y luego, 
con el paso de los años, con un gran impulso en los últimos tiempos, se ha ido incrementando la oferta de bodega y fincas. 
La región norte, cercana a la ciudad, es testigo y testimonio de todo esto. Visitamos 2 museos jesuitas y 2 bodegas.',
'Se le recogerá. 
Bodega la Caroyense - Parada: 30 minutos - Entrada incluida
Bodega Terra Camiare - Parada: 60 minutos - Entrada incluida
Estancia Jesuítica de Jesus Maria - Museo Jesuitico Nacional - Parada: 40 minutos
Estancia de Caroya - Parada: 30 minutos - Admisión excluida
Volverás al punto de partida',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/8a/6d/74.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/8a/6b/4f.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/8a/6d/7b.jpg',
88.00,
true,
'Córdoba, Argentina',
'Edad: 18 a 65 años. Máximo 50 por grupo. Duración: de 6 a 8 horas. Hora de inicio: ver disponibilidad. Guía en directo: Portugués, Inglés, Español',
4,
'',
''),

('Excursión de día completo al glaciar Perito Moreno con navegación',
'Visita al glaciar Perito Moreno.',
'Visitar el glaciar Perito Moreno en un solo día es fácil en esta visita guiada desde El Calafate. 
Una salida a primera hora de la mañana le ayudará a evitar las multitudes, así podrá pasear a lo largo de 
la pasarelas en frente del glaciar sin demasiadas intromisiones cuando llegue. A continuación, 
acérquese a unos 150 metros (490 pies) del glaciar en una excursión de navegación por la cara sur.',
'Se le recogerá.
Perito Moreno Glaciar - Parada: 3 horas - Entrada incluida.
Pasarelas Perito Moreno - Parada: 2 horas - Entrada incluida.
Volverás al punto de partida',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ff/de/0f.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ff/de/14.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/15/c5/e4/caption.jpg?w=1000&h=-1&s=1',
170.00,
true,
'El Calafate, Argentina',
'Edad: 0 a 99 años. Máximo 6 por grupo. Duración: 3 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
1,
'',
''),


('Torres Del Paine Full Day Camioneta Terrestre 4x4 desde El Calafate',
'Viaja a Torres del Paine en un camión de aventura resistente',
'Viaja a Torres del Paine en un camión de aventura resistente, utilizando un atajo sin pavimentar 
para ahorrar horas de tu tiempo en tránsito. Eso significa más tiempo en el Parque Nacional Torres del Paine,
donde pasará la mañana caminando por miradores con espectaculares vistas del paisaje montañoso. 
Después de un almuerzo campestre provisto,  emprenda una caminata de 2 horas hacia el lago Pehoé y el lago Nordenskjöld.',
'Se le recogerá
El Calafate - Parada: 4 horas
Villa Cerro Castillo - Parada: 30 minutos
Lago Sarmiento - Parada: 15 minutos
Torres del Paine - Parada: 20 minutos
Torres del Paine - Parada: 30 minutos
Parque nacional Torres del Paine - Parada: 15 minutos
Lago Nordenskjold - Parada: 15 minutos - Admisión excluida
Torres del Paine - Parada: 90 minutos
Torres del Paine - Parada: 15 minutos
Volverás al punto de partida',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/83/a1/3d.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/83/a2/cd.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/83/a2/cd.jpg',
205.00,
true,
'El Calafate, Argentina',
'Edad: de 4 a 90 años. Máximo 45 por grupo. Duración: 14 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
1,
'',
''),

('San Martín de los Andes por la Ruta de los 7 lagos',
'Excursión por los paisajes mas impresionantes de la Patagonia',
'Descubra por qué Bariloche es famoso por sus lagos en una excursión de día completo por uno de los 
paisajes más impresionantes de la Patagonia. Viaje con un guía bilingüe a lo largo de una pintoresca 
ruta que serpentea a través de cuerpos de agua azules y esmeralda, espectaculares formaciones rocosas, 
ríos y bosques alpinos. Haga paradas para empaparse del paisaje en las playas junto al lago y otros 
miradores panorámicos, y  visite la ciudad de San Martín de los Andes para disfrutar de una dosis de
cultura y cocina locales.',
'Empezará en San Carlos de Bariloche
Pase por: Nahuel Huapi Lake - San Martin de los Andes
Volverás al punto de partida',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/61/95/e1.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/61/95/df.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/61/95/e5.jpg',
73.00,
true,
'San Carlos de Bariloche, Argentina',
'Edad: de 0 a 90 años. Máximo 10 por grupo. Duración: 12 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
1,
'',
''),

('Teleferico Cerro Otto',
'Suba hasta la cima del Cerro Otto',
'A solo 5km de la ciudad, viva y disfrute la montaña. Llegue a la cima en confortables telecabinas. 
Este moderno medio de elevación compuesto por góndolas panorámicas con capacidad para cuatro pasajeros 
cada una, lo llevará desde la estación inferior hasta la cima del Cerro Otto, a 1405m.s.n.m. y le permitirá 
gozar del espectacular paisaje en todas las épocas del año.',
'Intinerario: Ascenso en teleférico
Entrada - Cerro Otto',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a9/f4/a1.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/30/9c/a8/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/14/46/e5/caption.jpg?w=1000&h=-1&s=1',
38.00,
true,
'San Carlos de Bariloche, Argentina',
'Edad: de 5 a 90 años. Duración: de 2 a 4 horas. Hora de inicio: ver disponibilidad. 
Guía en directo: Portugués, Inglés, Español',
1,
'',
''),

('Excursión de un día al monte Tronador y al glaciar Negro',
'Descubra el encanto helado del monte Tronador y el glaciar Negro en una estimulante excursión de día completo al Parque Nacional Nahuel Huapi desde Bariloche.',
'Esta excursión muy especial le lleva a conocer las partes más hermosas del Parque Nacional Nahuel Huapi. Visite bosques, lagos, playas, montañas e incluso cascadas. También verá la montaña más alta de la zona, monte Tronador, que se eleva 3478 metros (11 411 pies) por encima del nivel del mar formando un límite natural entre Argentina y Chile. Las vistas desde esta altura son espectaculares. Con un guía experto, viaje a través del espectacular paisaje de la región de Bariloche y disfrute de las vistas panorámicas del lago Gutiérrez. Y atraviese impresionantes bosques y espectaculares valles para ver el impresionante glaciar Negro.',
'Después de la recogida en su hotel de Bariloche nos dirigiremos hacia el sur para conectar con la autopista nacional 258. A lo largo de esta ruta cruzaremos la Pampa de Huenuleu, llegando finalmente al lago Gutiérrez para disfrutar de unas vistas impresionantes y de oportunidades para hacer fotos. A medida que el viaje continúa y la carretera se bifurca, nos adentraremos en una zona menos transitada bajando por la carretera de grava hasta el Tronador. Después de pasar por valles y umbríos bosques llegaremos al Glaciar Negro, Ventisquero Negro. El glaciar tiene un llamativo color negro a pesar de ser alimentado por un pequeño río que fluye desde el inmaculado y blanco glaciar Río Manso, a solo unas decenas metros por encima en la cima de la montaña. Haremos una parada en el monte Tronador para ver todos los alrededores, incluyendo el país vecino, Chile. ',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/c1/af/fa.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/65/71/cd/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f2/e7/34/excursion-de-un-dia-al.jpg?w=1000&h=-1&s=1',
66.00,
true,
'San Carlos de Bariloche, Provincia de Río Negro, La Patagonia',
'Edades: de 0 a 99, máx. de 10 por grupo
Duración: 9 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: portugués, inglés, Español',
1,
'',
''),

('Escapada de un día por la Nieve',
'Recorra los Andes desde Mendoza con Aconcagua, Uspallata y Puente del Inca',
'Mendoza se encuentra en las estribaciones de la imponente cordillera de los Andes, a lo largo de parte de la carretera Panamericana. En esta excursión, saldrá de la ciudad para realizar un emocionante viaje por carretera hasta las montañas. A lo largo del recorrido, realizará una parada para visitar los pueblos andinos tradicionales de Potrerillos y Uspallata, podrá admirar maravillas naturales como el puente rocoso Puente del Inca y disfrutará de las vistas del Aconcagua, el pico más alto de América.',
' Vistas magníficas mientras atraviesa la cordillera de los Andes
Visite los pueblos andinos tradicionales: tiempo libre para comprar artesanía
Vea el Aconcagua, el pico más alto de América
Servicio de recogida en el hotel y traslado de ida y vuelta sin complicaciones desde Mendoza',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/00/80/d1/trilha.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d1/0f/fe/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ab/95/16/andes-dagtrip-vanuit.jpg?w=1000&h=-1&s=1',
211.00,
true,
'Mendoza, Provincias de Mendoza, Cuyo, Argentina',
'Edades: de 2 a 99, máx. de 23 por grupo
Duración: 12 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: Español',
1,
'',
''),

('Snorkeling con leones marinos por Madryn Buceo',
'Observe de cerca a los leones marinos en su entorno natural',
'Disfrute nadando y practicando esnórquel en una caleta poco profunda conocida por sus numerosos leones marinos salvajes, observe aves marinas alrededor de la Reserva Natural de Punta Loma y esté atento a las ballenas, delfines y pingüinos en el camino. Los proveedores de tours no entrenan ni alimentan a los leones marinos, y ellos inician cualquier interacción.',
'-La excursión principal de Puerto Madryn.
-Experiencia ideal para grupos de amigos y familiares.
- Recorrido por la hermosa Reserva Natural de Punta Loma con anidación de aves.
- Navegamos al lado de un barco naufragado español en la playa de Paraná.
- También podemos ver pingüinos, ballenas, delfines y muchos otros animales de la región.',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/81/59/07/fotografia-del-instructor.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/27/2c/2e/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/f9/59/75/snorkeling-con-leones.jpg?w=1000&h=-1&s=1',
124.00,
true,
'Playa El Doradillo, Puerto Madryn',
'Edades: de 6 a 70, máx. de 10 por grupo
Duración: 2 h 30 m
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Cumple con las especificaciones de bienestar animal
Guía en vivo: inglés, italiano, Español',
2,
'',
''),

('Excursión en tierra Punta Tombo',
'Vea de cerca a los pingüinos de Punta Tombo',
'Vea de cerca a los pingüinos en un recorrido que lo lleva a un lugar donde la colonia de pingüinos de Magallanes más grande del mundo descansa y cría a sus crías. Pasee por la colonia y vea miles de pingüinos cuidando a sus polluelos, mudando sus plumas y preparándose para regresar al sur helado para cazar peces.',
'Hacer una parada en: Replica del Titanosaurio, Trelew Argentina
Tiempo para fotos en la réplica tamaño real del dinosaurio más grande del mundo.
Duración: 20 minutos
Hacer una parada en: Punta Tombo, Ruta Provincial Nro.1, Dos Pozos Argentina
Llegada a Punta Tombo-Visita al pingüino de Colonia. (BAÑOS / BAÑOS)
Duración: 2 horas
Hacer una parada en: Puerto Madryn, Provincia de Chubut, La Patagonia
Realizaremos un city tour al regreso de Punta Tombo
Duración: 30 minutos',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/26/bc/5b.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/13/16/9e/9d.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/40/98/5f.jpg',
129.00,
true,
'Puerto Madryn, Provincia de Chubut, La Patagonia',
'Edades: de 2 a 89, máx. de 17 por grupo
Duración: 7 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Cumple con las especificaciones de bienestar animal
Guía en vivo: inglés, Español',
2,
'',
''),

('Experiencia en Kayak y merienda a orillas del agua',
'Navegamos seguros con “Patagonia Infinita Kayak & Adventure”',
'Practicamos remo, natación y buceo (entre otras actividades out-doors) desde nuestra niñez y recibido el entrenamiento conforme a estándares internacionales de calidad para realizar rescates y atención de emergencias en zonas agrestes. Todos nuestros clientes cuentan con una cobertura de riesgos de accidentes personales y responsabilidad civil.',
'Vení, viví una experiencia única, e inolvidable. Cerrá los ojos, respirá profundo, escuchá los sonidos del silencio, el canto de las aves y el movimiento del agua, sentí en tu piel el soplar del viento. Disfutaras de un te diseñado solo para Patagonia Infinita. Nuestars infusiones son cuidadosamente seleccionadas para un entorno único como el que damos a nuestros visitantes.',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/0a/2d/photo2jpg.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/89/04/0f/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fc/bb/1e/excursiones-en-kayak.jpg?w=1000&h=-1&s=1',
103.00,
true,
'Villa La Angostura, Neuquén',
'Edades: de 0 a 99, máx. de 12 por grupo
Duración: 4 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Español',
2,
'',
''),

('Excursión de rafting en aguas bravas en Rio Chimehuin',
'Enfréntate a los rápidos espeluznantes movimientos de Clase II y III del Río Chimehuín en esta divertida excursión de rafting en aguas bravas desde San Martín de los Andes. ',
'La Clase II enfrenta a cierta turbulencia con algunos remolinos pequeños y pozos de no más de 25 centímetros. La Clase III escala en complejidad, y es considerado el primero de la categoría “aguas blancas”, llamadas así por el color de la espuma al golpear en rocas o girar bruscamente en cañadones. Este nivel hace sentir su vértigo al atravesar rápidos con huecos y olas medianas de no más de un metro. Esté atento a los jabalíes, los buitres y los martines pescadores mientras se precipita a través de las olas, se tropieza con los escalones de piedra y baja la corriente. Este tour para grupos pequeños tiene un máximo de 12 personas para una experiencia personalizada y es ideal para los que realizan el primer balsismo, con instrucción completa y todo el equipo provisto.',
'Saldremos desde San Martín de Los Andes hasta el punto de inicio en el Río Chimehuin.
Realizaremos una flotación de casi 10 km cruzando 8 rápidos de grados 2 y 3.
Después disfrute de un sabroso refrigerio y relájese en una playa desierta.
Lo trasladamos de regreso a San Martín de los Andes.',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/d4/9d/09.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/c2/36.jpg',
' https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/c2/16.jpg',
154.00,
true,
'San Martin de los Andes, Neuquén, La Patagonia',
'Edades: de 5 a 99, máx. de 8 por grupo
Duración: 5 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Español',
2,
'',
''),


('Excursión a la Península Valdés con almuerzo más tour de la ciudad',
'Descubre la fauna de Península Valdés en un tour guiado. Visita el Centro de Visitantes, contempla los elefantes marinos del sur en Caleta Valdés, y observa una colonia de leones marinos en Punta Pirámides.',
'Visita la Península Valdés, lugar declarado patrimonio de la humanidad por la UNESCO, un privilegiado santuario de vida salvaje en el corazón de la Patagonia. Recorre el Istmo Carlos Ameghino, una estrecha franja de tierra que une la península con el continente, desde donde podrás observar simultáneamente los golfos Nuevo y San José. Detente en el Centro de Visitantes, una introducción a los foros y la fauna locales. Dirígete a Caleta Valdés, una gran cala que alberga elefantes marinos del sur. Continúa hasta la pequeña y pintoresca localidad de Puerto Pirámides para hacer un tour de la ciudad y visitar Punta Pirámide, una impresionante colonia de leones marinos. Por último, regresa al muelle. Por el camino, podrás ver maras, guanacos y ñandúes.',
'Contemplaremos la fauna de la Península Valdés.
Visitaremos el Centro de Visitantes para conocer los foros y la fauna locales.
Exploraremos la pequeña y pintoresca ciudad de Puerto Pirámides.
Observaremos los elefantes marinos del sur en Caleta Valdés.
Veremos una colonia de leones marinos en Punta Pirámides',
'https://cdn.getyourguide.com/img/tour/a2320aee4adaa9b9c53fb1b9c1d24a29209e38990129644b296f5f0beac68a8b.jpg/145.jpg',
'https://cdn.getyourguide.com/img/tour/03ed23ab39ca45ff8064c26ca2f5cdb6fa89f6e8a5bf9395c4f368280a646d7c.jpg/145.jpg',
'https://cdn.getyourguide.com/img/tour/0341ee19d5a869642ca3ef0c06a070ca99d0388b62aa66cafc90e65c8437660a.jpg/145.jpg',
135.00,
true,
'Península Valdés, Chubut, Argentina',
'Edades: de 2 a 99, máx. de 20 por grupo
Duración: 6 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Español',
2,
'',
''),

--('', '', '', '', '', '', '', 00.00, true, '', '', 2,'',''),
--('', '', '', '', '', '', '', 00.00, true, '', '', 2,'',''),
--('', '', '', '', '', '', '', 00.00, true, '', '', 2,'',''),


(' Trekking con Raquetas de Nieve por el Día',
'Ponte las raquetas de nieve y prepárate para una aventura.',
'Esta caminata de un día completo con guías experimentados lo llevará a través de hermosos bosques de montaña rebosantes de vida silvestre nativa hasta un increíble mirador donde se servirá un almuerzo complementario. Termine con un descenso pausado desde el mirador seguido de una agradable y cálida taza de delicioso chocolate caliente. ¡Raquetas de nieve y bastones están incluidos!',
'Ascenderemos hasta ganar un punto panorámico donde armaremos un living de nieve para almorzar.
El guía utilizando un calentador de montaña derretirá nieve para hacer una sopa demostrando como se cocina en expediciones de alta montaña.
Disfrutaras unos ricos sandwiches y brownie de postre.
Si estas de suerte, veras Cóndores y otras aves sobrevolándote bien cerquita.
Durante el descenso descubrimos huellas que nos revelarán los animales que frecuentan la zona como Zorros, Liebres, Gato Montes y algún que otro Puma o Huemul que ande por la zona.',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/93/69/fe.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/6e/a2/06.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/93/6a/3e.jpg',
175.00,
true,
'San Carlos de Bariloche, Provincia de Río Negro, La Patagonia',
' Edades de 12 a 65
Duración: 6 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Cumple con las especificaciones de bienestar animal
Guía en vivo: portugués, inglés, Español',
3,
'',
''),


('10 secretos de Bariloche, Nahuel Huapi y la Patagonia',
'Descubra los secretos mejor guardados de Bariloche en un recorrido a pie',
'Este recorrido revela vistas e historias que es poco probable que haya encontrado por su cuenta. No tiene que navegar ni preocuparse por superar la barrera del idioma; en cambio, puede concentrarse en las atracciones del casco antiguo y la zona costera de Puerto San Carlos mientras explora a un ritmo relajado en un grupo pequeño limitado a 10 personas.',
'Secretos e historias alrededor del Centro Cívico y el Museo de la Patagonia
Duración: 10 minutos
Mientras caminas por la zona de Puerto San Carlos y el paseo marítimo costero descubriremos más secretos.
Duración: 20 minutos
Descubriremos sobre la arquitectura de la catedral, los cuentos y los vitreaux super únicos y via crusis.
Duración: 20 minutos
Caminaremos por la calle peatonal principal (calle del chocolate) donde haremos una breve visita a una tienda de chocolate icónica.
Duración: 20 minutos',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e5/83/bc/diez-secretos-sobre-bariloche.jpg?w=1000&h=-1&s=1',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/aa/46/24.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7e/71/6a/caption.jpg?w=1000&h=-1&s=1',
30.00,
true,
'San Carlos de Bariloche, Provincia de Río Negro, La Patagonia',
'Edades: de 1 a 99, máx. de 20 por grupo
Duración: 1 h 30 m
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Español',
3,
'',
''),

('Paseo a Caballo',
'Paseo por viñedos y un almuerzo gourmet',
'Paseo junto al río Mendoza durante una excursión de 1,5 horas a caballo. Esta excursión del mediodía le ofrece una visión del sur de Maipú que de otro modo podría perderse, incluidos los viñedos, los olivares y los caminos arbolados. Siga con un asado gourmet (barbacoa argentina) en el restaurante y cava Divina Marga. Los pasajeros están limitados a ocho para garantizar una experiencia de grupos pequeños, incluida la comodidad del traslado en furgoneta desde su hotel.',
'Inicio a las 11 am en su hotel / hostal en la ciudad de Mendoza o alrededores.
Conducimos durante 45 minutos hasta un establo en Lunlunta, en el sur de Maipu.
A las 12 del mediodía iniciamos un recorrido de 90 minutos por los alrededores, que incluye viñedos, olivares y la ribera del Río Mendoza.
Al finalizar la excursión nos dirigimos a Terruño, restaurante ubicado en Club Tapiz, bodega y albergue de vinos.
Aquí disfrutamos de un suntuoso almuerzo de varios platos con maridaje de vinos.
A las 4.30 pm regresamos en automóvil a la ciudad de Mendoza que se encuentra a una hora al norte, llegando a su hotel a las 5.30 pm.
La excursión incluye todos los traslados, la excursión a caballo y el almuerzo con vino',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/b2/5b/02.jpg',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ec/00/db/caption.jpg?w=900&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f0/75/e6/caption.jpg?w=1000&h=-1&s=1',
185.00,
true,
'Maipú, Provincia de Mendoza',
'Edades: de 18 a 80, máx. de 8 por grupo
Duración: 6 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: portugués, inglés, Español',
3,
'',
''),

('Experiencia malbec en la bodega Tierras Altas',
'Tierras Altas fue una de las primeras bodegas boutique de Mendoza y es un excelente productor de malbec.',
'Aproveche la oportunidad especial para realizar un recorrido entre bastidores y ver los viñedos, la sala de tanques de acero y la bodega subterránea. Descubra las técnicas de elaboración de vino que probablemente no podría conocer de otra manera y, lo mejor de todo, disfrute de catas directamente de las barricas de roble.',
'Conozca cómo se hace el vino malbec visitando la bodega Tierras Altas
Recorrido sin complicaciones con todas las catas de vino incluidas
Explore los viñedos, la bodega y la sala de tanques de acero
Disfrute de los comentarios y conozca los secretos de la producción de vino',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a6/3f/cf/caption.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/69/2c/70/20190921-181118-largejpg.jpg?w=1000&h=-1&s=1',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c8/d5/d3/experiencia-malbec-en.jpg?w=1000&h=-1&s=1',
21.00,
true,
'Luján de Cuyo, Mendoza, Provincias de Mendoza, Cuyo, Argentina',
'Edades: de 0 a 99, máx. de 15 por grupo
Duración: 1 h 30 m
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Español',
4,
'',
''),

('Bodega Clos de los Siete',
'Con este tour privado del vino, podrá aprender más sobre Clos de los Siete',
'Un proyecto vitivinícola colaborativo especial de un grupo de enólogos franceses, en el área del Valle de Uco en Mendoza. Realizar una visita guiada le ahorra tiempo en la investigación de bodegas, ya que se organiza una programación completa para usted. En el camino, disfrute del lujo de beneficios adicionales, como almuerzo y catas de vino incluidos.',
'Visita y degustaciones en 2 bodegas
Almuerzo gourmet en bodega
Pickup en hotel / hospedaje
Guía - Sommelier de Clos de los Siete
Transporte con guía registrado
Nuestra visita cubre las bodegas Monteviejo, Cuvelier Los Andes, DiamAndes y las recientemente abiertas al público de Rolland.',
'https://tangol.com/blog/Fotos/Galeria/mendoza_0_202102121427430.JPG',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/25/70/d8.jpg',
'https://www.aseuniv.com/images/clos-de-los-7-img-5.jpg',
350.00,
true,
'Valle de Uco, Mendoza',
'Edades de 18 a 99
Duración: 8 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: portugués, inglés, Francés, Español',
4,
'',
''),

('Visita a 2 Bodegas Premium de Cafayate',
'Calme su apetito de vino argentino visitando dos de las mejores bodegas del valle Calchaqui',
'Junto con su guía, podrá elegir entre 4 bodegas, agrupadas en la parte oriental u occidental del valle, con una parada en cada una de ellas para una visita de 45 minutos y una degustación de vinos. Aumente sus conocimientos sobre el vino con una parada en el Museo de la vid y del vino. La visita incluye todas las entradas, las degustaciones y el traslado de ida y vuelta desde Cayafate.',
'Elegir entre una opción que incluye visitas a las bodegas El Esteco y El Porvenir de los Andes, o entre la opción que incluye las bodegas San Pedro de Yacochuya y Piattelli. Independientemente de la opción elegida en el día de su visita, podrá probar algunos de los mejores vinos de la región noroeste de Argentino en medio de un paisaje impresionante. 
La visita a cada bodega dura aproximadamente 45 minutos, incluye un recorrido por las instalaciones y cata de vinos, guiadas por un experimentado sumiller. Conozca los detalles de estos vinos, así como los procesos utilizados para cultivar, cosechar y elaborar los vinos. Además, podrá hacer una parada en el Museo de la vid y del vino. Tras las visitas guiadas y las degustaciones, tómese un descanso para almorzar (por cuenta propia).',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/f4/92/59.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/d0/11/21.jpg',
'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/36/a2/20.jpg',
90.00,
true,
'Cafayate, Provincia de Salta, Norte de Argentina',
'Edades de 0 a 99
Duración: 6 h
Horario de inicio: consultar disponibilidad
Entrada para dispositivos móviles
Guía en vivo: inglés, Francés, Español',
4,
'',
'');


INSERT IGNORE INTO usuarios (apellido, email, es_administrador, nombre, password)
VALUES 
("Garcia", "ana.garcia@example.com", false, "Ana", "anagarcia1") ,
("Martinez", "luis.martinez@example.com", false, "Luis", "martinez1"),
("Fernandez", "maria.fernandez@example.com", false, "Maria", "fernandez1"),
("Rodriguez", "juan.rodriguez@example.com", false, "Juan", "rodriguez1"),
("Lopez", "carla.lopez@example.com", false, "Carla", "carlalopez1"),
("Marquesi", "martin.marquesi@example.com", false, "Martin", "marquesi1"),
("Quiroga", "esteban.quiroga@example.com", false, "Esteban", "quiroga1"),
("Corrado", "alfredo.corrado@example.com", false, "Alfredo", "corrado1"),
("Boanerges", "marcela.boanerges@example.com", false, "Marcela", "boanerges1"),
("Gonzalez", "noelia.gonzalez@example.com", false, "Noelia", "gonzalez1");
