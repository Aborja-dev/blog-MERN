import { Component } from "@/types"

interface Props extends Component {
    urlImage: string
    alt?: string
}
const Image: React.FC<Props> = ({ className, urlImage, alt}) => {
    const imageId = urlImage.split('/').pop()
  return (
    <figure className={`max-w-[600px] max-h-64 rounded-2xl overflow-hidden ${className}`}>
      <img src={urlImage} className="w-full h-full object-cover object-center" alt={alt ?? imageId} />
    </figure>
  )
}

export default Image
