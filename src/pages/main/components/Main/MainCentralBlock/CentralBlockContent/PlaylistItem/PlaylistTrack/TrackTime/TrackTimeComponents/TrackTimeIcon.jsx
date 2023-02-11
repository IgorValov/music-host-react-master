import React from 'react';
import styled from 'styled-components';

const SvgTrackTime = styled.svg`
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
    &: hover {
        stroke: #acacac;
        cursor: pointer;
    }
`;

export const TrackTimeIcon = () => (
    <SvgTrackTime
        xmlns="http://www.w3.org/2000/svg"
        alt="like"
        fill="none"
        viewBox="0 0 16 14"
        width="16px"
        height="14px"
    >
        <path
            d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
            stroke="#696969"
        />
    </SvgTrackTime>
);
