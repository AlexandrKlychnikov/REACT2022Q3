import React from 'react';
import { useAppSelector } from 'redux/hooks';
import RegCard from './regcard';
import s from './regcardlist.module.sass';

const RegCardList = () => {
  const { regList } = useAppSelector((state) => state);
  return (
    <div className={s.cardList} data-testid="regcard-container">
      {[...regList].map((e, i) => (
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
