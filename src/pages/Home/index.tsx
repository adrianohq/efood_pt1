import Hero from '../../components/Header'
import RestaurantList from '../../Containers/RestaurantList'
import { destaques } from '../../data/restaurantsData'

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <RestaurantList stores={destaques} />
    </div>
  </>
)

export default Home
