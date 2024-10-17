import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroImg = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 64px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const HeroDiv = styled.div`
  padding: 24px 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Category = styled.span`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.white};
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  color: ${colors.white};
`
