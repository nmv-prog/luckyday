import { faUser } from '@fortawesome/free-solid-svg-icons'
import female from '../../../images/female.png'
import male from '../../../images/male.png'
import { ButtonAnotherGenderStyle, ButtonsGenderStyle, CustomFonstAwesomeIconUserStyle } from '../../../styles/SignUpStyles/GendersStyles'
import { ButtonStyle } from '../../../styles/SignUpStyles/SignUpStyle'

const Genders = () => {
    return (
        <ButtonsGenderStyle>
            <ButtonStyle style={{ backgroundImage: `url(${male})` }}></ButtonStyle>
            <ButtonStyle style={{ backgroundImage: `url(${female})` }}></ButtonStyle>
            <ButtonAnotherGenderStyle><CustomFonstAwesomeIconUserStyle icon={faUser} style={{}} /></ButtonAnotherGenderStyle>
        </ButtonsGenderStyle>
    )
}

export default Genders