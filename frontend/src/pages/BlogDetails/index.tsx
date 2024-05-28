import BaseLayout from '@/components/layouts/BaseLayout'
import Aside from '@/pages/BlogDetails/section/Aside'
import BreadCrumb from '@/pages/BlogDetails/section/BreadCrumb'
import CommentBox from '@/pages/BlogDetails/section/CommentBox'
import Comments from '@/pages/BlogDetails/section/Comments'
import Content from '@/pages/BlogDetails/section/Content'
import { PostDetails, type Comment } from '@/types'
const comments: Comment[] = [
  {
    id: '1',
    comment: 'Excelente artículo, Abraham. Me encantó cómo explicaste el tema.',
    author: 'Juan Pérez',
    created_at: '2022-02-05',
    children: []
  },
  {
    id: '2',
    comment: 'Me pareció muy interesante, pero tenía algunas dudas sobre...',
    author: 'María Rodríguez',
    created_at: '2022-03-10',
    children: [
      {
        id: '3',
        comment: 'Sí, María, te entiendo. Aquí tienes una respuesta más detallada...',
        author: 'Abraham',
        created_at: '2022-03-11'
      },
      {
        id: '4',
        comment: 'Gracias, Abraham. Tu respuesta fue muy útil.',
        author: 'María Rodríguez',
        created_at: '2022-03-12'
      }
    ]
  },
  {
    id: '5',
    comment: 'Este post realmente cambió mi perspectiva sobre el tema.',
    author: 'Carlos García',
    created_at: '2022-04-15',
    children: []
  },
  {
    id: '6',
    comment: 'Además, me gustaría saber más sobre el uso de TypeORM en proyectos Node.js.',
    author: 'Laura Martínez',
    created_at: '2022-05-20',
    children: [
      {
        id: '7',
        comment: 'TypeORM es una excelente opción para trabajar con bases de datos en Node.js debido a su facilidad de uso y su amplia compatibilidad con diferentes sistemas de gestión de bases de datos.',
        author: 'Abraham',
        created_at: '2022-05-21'
      }
    ]
  }
]

const Blog: PostDetails = {
  id: '1',
  title: 'Blog Title',
  resumen: 'Blog resumen',
  author: 'Abraham',
  created_at: '2022-01-01',
  urlCover: 'https://picsum.photos/900/600',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ea quasi nesciunt reiciendis illo? Alias in repellat veritatis eaque enim qui dolore tempora consequatur dolorum voluptatum, possimus corrupti explicabo illum non vero laudantium modi quis quod! Dolorum ex voluptatum ullam rem ipsum iusto qui. Repellat dignissimos fugiat reiciendis id nulla consectetur veritatis quaerat dicta. Velit optio, doloribus laudantium neque ab animi, tenetur libero tempore possimus eveniet quisquam incidunt nihil ipsa sequi aliquid ipsam unde! Deleniti quod rem porro quisquam magnam aperiam nostrum suscipit natus quam? Praesentium, quia. Perspiciatis, consequatur aut ipsum soluta vitae et voluptate maxime minima nemo corrupti!',
  categories: ['Educational', 'Technology'],
  comments
}



const BlogDetailsPage = () => {
  return (
    <BaseLayout>
      <div className='lg:flex'>
        <div className='lg:w-4/6'>
          <BreadCrumb />
          <Content {...Blog} />
          <CommentBox />
          <Comments comments={Blog?.comments} />
        </div>
        <div className='lg:w-2/6'>
          <Aside />
        </div>

      </div>
    </BaseLayout>
  )
}

export default BlogDetailsPage
