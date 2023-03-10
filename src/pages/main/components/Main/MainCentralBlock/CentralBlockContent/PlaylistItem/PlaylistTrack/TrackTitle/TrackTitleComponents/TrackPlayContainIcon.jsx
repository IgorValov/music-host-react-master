import React from 'react';
import styled from 'styled-components';

const SvgPlayContain = styled.svg`
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackPlayContainIcon = () => (
    <SvgPlayContain
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="19px"
        fill="none"
        viewBox="0 0 20 19"
    >
        <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
        <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
        <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
    </SvgPlayContain>
);
