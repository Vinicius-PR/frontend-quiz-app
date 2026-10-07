import Switch from "react-switch";

import sunDarkIcon from '../../assets/images/icon-sun-dark.svg'
import moonDarkIcon from '../../assets/images/icon-moon-dark.svg'
import accesibilityIcon from '../../assets/images/icon-accessibility.svg'

import { HeaderContainer, SubjectTitle, SwitchContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <SubjectTitle>

        {/* {imgSrc && <img src={accesibilityIcon} alt={`accesibilityIcon Icon`} />} */}
        <img src={accesibilityIcon} alt={`accesibilityIcon Icon`} />

        <h3>Accesibility</h3>
      </SubjectTitle>

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