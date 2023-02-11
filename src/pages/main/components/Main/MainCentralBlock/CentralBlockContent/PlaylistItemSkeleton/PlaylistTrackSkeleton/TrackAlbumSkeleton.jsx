import React from 'react';

import { TrackAlbumLink } from '../../PlaylistItem/PlaylistTrack/TrackAlbum/TrackAlbumComponents/TrackAlbumLink';
import { TrackAlbumBlock } from '../../PlaylistItem/PlaylistTrack/TrackAlbum/TrackAlbumComponents/TrackAuthorBlock';

function TrackAlbumSkeleton() {
    return (
        <TrackAlbumBlock>
            <TrackAlbumLink>
                <img alt="#" src="../img/Skeleton-track-album.png"></img>
            </TrackAlbumLink>
        </TrackAlbumBlock>
    );
}

export default TrackAlbumSkeleton;
