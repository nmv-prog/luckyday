import React from 'react'
import { ButtonStyle, CustomFonstAwesomeIconArrowBackStyle, CustomMUIFotterLinkStyle, CustomMUISaveButtonStyle, FooterFonStyle, HeaderFonStyle, PageStyle, TitleRegistrationStyle } from '../../../styles/AdvertisersSignUpStyles/SignUpStyle'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Button, Link } from '@mui/material'
import CompanyDetails from './CompanyDetails'
import ContactPersonDetails from './ContactPersonDetails'

const AdvertisersSignUp = () => {
  return (
    <PageStyle>
      <HeaderFonStyle></HeaderFonStyle>
      <ButtonStyle><CustomFonstAwesomeIconArrowBackStyle icon={faArrowLeftLong} size='xl' /></ButtonStyle>
      <TitleRegistrationStyle>Registration</TitleRegistrationStyle>
      <CompanyDetails />

      <ContactPersonDetails />

      <Button sx={CustomMUISaveButtonStyle} variant="contained" disableElevation>Save</Button>
      <FooterFonStyle>
        <Link sx={CustomMUIFotterLinkStyle} href="#">Gamer? click here</Link>
      </FooterFonStyle>
    </PageStyle>
  )
}

export default AdvertisersSignUp