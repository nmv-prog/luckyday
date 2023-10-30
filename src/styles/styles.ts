import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivAppStyle = styled.div`
    height: 100vh;
    margin: 30px;
`;

export const PageStyle = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

export const TitleStyle = styled.h1`
    text-align: center;
    font-size: 2.5em;
    color: black;
    margin: 0;
`;

export const DescriptionStyle = styled.p`
    text-align: center;
    margin-bottom: 10px;
    font-size: 2em;
    color: darkgrey;
`;

export const ImageStyle = styled.img`
    cursor: pointer;
    height: 50vh;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const LinkStyle = styled(Link)`
    color: black;
    margin: 0 10px 0 10px;
`;

export const TextStyle = styled.p`
    margin: 0;
`;

export const TitleTextStyle = styled.p`
    display: flex;
`;

export const LogoStyle = styled.img`
    cursor: pointer;
    height: 7vh;
    margin-top: 10px;
    margin-bottom: 20px;
    align-self: flex-end;
`;