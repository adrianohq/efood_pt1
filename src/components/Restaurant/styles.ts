import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.pink};
  padding-bottom: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardInfos = styled.div`
  color: ${colors.pink};
  padding: 8px;
`

export const NameNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Note = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 20px;
`
export const Button = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
