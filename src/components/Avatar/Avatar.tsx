import React from 'react';
import './Avatar.scss';

interface AvatarPropTypes {
    src?: string,
    size?: number
}

const Avatar: React.FC<AvatarPropTypes> = (props) => {
    const { src, size } = props;
    return <div className="avatar" style={{ height: size, width: size }}>{src?.length === 1 ? src : <img src={src} />}</div>
}

Avatar.defaultProps = {
    size: 40,
    src: ' '
}

export default Avatar;