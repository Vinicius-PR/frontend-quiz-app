import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import Switch from "react-switch";

import sunDarkIcon from '../../assets/images/icon-sun-dark.svg'
import moonDarkIcon from '../../assets/images/icon-moon-dark.svg'

import htmlIcon from '../../assets/images/icon-html.svg'
import cssIcon from '../../assets/images/icon-css.svg'
import jsIcon from '../../assets/images/icon-js.svg'
import accesibilityIcon from '../../assets/images/icon-accessibility.svg'

import { HeaderContainer, SubjectTitle, SubjectTitleContainer, SwitchContainer } from './styles'
import { AccessibilityIcon, CssIcon, HtmlIcon, JavaScriptIcon } from "../../styles/icons";

interface HeaderProps {
  handleSetTheme: () => void;
  theme: 'light' | 'dark';
}

export default function Header({ handleSetTheme, theme }: HeaderProps) {

  const { subject } = useContext(QuizContext)

  function renderIcon() {
    switch (subject) {
      case 'HTML':
        return <HtmlIcon src={htmlIcon} alt="HTML" />
      case 'CSS':
        return <CssIcon src={cssIcon} alt="CSS" />
      case 'JavaScript':
        return <JavaScriptIcon src={jsIcon} alt="JavaScript" />
      case 'Accessibility':
        return <AccessibilityIcon src={accesibilityIcon} alt="Accessibility" />
      default:
        return null
    }
  }

  return (
    <HeaderContainer>
      <SubjectTitleContainer>
        {
          renderIcon()
        }

        <SubjectTitle>{subject}</SubjectTitle>
      </SubjectTitleContainer>

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