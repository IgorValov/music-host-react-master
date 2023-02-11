import styled from 'styled-components';

const Button = styled.button`
    width: 278px;
    height: 52px;
    border-radius: 6px;
`;

export const ButtonSignIn = styled(Button)`
    width: 278px;
    height: 52px;
    font-size: 18px;
    line-height: 24px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #580ea2;
    margin-top: 30px;

    :hover {
        background-color: #3f007d;
    }

    :active {
        background-color: #1e053b;
    }

    :disabled {
        background-color: #b4b3b3;
    }
`;

export const ButtonSignUp = styled(Button)`
    margin-top: 20px;
    background-color: white;
    color: black;
    &:hover {
        background-color: #d0cece;
    }
    &:active {
        background-color: #d9d9d9;
    }
`;

export const SecondButtonSignUp = styled(ButtonSignIn)``;
