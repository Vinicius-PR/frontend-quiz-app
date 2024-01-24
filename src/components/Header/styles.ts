import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 83px;
  margin-bottom: 85px;
  
`

export const SubjectTitle = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 24px;

  div {
    height: 100%;
    border: 1px solid red;
  }

  h3 {
    line-height: 100%;
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
