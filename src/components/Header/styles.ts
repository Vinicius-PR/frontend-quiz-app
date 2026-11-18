import styled from "styled-components"
import { device } from "../../styles/breakpoints"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;

  @media ${device.md} {
    margin-bottom: 50px;
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${device.sm} {
    gap: 0.5rem;
  }
`
