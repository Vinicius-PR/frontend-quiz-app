import htmlIcon from '../../assets/images/icon-html.svg'
import cssIcon from '../../assets/images/icon-css.svg'
import javascriptIcon from '../../assets/images/icon-js.svg'
import accessibilityIcon from '../../assets/images/icon-accessibility.svg'

import moonIconLight from '../../assets/images/icon-moon-light.svg'
import moonIconDark from '../../assets/images/icon-moon-dark.svg'
import sunIconLight from '../../assets/images/icon-sun-light.svg'
import sunIconDark from '../../assets/images/icon-sun-dark.svg'

import Switch from 'react-switch'
import { SubjectTitle, SwitchContainer, HeaderContainer } from './styles'
import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'

interface HeaderProps {
  handleSetTheme: () => void,
  theme: string
}

export default function Header({ handleSetTheme, theme }: HeaderProps) {
  const { quiz } = useContext(QuizContext)
  
  let imgSrc = ''
  switch (quiz.title) {
    case "HTML": {
      imgSrc = htmlIcon
      break
    }
    case "CSS": {
      imgSrc = cssIcon
      break
    }
    case "JavaScript": {
      imgSrc = javascriptIcon
      break
    }
    case "Accessibility": {
      imgSrc = accessibilityIcon
      break
    }
    default:
      imgSrc = ''
  }

  return (
    <HeaderContainer>
      <SubjectTitle>

          {imgSrc && <img src={imgSrc} alt={`${quiz.title} Icon`} />}

          <h3>{quiz.title}</h3>
      </SubjectTitle>

      <SwitchContainer>
        <img src={sunIconDark} alt="Sun Icon" />
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
        <img src={moonIconDark} alt="moon Icon" />
      </SwitchContainer>
    </HeaderContainer>
  )
}
