import React from 'react'
import { CompanyDetailsChapterStyle, CompanyDetailsInputsStyle } from '../../../styles/AdvertisersSignUpStyles/CompanyDetailsStyles'
import { CompanyDetailsInputsLabels } from '../../../utils/constants'
import InputTypical from './InputTypical'
import InputRequired from './InputRequired'

const CompanyDetails = () => {
    return (
        <>
            <CompanyDetailsChapterStyle>Company Details</CompanyDetailsChapterStyle>
            <CompanyDetailsInputsStyle>
                {CompanyDetailsInputsLabels.map((item, index) => {
                    return <>{index < 3 ? <InputRequired label={item} /> : <InputTypical label={item[1]} />}</>
                })}
            </CompanyDetailsInputsStyle>
        </>
    )
}

export default CompanyDetails