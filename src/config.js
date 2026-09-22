// Importación de fotos de la pareja desde src/assets/
import foto1 from './assets/IMG_20260419_000410_812@-1029375499.webp'
import foto2 from './assets/IMG_20260419_000606_304@-1107702194.webp'
import foto3 from './assets/IMG_20260816_042111_828.webp'
import foto4 from './assets/IMG_20260912_035317_236.webp'
import ramoImg from './assets/ramo.jpg'

export const loveConfig = {
  // Datos personales (puedes ajustar el nombre o apodo)
  recipientName: "Mi Amor",
  romanticNickname: "Mi Niña Bonita",
  anniversaryDate: "2024-04-19", // Fecha para el contador (Ajustable YYYY-MM-DD)
  
  // Título principal
  hero: {
    greeting: "Feliz Día de la Primavera",
    subtitle: "Para la flor más hermosa de mi vida",
    flowerMessage: "Te traje las flores amarillas más lindas porque tu sonrisa hace que todo florezca.",
    ramoImage: ramoImg,
  },

  // Ramo interactivo con mensajes en cada flor
  bouquetNotes: [
    "Amo la forma en que tus ojos brillan cuando sonríes.",
    "Eres mi lugar seguro y mi mayor paz en el mundo.",
    "Tu risa es la melodía más linda que conozco.",
    "Gracias por hacer que cada día parezca primavera.",
    "Amo cada pequeño instante que compartimos juntos.",
    "Me enamoras más con cada día que pasa.",
    "Eres mi persona favorita en todo el universo.",
  ],

  // Carta romántica que se abre con el sobre
  letter: {
    title: "Para el amor de mi vida...",
    date: "21 de Septiembre",
    content: [
      "Hoy que comienza la primavera, no pude evitar pensar en ti desde el primer segundo en que desperté. Dicen que esta estación es cuando el mundo vuelve a llenarse de colores y vida, pero para mí, la primavera llegó el día en que te conocí.",
      "Tú eres esa luz cálida que ilumina hasta mis días más nublados, la calma después de la tormenta y la alegría más pura que tengo. Estas flores amarillas son solo un símbolo de todo lo que deseo para nosotros: un amor brillante, lleno de risas, complicidad y momentos eternos.",
      "Gracias por ser mi compañera, por tus abrazos que curan todo y por amarme tan bonito. No hay flor en el mundo que se compare a la belleza de tu corazón.",
      "Feliz Día de la Primavera, mi reina. Te amo hoy, mañana y siempre."
    ],
    signature: "Con todo mi corazón,",
    author: "Tu amor que te adora 💛"
  },

  // Galería de fotos con las fotos reales de ustedes
  photos: [
    {
      url: foto1,
      title: "Nuestros momentos mágicos",
      caption: "Cada segundo a tu lado se convierte en mi recuerdo favorito.",
      date: "Inolvidable"
    },
    {
      url: foto2,
      title: "Tus abrazos son mi hogar",
      caption: "No importa dónde estemos, si es contigo es el lugar perfecto.",
      date: "Juntos siempre"
    },
    {
      url: foto3,
      title: "La luz de mi vida",
      caption: "Amo cómo haces que todo a nuestro alrededor se sienta tan lleno de paz y felicidad.",
      date: "Mi persona favorita"
    },
    {
      url: foto4,
      title: "Para toda la vida",
      caption: "Prometo seguir eligiéndote, cuidándote y amándote en cada estación.",
      date: "Te amo"
    }
  ],

  // Razones por las que te amo
  reasons: [
    {
      icon: "✨",
      title: "Tu ternura infinita",
      text: "La manera tan dulce en que me miras y cómo sabes cuidar de mi corazón siempre."
    },
    {
      icon: "🌻",
      title: "Tu luz inagotable",
      text: "Tienes una energía tan hermosa que transforma cualquier momento difícil en pura esperanza."
    },
    {
      icon: "💫",
      title: "Nuestra complicidad",
      text: "Basta una sola mirada para entendernos y reírnos de las mismas tonterías."
    },
    {
      icon: "🤍",
      title: "Tu corazón bondadoso",
      text: "La persona más noble, cariñosa y atenta que he tenido la bendición de conocer."
    },
    {
      icon: "🌸",
      title: "El futuro contigo",
      text: "Porque soñar con un mañana a tu lado es lo que más ilusión me da en la vida."
    },
    {
      icon: "🥰",
      title: "Simplemente tú",
      text: "Porque no cambiaría absolutamente nada de ti. Te amo exactamente como eres."
    }
  ],

  // Promesa / Cierre
  finalWishes: "¡Que este día esté tan lleno de alegría como tú llenas mi vida! 💛🌼"
}
