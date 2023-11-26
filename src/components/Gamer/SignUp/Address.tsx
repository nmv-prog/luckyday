import { AddressChapterStyle, AddressInputsStyle } from '../../../styles/GamerSignUpStyles/AddressStyles'
import { InputsLabels } from '../../../utils/constants'
import InputTypical from './InputTypical'

const Address = () => {
    return (
        <>
            <AddressChapterStyle>Address</AddressChapterStyle>
            <AddressInputsStyle>
                {InputsLabels.map((label, key) => {
                    return <InputTypical key={key} label={label} />
                })}
            </AddressInputsStyle>
        </>
    )
}

export default Address