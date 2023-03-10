import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../../../../themes';

const SvgSearch = styled.svg`
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;

    &:hover {
        cursor: pointer;
    }
`;

export function StyledSearchIcon() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <SvgSearch
            xmlns="http://www.w3.org/2000/svg"
            width="17px"
            height="17px"
            fill="none"
            viewBox="0 0 17 18"
        >
            <path
                style={themeMode.main}
                d="M11.9276 12.7748L15.37 17.0644"
                stroke="white"
                strokeLinecap="round"
            />
            <circle
                style={themeMode.main}
                cx="8.48533"
                cy="8.48526"
                r="5.5"
                transform="rotate(-38.7469 8.48533 8.48526)"
                stroke="white"
            />
        </SvgSearch>
    );
}
