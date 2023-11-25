import { ButtonAddStyle, FriendsRelatedChapterStyle, InputDatePosition, InputSelectPosition, InputTypicalPosition } from '../../../styles/SignUpStyles/FriendsRelatedStyles'
import { RelationshipsItems, SelectsLabels } from '../../../utils/constants'
import InputDate from './InputDate'
import InputSelect from './InputSelect'
import InputTypical from './InputTypical'

const FriendsRelated = () => {
    return (
        <>
            <FriendsRelatedChapterStyle>Friends & Related</FriendsRelatedChapterStyle>
            <ButtonAddStyle>+ ADD</ButtonAddStyle>
            <InputTypicalPosition><InputTypical label='Full name' /></InputTypicalPosition>
            <InputSelectPosition><InputSelect label={SelectsLabels[2]} items={RelationshipsItems} /></InputSelectPosition>
            <InputDatePosition><InputDate /></InputDatePosition>
        </>
    )
}

export default FriendsRelated