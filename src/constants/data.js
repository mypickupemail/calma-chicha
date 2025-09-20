import images from './images';

const mainDishes = [
  {
    title: 'Pescado Fresco del Mar',
    price: '$8.200',
    tags: 'Claromeco | Grillado | Con limón',
  },
  {
    title: 'Paella de Mariscos',
    price: '$9.800',
    tags: 'Para 2 personas | Mejillones y langostinos',
  },
  {
    title: 'Empanadas de Atún',
    price: '$1.400',
    tags: 'Especialidad costera | Caseras',
  },
  {
    title: 'Asado de Tira',
    price: '$8.500',
    tags: 'Parrilla | Con guarnición',
  },
  {
    title: 'Cazuela de Mariscos',
    price: '$9.200',
    tags: 'Mejillones | Almejas | Langostinos',
  },
];

const drinks = [
  {
    title: 'Fernet con Cola',
    price: '$2.800',
    tags: 'Fernet Branca | Coca Cola | Hielo',
  },
  {
    title: 'Vino Malbec',
    price: '$3.200',
    tags: 'Copa | Mendoza | Reserva',
  },
  {
    title: 'Cerveza Artesanal',
    price: '$2.100',
    tags: 'IPA | Lager | Rubia',
  },
  {
    title: 'Gin Tonic',
    price: '$3.500',
    tags: 'Gin nacional | Tónica | Lima',
  },
  {
    title: 'Licuado de Frutas',
    price: '$1.800',
    tags: 'Banana | Frutilla | Durazno',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Chef Galardonada',
    subtitle: 'Reconocimiento por excelencia culinaria en competencias nacionales.',
  },
  {
    imgUrl: images.award01,
    title: 'Evento Gastronómico',
    subtitle: 'Participación destacada en festivales gastronómicos de prestigio.',
  },
  {
    imgUrl: images.award05,
    title: 'Tradición Familiar',
    subtitle: 'Preservando recetas tradicionales con técnicas innovadoras.',
  },
  {
    imgUrl: images.award03,
    title: 'Nuevo Talento',
    subtitle: 'Reconocimiento como chef emergente en la región costera.',
  },
];

export default { wines: mainDishes, cocktails: drinks, awards };
