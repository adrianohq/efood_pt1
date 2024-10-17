import { Category, HeroDiv, HeroImg, Title } from './styles'

type Props = {
  title: string
  infos: string[]
  image: string
}

const Hero = ({ title, infos, image }: Props) => (
  <HeroImg style={{ backgroundImage: `url(${image})` }}>
    <HeroDiv className="container">
      <Category>{infos[1] || infos[0]}</Category>
      <Title>{title}</Title>
    </HeroDiv>
  </HeroImg>
)

export default Hero
