import { Post } from "@/types";
import BaseLayout from "@/components/layouts/BaseLayout";
import Hero from "@/pages/Home/sections/Hero";
import Posts from "@/pages/Home/sections/Posts";
import CTA from "@/pages/Home/sections/CTA";

// haz una lista de 6 post con la interfaz Post

const posts: Post[] = [
  {
    id: "1",
    title: "El impacto de la tecnología en la educación",
    resumen: "La tecnología ha transformado la forma en que aprendemos y enseñamos, permitiendo acceso a recursos educativos de alta calidad para todos.",
    author: "Juan Pérez",
    created_at: "01 Junio",
    Image: 'https://picsum.photos/id/237/900/600'
  },
  {
    id: "2",
    title: "Cambio climático y sus efectos",
    resumen: "El cambio climático es uno de los mayores desafíos globales que enfrentamos hoy, afectando tanto a los ecosistemas naturales como a nuestras vidas diarias.",
    author: "María García",
    created_at: "05 Mayo",
    Image: 'https://picsum.photos/id/241/900/600'
  },
  {
    id: "3",
    title: "La importancia de la salud mental",
    resumen: "La salud mental es fundamental para nuestro bienestar general, y es importante reconocerla y cuidarla tanto como lo hacemos con nuestra salud física.",
    author: "Carlos Rodríguez",
    created_at: "15 Julio",
    Image: 'https://picsum.photos/id/242/900/600'
  },
  {
    id: "4",
    title: "Innovación en energías renovables",
    resumen: "Las energías renovables están revolucionando la industria de la energía, ofreciendo soluciones sostenibles y eficientes al problema de la energía.",
    author: "Ana López",
    created_at: "20 Agosto",
    Image: 'https://picsum.photos/id/243/900/600'
  },
  {
    id: "5",
    title: "El futuro de la robótica",
    resumen: "La robótica está avanzando rápidamente, abriendo nuevas posibilidades en diversos campos, desde la medicina hasta la manufactura industrial.",
    author: "Luis Martínez",
    created_at: "30 Septiembre",
    Image: 'https://picsum.photos/id/244/900/600'
  },
  {
    id: "6",
    title: "Impacto social de las redes sociales",
    resumen: "Las redes sociales han cambiado la forma en que nos comunicamos y interactuamos, pero también plantean desafíos en términos de privacidad y seguridad.",
    author: "Sofía Hernández",
    created_at: "15 Octubre",
    Image: 'https://picsum.photos/id/244/900/600'
  }
]


const HomePage = () => {
  return (
    <>
      <BaseLayout>
        <main>
          <Hero />
          <Posts posts={posts} />
          <CTA />
        </main>
      </BaseLayout>
    </>
  )
}

export default HomePage
