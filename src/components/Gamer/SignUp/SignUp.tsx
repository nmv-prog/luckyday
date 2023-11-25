import { ButtonStyle, FooterFonStyle, HeaderFonStyle, PageStyle, TitleRegistrationStyle, CustomMUISaveButtonStyle, CustomMUIFotterLinkStyle, CustomFonstAwesomeIconArrowBackStyle } from '../../../styles/SignUpStyles/SignUpStyle'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PersonalDetails from './PersonalDetails'
import Address from './Address'
import Genders from './Genders'
import ImportantDates from './ImportantDates'
import FriendsRelated from './FriendsRelated';
import Hobbies from './Hobbies';

const SignUp = () => {

  return (
    <PageStyle>
      <HeaderFonStyle></HeaderFonStyle>
      <ButtonStyle><CustomFonstAwesomeIconArrowBackStyle icon={faArrowLeft} size='xl' /></ButtonStyle>
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

export default SignUp