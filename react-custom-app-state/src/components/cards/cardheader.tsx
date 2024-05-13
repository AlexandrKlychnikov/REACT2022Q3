import React from 'react';
import { ImVolumeLow } from 'react-icons/im';
import { MdFlipCameraAndroid } from 'react-icons/md';
import { BASE_URL } from 'shared/constants';
import s from './cardheader.module.sass';

const CardHeader = (audioSrc: string) => {
  const handleClickAudio = () => {
    const audio = new Audio();
    audio.src = `${BASE_URL}${audioSrc}`;
    audio.play();
  };
  return (
    <div className={s.header}>
      <div className={s.volumeBox}>
        <div>
          <ImVolumeLow className={s.icon} onClick={handleClickAudio} />
        </div>
      </div>
      <div>
        <MdFlipCameraAndroid className={s.icon} />
      </div>
    </div>
  );
};

export default CardHeader;
