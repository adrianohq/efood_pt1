import { useState } from 'react'
import {
  Card,
  Description,
  Title,
  AddCart,
  Modal,
  ModalContent,
  Close,
  ModalContainer
} from './styles'

import fechar from '../../assets/images/close 1.png'

type Props = {
  id: number
  title: string
  description: string
  image: string
}

type ModalState = {
  isVisible: boolean
}

const Restaurant = ({ title, description, image }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Card
        onClick={() => {
          setModal({ isVisible: true })
        }}
      >
        <div>
          <img src={image} alt={title} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <AddCart>Adicionar ao carrinho</AddCart>
        </div>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <ModalContainer>
            <img src={image} alt="" />
            <div>
              <h4>{title}</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <span>Serve 1 a 2 pessoas</span>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </ModalContainer>
          <Close
            src={fechar}
            alt="Ícone de Fechar"
            onClick={() => {
              closeModal()
            }}
          />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Restaurant
