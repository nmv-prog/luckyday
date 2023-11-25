import { ImportantDatesChapterStyle, InputDatePosition, InputSelectFamilyStatusPosition, InputSelectNumberOfKidsPosition } from '../../../styles/SignUpStyles/ImportantDatesStyles'
import { FamilyStatusItems, NumberOfKidsItems, SelectsLabels } from '../../../utils/constants'
import InputDate from './InputDate'
import InputSelect from './InputSelect'

const ImportantDates = () => {
    return (
        <>
            <ImportantDatesChapterStyle>Important dates</ImportantDatesChapterStyle>
            <InputDatePosition><InputDate /></InputDatePosition>
            <InputSelectFamilyStatusPosition><InputSelect label={SelectsLabels[0]} items={FamilyStatusItems} /></InputSelectFamilyStatusPosition>
            <InputSelectNumberOfKidsPosition><InputSelect label={SelectsLabels[1]} items={NumberOfKidsItems} /></InputSelectNumberOfKidsPosition>
        </>
    )
}

export default ImportantDates