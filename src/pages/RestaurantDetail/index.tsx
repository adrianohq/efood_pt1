// src/pages/RestaurantDetail/index.tsx
import { useParams } from 'react-router-dom'
import ProductList from '../../Containers/ProductList'
import RestaurantHeader from '../../components/RestaurantHeader'
import Hero from '../../components/RestaurantHero'
import { destaques } from '../../data/restaurantsData'
import { products } from '../../data/productsData'

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>()
  const restaurantId = Number(id)

  const restaurant = destaques.find((store) => store.id === restaurantId)

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <>
      <RestaurantHeader />
      <Hero
        title={restaurant.title}
        infos={restaurant.infos}
        image={restaurant.image}
      />
      <div className="container">
        <ProductList products={products} />
      </div>
    </>
  )
}

export default RestaurantDetail
