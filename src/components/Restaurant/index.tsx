import {
  Card,
  CardInfos,
  Description,
  Infos,
  NameNote,
  Note,
  Title,
  Button
} from './styles'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  note: number
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({ id, title, note, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardInfos>
      <NameNote>
        <Title>{title}</Title>
        <Note>
          {note}
          <img src={star} />
        </Note>
      </NameNote>
      <Description>{description}</Description>
      <Button
        type="link"
        to={`/restaurant/${id}`}
        title="Clique aqui para visitar o restaurante"
      >
        Saiba mais
      </Button>
    </CardInfos>
  </Card>
)

export default Restaurant
