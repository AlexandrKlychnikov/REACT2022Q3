import { AppContext } from 'context';
import React, { useContext } from 'react';
import { MdOutlineMore } from 'react-icons/md';
import { Types } from 'reducers';
import { Navigate } from 'react-router-dom';
import { ICardProps } from 'shared/types';
import s from './card.module.sass';

const Card = ({ id, image, author }: ICardProps) => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e: React.MouseEvent) => {
    dispatch({
      type: Types.SetId,
      payload: (e.currentTarget as HTMLElement).id,
    });
    dispatch({
      type: Types.Details,
    });
  };

  return (
    <div id={id} className={s.card} data-testid="card" onClick={handleClick}>
      <img className={s.cardImage} src={image} alt="" />
      <p className={s.cardInfo}>
        <span>by {author}</span>
        <MdOutlineMore className={s.moreInfo} />
      </p>
      {state.detailsMode ? <Navigate replace to="details" /> : null}
    </div>
  );
};

export default Card;
