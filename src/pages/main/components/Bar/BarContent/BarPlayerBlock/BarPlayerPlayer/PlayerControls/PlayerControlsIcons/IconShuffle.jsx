import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ThemeContext from '../../../../../../../../../themes';
import { Svg } from './SvgIconSample';
const SvgShuffle = styled(Svg)``;
export function IconShuffle({ alt }) {
    const shuffleButtonisPressed = useSelector(
        (state) => state.orderOfTracksPlaying.shuffleTracks.isButtonPressed
    );
    const { themeMode } = useContext(ThemeContext);
    return (
        <SvgShuffle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 18"
            fill="none"
            width="19px"
            height="12px"
            alt={alt}
        >
            <path
                style={themeMode.trackIconsFill2}
                d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z"
                fill="#696969"
                stroke={shuffleButtonisPressed ? '#ffffff' : '#696969'}
            />
            <path
                style={themeMode.trackIconsFill2}
                d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
                fill="#696969"
                stroke={shuffleButtonisPressed ? '#ffffff' : '#696969'}
            />
        </SvgShuffle>
    );
}
