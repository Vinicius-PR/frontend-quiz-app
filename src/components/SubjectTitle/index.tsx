import htmlIcon from '../../assets/images/icon-html.svg'
import cssIcon from '../../assets/images/icon-css.svg'
import jsIcon from '../../assets/images/icon-js.svg'
import accesibilityIcon from '../../assets/images/icon-accessibility.svg'

import { AccessibilityIcon, CssIcon, HtmlIcon, JavaScriptIcon } from "../../styles/icons";
import { SubjectTitleContainer, Title } from './style';

export default function SubjectTitle({ subject }: { subject: string }) {

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
    <SubjectTitleContainer>
      {
        renderIcon()
      }

      <Title>{subject}</Title>
    </SubjectTitleContainer>
  )
}