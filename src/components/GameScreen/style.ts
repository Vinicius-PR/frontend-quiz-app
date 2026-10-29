import styled from 'styled-components';
import {textPreset3, textPreset3Mobile, textPreset4, textPreset4Mobile, textPreset5Mobile, textPreset6 } from '../../styles/typography'

import { device } from '../../styles/breakpoints';

export const GameScreenContainer = styled.main`
  display: flex;
  gap: 8rem; // 128px 
  max-width: 72.30rem; // 1156.8px

  @media ${device.ml} {
    flex-direction: column;
    gap: 64px;
    align-items: center;
  }

  @media ${device.sm} {
    gap: 40px;
    margin: 0 auto;
  }
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SpanQuestionPosition = styled.span`
  ${textPreset6}
  color: ${props => props.theme.colors.spanText};

  @media ${device.sm} {
    ${textPreset5Mobile}
  }
`

export const QuestionTitle = styled.h2`
  ${textPreset3}
  color: ${props => props.theme.colors.text};

  @media ${device.sm} {
    ${textPreset3Mobile}
  }
`

export const OptionsContainer = styled.div`
  max-width: 35.25rem; // 564px
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      background-color: ${props => props.theme.colors.backgroundOptions};
      color: ${props => props.theme.colors.text};
      ;
      border-radius: 24px;
      height: 6.5rem;
      line-height: normal;
      list-style: none;
      
      @media ${device.md} {
        height: 5.5rem;
      }

      @media ${device.sm} {
        height: 4.5rem;
      }
    }
  }

  @media ${device.ml} {
    width: 100%;
  }
  
`

export const LabelOption = styled.label`
  ${textPreset4};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 1.5rem;
  border-radius: 24px;
  cursor: pointer;
  border: 3px solid transparent;
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  &:has(input:checked) {
    border-color: ${props => props.theme.colors.primary};
  }

  &:has(input:checked) span {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  @media ${device.md} {
    padding: 1rem;
  }

  @media ${device.sm} {
    gap: 1rem;
    ${textPreset4Mobile};
  }

  input[type="radio"] {
    display: none;
  }
`

export const SpanOptionLetter = styled.span`
  ${textPreset4};
  color: ${props => props.theme.colors.spanText};
  background-color: ${props => props.theme.colors.background};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.sm} {
    ${textPreset4Mobile};
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ProgressContainer = styled.div`
  position: relative;
  height: 16px;
  background-color: ${props => props.theme.colors.progressLineBack};
  border-radius: 8px;

  margin-top: auto;
`

export const ProgressLine = styled.div<{ $progress: number}>`
  position: absolute;
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  background-color: ${props => props.theme.colors.primary};
  border: 4px solid ${props => props.theme.colors.progressLineBack};
  border-radius: 8px;
`