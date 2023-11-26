import { PersonalDetailsChapterStyle, PersonalDetailsInputsStyle } from '../../../styles/GamerSignUpStyles/PersonalDetailsStyles'
import { InputsRequiredLabels } from '../../../utils/constants'
import InputRequired from './InputRequired'

const PersonalDetails = () => {
  return (
    <>
      <PersonalDetailsChapterStyle>Personal Details</PersonalDetailsChapterStyle>
      <PersonalDetailsInputsStyle>
        {InputsRequiredLabels.map((label, key) => {
          return <InputRequired key={key} label={label} />
        })}
      </PersonalDetailsInputsStyle>
    </>
  )
}

export default PersonalDetails