import Products from '../../models/Products'
import Product from '../../components/Product'
import { List } from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => (
  <List>
    {products.map((store) => (
      <Product
        key={store.id}
        id={store.id}
        title={store.title}
        description={store.description}
        image={store.image}
      />
    ))}
  </List>
)

export default ProductList
