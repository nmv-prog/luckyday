import { DescriptionStyle, ImageStyle, PageStyle } from '../../styles/couponsStyles';

const Qrcode = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const qrcode = urlParams.get('qrcode');
  const shopName = urlParams.get('shopName');
  console.log(qrcode);
  

  return (
    <PageStyle>
      <DescriptionStyle>Coupon "{shopName}" 1 + 1</DescriptionStyle>
      <ImageStyle src={qrcode!} alt='qrcode' />
    </PageStyle>
  )
}

export default Qrcode
