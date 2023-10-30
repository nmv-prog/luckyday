import { DescriptionStyle, ImageStyle, PageStyle } from '../styles/styles';

const Qrcode = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const qrcode = urlParams.get('qrcode');

  return (
    <PageStyle>
      <DescriptionStyle>Please scan QR-Code</DescriptionStyle>
      <ImageStyle src={qrcode!} alt='qrcode' />
    </PageStyle>
  )
}

export default Qrcode
