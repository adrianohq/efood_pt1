import Store from '../../models/Store'
import Restaurant from '../../components/Restaurant'
import { List } from './styles'

export type Props = {
  stores: Store[]
}

const RestaurantList = ({ stores }: Props) => (
  <List>
    {stores.map((store) => (
      <Restaurant
        key={store.id}
        id={store.id}
        title={store.title}
        note={store.note}
        description={store.description}
        infos={store.infos}
        image={store.image}
      />
    ))}
  </List>
)

export default RestaurantList
