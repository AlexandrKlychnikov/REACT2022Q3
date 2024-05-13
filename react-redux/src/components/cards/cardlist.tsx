import React from 'react';
import { useAppSelector } from 'redux/hooks';
import Card from './card';
import s from './cardlist.module.sass';

const CardList = () => {
  const store = useAppSelector((state) => state);
  return (
    <div className={s.cardList} data-testid="card-container">
      {!store.isLoading ? (
        store.cards.length > 0 ? (
          [...store.cards].map((e) => (
            <Card key={e.id} id={e.id} image={e.urls.small} author={e.user.name} />
          ))
        ) : (
          <span className={s.loadingIndicator}>No matches found.</span>
        )
      ) : (
        <span className={s.loadingIndicator}>Downloading...</span>
      )}
    </div>
  );
};

export default CardList;
