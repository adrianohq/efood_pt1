import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/hero.png'
import { HeaderImg, Slogan } from './styles'

const Header = () => (
  <HeaderImg style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="Efood" />
      <Slogan>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Slogan>
    </div>
  </HeaderImg>
)

export default Header
