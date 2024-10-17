import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderImg = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  position: absolute;
  height: auto;
  margin: 0 auto;
`

export const LinkHome = styled.a`
  text-decoration: none;
  color: ${colors.pink};
`

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${colors.pink};
  font-size: 18px;
  font-weight: bold;
`
