import { AppContext } from 'context';
import React, { useContext } from 'react';
import RegCard from './regcard';
import s from './regcardlist.module.sass';

const RegCardList = () => {
  const { state } = useContext(AppContext);
  return (
    <div className={s.cardList} data-testid="regcard-container">
      {[...state.regList].map((e, i) => (
        <RegCard
          key={e.name + i}
          name={e.name}
          surname={e.surname}
          birth={e.birth}
          country={e.country}
          langueges={e.langueges}
          receiving={e.receiving}
          photo={e.photo}
        />
      ))}
    </div>
  );
};

export default RegCardList;
