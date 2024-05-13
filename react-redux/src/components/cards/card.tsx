import React from 'react';
import { MdOutlineMore } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { ICardProps } from 'shared/types';
import s from './card.module.sass';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import detailsModeSlice from 'redux/slices/detailsModeSlice';
import cardIdSlice from 'redux/slices/cardIdSlice';

const Card = ({ id, image, author }: ICardProps) => {
  const dispatch = useAppDispatch();
  const { detailsMode } = useAppSelector((state) => state);

  const handleClick = (e: React.MouseEvent) => {
    dispatch(cardIdSlice.actions.cardId((e.currentTarget as HTMLElement).id));
    dispatch(detailsModeSlice.actions.detailsMode());
  };

  return (
    <div id={id} className={s.card} data-testid="card" onClick={handleClick}>
      <img className={s.cardImage} src={image} alt="" />
      <p className={s.cardInfo}>
        <span>by {author}</span>
        <MdOutlineMore className={s.moreInfo} />
      </p>
      {detailsMode ? <Navigate replace to="details" /> : null}
    </div>
  );
};

export default Card;
