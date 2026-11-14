import React from 'react';
import { mascotPoses } from '../data/mascot';

export default function PixelSprite({
  poseKey = 'idle',
  className = '',
  altOverride = '',
  width = 312,
  height = 300,
}) {
  const pose = mascotPoses[poseKey] || mascotPoses.idle;

  return (
    <img
      src={pose.src}
      alt={altOverride || pose.alt}
      width={width}
      height={height}
      draggable={false}
      className={`pixel-sprite select-none pointer-events-none object-contain ${className}`}
    />
  );
}
