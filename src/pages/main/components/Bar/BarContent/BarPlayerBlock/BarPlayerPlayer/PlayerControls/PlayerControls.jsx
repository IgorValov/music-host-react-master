import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { playingNextTrack } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { shuffleTracks } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { repeatTrack } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { passSortedRenderedTracks } from '../../../../../../../../redux/playingNextPreviousTracks/orderOfPlayingSlice';
import { setPlay } from '../../../../../../../../redux/playTrack/playTrackSlice';
import { setPlay2 } from '../../../../../../../../redux/playTrack/playTrackSlice';
import { setDataOfTrack } from '../../../../../../../../redux/playTrack/playTrackSlice';
import { setSrcOfTrack } from '../../../../../../../../redux/playTrack/playTrackSlice';
import { setPlayingRenderedTracks } from '../../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import { PlayerBtnNext } from './PlayerControlsButtons/PlayerBtnNext';
import { PlayerBtnPlay } from './PlayerControlsButtons/PlayerBtnPlay';
import { PlayerBtnPrev } from './PlayerControlsButtons/PlayerBtnPrev';
import { PlayerBtnRepeat } from './PlayerControlsButtons/PlayerBtnRepeat';
import { PlayerBtnShuffle } from './PlayerControlsButtons/PlayerBtnShuffle';
import { PlayerControlsContainer } from './PlayerControlsButtons/PlayerControlsContainer';
import { IconNext } from './PlayerControlsIcons/IconNext';
import { IconPlay } from './PlayerControlsIcons/IconPlay';
import { IconPrev } from './PlayerControlsIcons/IconPrev';
import { IconRepeat } from './PlayerControlsIcons/IconRepeat';
import { IconShuffle } from './PlayerControlsIcons/IconShuffle';
import { IconStop } from './PlayerControlsIcons/IconStop';
function PlayerControls({ refPlayer }) {
    const [repeatButton, setRepeatButton] = useState(false);

    const playingPlayer = useSelector((state) => state.playing.isPlaying);
    const playingPlayer2 = useSelector((state) => state.playing.isPlaying2);

    const numberOfTrackPlaying = useSelector(
        (state) => state.storeTracks.trackIsPlayed.trackIsPlayed
    );
    const renderedTracks = useSelector(
        (state) => state.storeTracks.renderedTracks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (playingPlayer) {
            const playing = refPlayer.current.play();

            if (playing !== undefined) {
                playing
                    .then(() => {
                        refPlayer.current.play();
                    })
                    .catch((error) => {
                        // throw new Error(error);
                        console.log(
                            "NotAllowedError: play() failed because the user didn't interact with the document first."
                        );
                    });
            }
        } else {
            refPlayer.current.pause();
        }
    }, [playingPlayer, numberOfTrackPlaying]);

    useEffect(() => {
        if (playingPlayer2) {
            const playing = refPlayer.current.play();

            if (playing !== undefined) {
                playing
                    .then(() => {
                        refPlayer.current.play();
                    })
                    .catch((error) => {
                        // throw new Error(error);
                        console.log(
                            "NotAllowedError: play() failed because the user didn't interact with the document first."
                        );
                    });
            }
        } else {
            refPlayer.current.pause();
        }
    }, [playingPlayer2]);

    function useSingleAndDoubleClick(delay = 1000) {
        const [click, setClick] = useState(0);

        useEffect(() => {
            const timer = setTimeout(() => {
                if (click === 1) {
                    dispatch(shuffleTracks(true));
                    dispatch(passSortedRenderedTracks(renderedTracks));
                }
                setClick(0);
            }, delay);

            if (click === 2) dispatch(shuffleTracks(false));

            return () => clearTimeout(timer);
        }, [click]);

        return () => setClick((prev) => prev + 1);
    }

    function changeIsPlaying() {
        dispatch(setPlay2(!playingPlayer2));
    }

    function playNextTrack() {
        if (numberOfTrackPlaying + 1 > renderedTracks.length - 1) {
            dispatch(setPlayingRenderedTracks(numberOfTrackPlaying));
            const track = renderedTracks.filter((element, index) => {
                return index === numberOfTrackPlaying;
            });
            dispatch(playingNextTrack(track));
            dispatch(setPlay(true));
            dispatch(setSrcOfTrack(track[0].track_file));

            dispatch(
                setDataOfTrack([track[0].album, track[0].author, track[0].id])
            );
        } else {
            dispatch(setPlayingRenderedTracks(numberOfTrackPlaying + 1));
            const track = renderedTracks.filter((element, index) => {
                return index === numberOfTrackPlaying + 1;
            });
            dispatch(playingNextTrack(track));

            dispatch(setPlay(true));
            dispatch(setSrcOfTrack(track[0].track_file));
            dispatch(setPlay2(true));
            dispatch(
                setDataOfTrack([track[0].album, track[0].author, track[0].id])
            );
        }
    }

    function playPreviousTrack() {
        if (numberOfTrackPlaying - 1 < 0) {
            dispatch(setPlayingRenderedTracks(numberOfTrackPlaying));
            const track = renderedTracks.filter((element, index) => {
                return index === numberOfTrackPlaying;
            });
            dispatch(playingNextTrack(track));
            dispatch(setPlay(true));
            dispatch(setSrcOfTrack(track[0].track_file));
            dispatch(
                setDataOfTrack([track[0].album, track[0].author, track[0].id])
            );
        } else {
            dispatch(setPlayingRenderedTracks(numberOfTrackPlaying - 1));

            const track = renderedTracks.filter((element, index) => {
                return index === numberOfTrackPlaying - 1;
            });
            dispatch(playingNextTrack(track));
            dispatch(setPlay(true));
            dispatch(setSrcOfTrack(track[0].track_file));
            dispatch(setPlay2(true));
            dispatch(
                setDataOfTrack([track[0].album, track[0].author, track[0].id])
            );
        }
    }

    function repeat() {
        setRepeatButton(!repeatButton);
        dispatch(repeatTrack(!repeatButton));
    }

    const shuffle = useSingleAndDoubleClick();

    return (
        <PlayerControlsContainer>
            <PlayerBtnPrev onClick={playPreviousTrack}>
                <IconPrev alt="prev" />
            </PlayerBtnPrev>
            <PlayerBtnPlay
                onClick={() => {
                    changeIsPlaying();
                }}
            >
                {playingPlayer2 ? (
                    <IconStop alt="stop" />
                ) : (
                    <IconPlay alt="play" />
                )}
            </PlayerBtnPlay>
            <PlayerBtnNext onClick={playNextTrack}>
                <IconNext alt="next" />
            </PlayerBtnNext>

            <PlayerBtnRepeat onClick={repeat}>
                <IconRepeat alt="repeat" />
            </PlayerBtnRepeat>

            <PlayerBtnShuffle onClick={shuffle}>
                <IconShuffle alt="shuffle" />
            </PlayerBtnShuffle>
        </PlayerControlsContainer>
    );
}

export default PlayerControls;
