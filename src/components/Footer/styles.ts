import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${colors.orangeStrong};
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  .imgLogo {
    padding-top: 40px;
    width: 125px;
    height: auto;
  }

  .container {
    padding-top: 32px;

    img {
      padding-right: 8px;
      cursor: pointer;
    }
  }

  }
`

export const Message = styled.p`
  font-size: 10px;
  color: ${colors.pink};
  line-height: 11px;
  padding-top: 80px;
`
