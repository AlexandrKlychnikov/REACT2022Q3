import { AppContext } from 'context';
import React, { useContext } from 'react';
import Card from './card';
import s from './cardlist.module.sass';

const CardList = () => {
  const { state } = useContext(AppContext);
  return (
    <div className={s.cardList} data-testid="card-container">
      {!state.isLoading ? (
        state.cards.length > 0 ? (
          [...state.cards].map((e) => (
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
