import { Link } from 'react-router-dom';
import { ImageStyle, LinkStyle, LogoStyle, PageStyle, TextStyle, TitleStyle, TitleTextStyle } from '../../styles/couponsStyles';
import { RecognizePageType } from '../../utils/types';

interface Props {
    recognizePage: RecognizePageType,
}

const Home = ({ recognizePage }: Props) => {
    const sentences = recognizePage!.titleRecognizePage!.split(',');
    const parts = sentences[1].split(/(\d+)/);

    const jsxElements = parts.map((part, index) => {
        return /\d+/.test(part) ? (
            <LinkStyle to='/coupons' key={index}>
                {part}
            </LinkStyle>
        ) : (<TextStyle key={index}>{part}</TextStyle>);
    });

    return (
        <PageStyle>
            <LogoStyle src={recognizePage.logoAzrieli} />
            <TitleStyle>{sentences[0]}</TitleStyle>
            <TitleStyle>
                <TitleTextStyle>{jsxElements}</TitleTextStyle>
            </TitleStyle>
            <ImageStyle src={recognizePage.imageGenie}></ImageStyle>
        </PageStyle>
    );
}

export default Home