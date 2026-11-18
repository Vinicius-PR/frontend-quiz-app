import { useContext } from "react"
import { QuizContext } from "../../context/QuizContext"
import Switch from "react-switch"

import sunDarkIcon from '../../assets/images/icon-sun-dark.svg'
import moonDarkIcon from '../../assets/images/icon-moon-dark.svg'

import { HeaderContainer, SwitchContainer } from './styles'
import SubjectTitle from "../SubjectTitle"

interface HeaderProps {
  handleSetTheme: () => void
  theme: 'light' | 'dark'
}

export default function Header({ handleSetTheme, theme }: HeaderProps) {

  const { subject } = useContext(QuizContext)

  return (
    <HeaderContainer>
      <SubjectTitle subject={subject} />

      <SwitchContainer>
        <img src={sunDarkIcon} alt="Sun Icon" />
        <Switch
          onChange={handleSetTheme}
          checked={theme === 'dark'}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor='#A729F5'
          onColor='#A729F5'
          onHandleColor="#FFFFFF"
          handleDiameter={window.innerWidth < 400 ? 12 : 20}
          height={window.innerWidth < 400 ? 20 : 28}
          width={window.innerWidth < 400 ? 32 : 48}
          aria-label="Switch Theme"
        />
        <img src={moonDarkIcon} alt="moon Icon" />
      </SwitchContainer>
    </HeaderContainer>
  )
}