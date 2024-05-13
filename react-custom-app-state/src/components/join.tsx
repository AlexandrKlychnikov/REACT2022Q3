import React from 'react';
import RegCardList from './cards/regcardlist';
import { Register } from './forms/register';
import s from './home.module.sass';

export function Join() {
  return (
    <main className={s.main}>
      <Register />
      <RegCardList />
    </main>
  );
}
