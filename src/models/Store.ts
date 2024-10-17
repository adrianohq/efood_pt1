class Store {
  infos: string[]
  title: string
  description: string
  image: string
  note: number
  id: number

  constructor(
    id: number,
    title: string,
    note: number,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.note = note
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Store
