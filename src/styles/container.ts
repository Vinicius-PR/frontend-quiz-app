import styled from "styled-components";
import { device } from "./breakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 5.18rem 0rem;

  @media ${device.lg} {
    padding: 5.18rem 1.5rem;
  }
`