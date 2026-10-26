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

export default function Header() {

  const { subject } = useContext(QuizContext)
  console.log(subject)

  let imgSrc = ''
  
  switch (subject) {
    case 'HTML':
      imgSrc = htmlIcon
      break;
    case 'CSS':
      imgSrc = cssIcon
      break;
    case 'JavaScript':
      imgSrc = jsIcon
      break;
    case 'Accessibility':
      imgSrc = accesibilityIcon
      break;
    default:
      imgSrc = ''
      break;
  }

  return (
    <HeaderContainer>
      <SubjectTitleContainer>

        {imgSrc && <img src={imgSrc} alt={`${subject} icon`} />}

        <SubjectTitle>{subject}</SubjectTitle>
      </SubjectTitleContainer>

      <SwitchContainer>
        <img src={sunDarkIcon} alt="Sun Icon" />
        <Switch
          onChange={() => {}}
          checked={false}
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