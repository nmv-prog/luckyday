import { ImageStyle, LogoStyle, PageStyle, TitleStyle } from '../../styles/couponsStyles';
import { ObjectType } from '../../utils/types';

interface Props {
    changePage: (page: string) => void
    openNewWindow: (path: string) => void
    couponData: ObjectType
}

const Coupon = ({ changePage, openNewWindow, couponData }: Props) => {
    const descriptionValues = Object.values(couponData!.descriptions!);
    const couponValues = Object.values(couponData!.coupons!);
    const couponKeys = Object.keys(couponData!.qrcodes!);

    const handleChangePath = (index: number) => {
        changePage(couponKeys[index]);
        openNewWindow('qrcode');
    }

    return (
        <PageStyle>
            <LogoStyle src={couponData!.recognizePage!.logoAzrieli} />
            {descriptionValues.map((value, index) => (
                <PageStyle key={index}>
                    <TitleStyle>{value}</TitleStyle>
                    <ImageStyle src={couponValues[index]} onClick={() => handleChangePath(index)} alt='coupon' />
                </PageStyle>
            ))}
        </PageStyle>
    );
}

export default Coupon
