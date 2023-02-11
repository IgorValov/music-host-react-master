import styled from 'styled-components';

export const StyledSearchInput = styled.input.attrs((props) => ({
    onClick: props.clearPlaceholder,
    ref: props.ref,
}))`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    &::placeholder {
        background-color: transparent;
        color: ${(props) =>
            props.placeholderColor === 'dark' ? 'white' : 'black'};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;