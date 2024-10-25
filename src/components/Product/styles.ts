import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  width: 320px;
  max-height: 100%;
  background-color: ${colors.pink};

  img {
    width: 304px;
    height: 167px;
    margin-bottom: 8px;
  }

  div {
    max-height: 100%;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${colors.orange};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${colors.orange};
`
export const AddCart = styled.button`
  background-color: ${colors.orange};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.83);
    z-index: -1;
  }

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.pink};
  padding: 32px;
  color: ${colors.orange};
  position: relative;
`

export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div h4 {
    font-size: 18px;
    color: ${colors.white};
    margin-bottom: 16px;
  }

  div p,
  div span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    margin-bottom: 16px;
  }

  div button {
    padding: 4px 7px;
    border: none;
    cursor: pointer;
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    width: 218px;
    height: 24px;
    margin-top: 16px;
    color: ${colors.pink};
  }
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`
