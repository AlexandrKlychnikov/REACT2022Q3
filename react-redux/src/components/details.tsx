import React from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from 'redux/hooks';
import { INITIAL_RESPONSE_ITEM } from 'shared/constants';
import { IResponseItem } from 'shared/types';
import s from './details.module.sass';

export function Details() {
  const store = useAppSelector((state) => state);

  const findItem = (arr: IResponseItem[]): IResponseItem => {
    return arr.find((e: { id: string }) => e.id === store.cardId)
      ? ([...store.cards].find((e) => e.id === store.cardId) as IResponseItem)
      : INITIAL_RESPONSE_ITEM;
  };
  return (
    <>
      <div
        id="details"
        className={s.details}
        style={{
          backgroundImage: `url(${findItem(store.cards).urls.full})`,
        }}
      >
        <p className={s.additional}>
          author: <span className={s.info}>{findItem(store.cards).user.name}</span>
          <br />
          description: <span className={s.info}>{findItem(store.cards).description}</span>
          <br />
          created at:{' '}
          <span className={s.info}>{findItem(store.cards).created_at.slice(0, 10)}</span>
          <br />
          size:{' '}
          <span className={s.info}>
            {findItem(store.cards).width} / {findItem(store.cards).height}
          </span>
          <br />
          id: <span className={s.info}>{findItem(store.cards).id}</span>
        </p>
      </div>
      {store.cardId === '' ? <Navigate replace to="/" /> : null}
    </>
  );
}
