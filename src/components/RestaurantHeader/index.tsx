import { Link } from 'react-router-dom'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import { HeaderImg, LinkHome, Logo, CartButton } from './styles'

const RestaurantHeader = () => (
  <HeaderImg style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logo} alt="Efood" />
    <div className="container">
      <Link to="/">
        <LinkHome>Restaurantes</LinkHome>
      </Link>
      <CartButton>0 produto(s) no carrinho</CartButton>
    </div>
  </HeaderImg>
)

export default RestaurantHeader
