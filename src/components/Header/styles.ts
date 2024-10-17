import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderImg = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  img {
    padding-top: 64px;
    width: 125px;
    height: auto;
  }
`

export const Slogan = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.pink};
  padding-top: 136px;
`
