import styled from "styled-components";

export const AllHobbiesStyle = styled.div`
    position: absolute;
    top: 1713px;
    left: 22px;
    width: 380px;
    height: 241px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const HobbyStyle = styled.div`
    border: 1px solid black;
    width: 113px;
    height: 106px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageHobbyStyle = styled.img`
    height: 50px;
    margin: 0;
`;

export const HobbyNameStyle = styled.p`
    font-size: 12px;
    margin: 0;
    width: 100px;
    text-align: center;
`;