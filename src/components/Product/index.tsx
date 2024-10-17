import { Card, Description, Title, AddCart } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
}

const Restaurant = ({ title, description, image }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <AddCart>Adicionar ao carrinho</AddCart>
    </div>
  </Card>
)

export default Restaurant
