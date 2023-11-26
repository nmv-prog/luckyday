import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonStyle } from "./SignUpStyle";

export const ButtonsGenderStyle = styled.div`
    position: absolute;
    width: 311px;
    top: 823px;
    left: 59px;
    display: flex;
    justify-content: space-between;
`;

export const ButtonAnotherGenderStyle = styled(ButtonStyle)`
    background-color: white;
    border: 2px solid #d9d9d9;
    border-radius: 20px;
    `;

export const CustomFonstAwesomeIconUserStyle = styled(FontAwesomeIcon)`
    color: #d9d9d9;
    font-size: 60px;
`;