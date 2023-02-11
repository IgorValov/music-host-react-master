import React from 'react';

import { TrackAuthorBlock } from '../../PlaylistItem/PlaylistTrack/TrackAuthor/TrackAuthorComponents/TrackAuthorBlock';
import { TrackAuthorLink } from '../../PlaylistItem/PlaylistTrack/TrackAuthor/TrackAuthorComponents/TrackAuthorLink';

function TrackAuthorSkeleton() {
    return (
        <TrackAuthorBlock>
            <TrackAuthorLink>
                <img alt="#" src="../img/Skeleton-track-author.png"></img>
            </TrackAuthorLink>
        </TrackAuthorBlock>
    );
}

export default TrackAuthorSkeleton;
