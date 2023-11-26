import { ButtonStyle, FooterFonStyle, HeaderFonStyle, PageStyle, TitleRegistrationStyle, CustomMUISaveButtonStyle, CustomMUIFotterLinkStyle, CustomFonstAwesomeIconArrowBackStyle } from '../../../styles/GamerSignUpStyles/SignUpStyle'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import PersonalDetails from './PersonalDetails'
import Address from './Address'
import Genders from './Genders'
import ImportantDates from './ImportantDates'
import FriendsRelated from './FriendsRelated';
import Hobbies from './Hobbies';

const GamerSignUp = () => {

  return (
    <PageStyle>
      <HeaderFonStyle></HeaderFonStyle>
      <ButtonStyle><CustomFonstAwesomeIconArrowBackStyle icon={faArrowLeftLong} size='xl' /></ButtonStyle>
      <TitleRegistrationStyle>Registration</TitleRegistrationStyle>
      <PersonalDetails />
      <Address />
      <Genders />
      <ImportantDates />
      <FriendsRelated />
      <Hobbies />
      <Button sx={CustomMUISaveButtonStyle} variant="contained" disableElevation>Save</Button>
      <FooterFonStyle>
        <Link sx={CustomMUIFotterLinkStyle} href="#">Business? Become an Advertiser</Link>
      </FooterFonStyle>
    </PageStyle>
  )
}

export default GamerSignUp