import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setVolume } from '../../../../../../../redux/SettingProgressPlayer/progressPlayerSlice';
import { BarVolumeContainer } from './BarVolumeComponents/BarVolume';
import { VolumeContent } from './BarVolumeComponents/VolumeContent';
import { VolumeImage } from './BarVolumeComponents/VolumeImage';
import { VolumeProgressBtn } from './BarVolumeComponents/VolumeProgressBtn';
import { VolumeProgressLine } from './BarVolumeComponents/VolumeProgressLine';
import BarVolumeIcon from './BarVolumeIcon';
function BarVolume() {
    const [value, setValue] = useState(25);
    const [volume, setVolumeOn] = useState(value);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.darkTheme);
    const changeVolume = () => {
        dispatch(setVolume(value));
    };

    function volumeOnOff() {
        setVolumeOn(!volume);
        dispatch(setVolume(!volume ? value : false));
    }

    return (
        <BarVolumeContainer>
            <VolumeContent>
                <VolumeImage onClick={volumeOnOff}>
                    <BarVolumeIcon
                        className="volume__svg"
                        alt="volume"
                    ></BarVolumeIcon>
                </VolumeImage>

                <VolumeProgressBtn>
                    <VolumeProgressLine
                        theme={theme}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            changeVolume();
                        }}
                    />
                </VolumeProgressBtn>
            </VolumeContent>
        </BarVolumeContainer>
    );
}

export default BarVolume;
