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
