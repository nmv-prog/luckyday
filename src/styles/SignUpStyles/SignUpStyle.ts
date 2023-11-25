import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PageStyle = styled.div`
    height: 100vh;
    width: 424px;
    height: 2223px;
    border: 1px solid black;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    position: relative;
`;

export const HeaderFonStyle = styled.div`
    height: 349px;
    width: 761px;
    background-color: #A938A4;
    border-radius: 50%;
    position: absolute;
    top: -194px;
    left: -309px;
    margin: 0;
    z-index: 10;
`;

export const TitleRegistrationStyle = styled.p`
    position: absolute;
    z-index: 20;
    font-family: 'Michroma';
    margin: 0;
    top: 71px;
    left: 22px;
    color: #FFF;
    font-size: 30px;
    font-weight: 400;
    line-height: 43px;
    text-align: right;
    
`;

export const ChapterStyle = styled.p`
    position: absolute;
    z-index: 20;
    font-family: 'Metrophobic';
    margin: 0;
    color: rgba(86, 86, 86, 1);
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: right;
`;

export const FooterFonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 71px;
    width: 424px;
    background-color: rgba(54, 229, 208, 1);
    position: absolute;
    bottom: 0;
    margin: 0;
`;

export const ButtonStyle = styled.button`
    background-size: cover;
    background-position: center;
    width: 100px;   
    height: 100px;
    cursor: pointer;
    border: none;
`;

export const CustomMUISaveButtonStyle = {
    position: 'absolute',
    bottom: '97px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '269px',
    height: '54px',
    borderRadius: '100px',
    color: 'rgba(86, 86, 86, 1)',
    backgroundColor: 'rgba(54, 229, 208, 1)',
    fontFamily: 'Manrope',
    fontSize: '30px',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: 'rgba(34, 189, 168, 1)'
    }
};

export const CustomMUIFotterLinkStyle = {
    fontSize: '25px',
    fontFamily: 'Metrophobic',
    color: 'rgba(86, 86, 86, 1)',
    textDecoration: 'underline'
};


export const CustomFonstAwesomeIconArrowBackStyle = styled(FontAwesomeIcon)`
    color: #ffffff;
    position: absolute;
    z-index: 20;
    top: 25px;
    left: 25px;
`;

