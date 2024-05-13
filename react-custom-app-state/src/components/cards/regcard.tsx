import React from 'react';
import { IRegCardProps } from 'shared/types';
import s from './regcard.module.sass';

const RegCard = ({ name, surname, birth, country, langueges, receiving, photo }: IRegCardProps) => {
  return (
    <div className={s.regCard} data-testid="regcard">
      <div className={s.regCardData}>
        <p>
          <span className={s.nameField}>Name: </span>
          {name}
        </p>
        <p>
          <span className={s.nameField}>Surname: </span>
          {surname}
        </p>
        <p>
          <span className={s.nameField}>Birth: </span>
          {birth}
        </p>
        <p>
          <span className={s.nameField}>Country: </span>
          {country}
        </p>
        <p>
          <span className={s.nameField}>Langueges: </span>
          {langueges}
        </p>
        <p>
          <span className={s.nameField}>Type of receiving: </span>
          {receiving}
        </p>
      </div>
      <div className={s.regCardPhoto}>
        <img className={s.regCardImg} src={photo} alt="" />
      </div>
    </div>
  );
};

export default RegCard;
