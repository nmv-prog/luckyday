import React from 'react'
import { ContactPersonDetailsChapterStyle, ContactPersonDetailsInputsStyle } from '../../../styles/AdvertisersSignUpStyles/ContactPersonDetailsStyles'
import { ContactPersonDetailsInputsLabels } from '../../../utils/constants'
import InputRequired from './InputRequired'
import InputTypical from './InputTypical'

const ContactPersonDetails = () => {
  return (
    <>
        <ContactPersonDetailsChapterStyle>Contact Person Details</ContactPersonDetailsChapterStyle>
        <ContactPersonDetailsInputsStyle>
        {ContactPersonDetailsInputsLabels.map((item, index) => {
                    return <>{index !== 2 ? <InputRequired label={item} /> : <InputTypical label={item[1]} />}</>
                })}
                </ContactPersonDetailsInputsStyle>
    </>
  )
}

export default ContactPersonDetails