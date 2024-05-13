import { AppContext } from 'context';
import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { INITIAL_RESPONSE_ITEM } from 'shared/constants';
import { IResponseItem } from 'shared/types';
import s from './details.module.sass';

export function Details() {
  const { state } = useContext(AppContext);

  const findItem = (arr: IResponseItem[]): IResponseItem => {
    return arr.find((e: { id: string }) => e.id === state.cardId)
      ? ([...state.cards].find((e) => e.id === state.cardId) as IResponseItem)
      : INITIAL_RESPONSE_ITEM;
  };
  return (
    <>
      <div
        id="details"
        className={s.details}
        style={{
          backgroundImage: `url(${findItem(state.cards).urls.full})`,
        }}
      >
        <p className={s.additional}>
          author: <span className={s.info}>{findItem(state.cards).user.name}</span>
          <br />
          description: <span className={s.info}>{findItem(state.cards).description}</span>
          <br />
          created at:{' '}
          <span className={s.info}>{findItem(state.cards).created_at.slice(0, 10)}</span>
          <br />
          size:{' '}
          <span className={s.info}>
            {findItem(state.cards).width} / {findItem(state.cards).height}
          </span>
          <br />
          id: <span className={s.info}>{findItem(state.cards).id}</span>
        </p>
      </div>
      {state.cardId === '' ? <Navigate replace to="/" /> : null}
    </>
  );
}
