import React from 'react';
import s from './switcher.module.sass';

const Switcher = () => {
  return (
    <div className={s.recieving}>
      <p className={s.recievingLabel}>Type of receiving:</p>
      <div className={s.switchContainer}>
        <label htmlFor="switcher" className={s.switch}>
          <input
            id="switcher"
            className={s.switchCheckbox}
            type="checkbox"
            name="receiving"
            data-testid="receiving"
          />
          <div className={s.switchButton} />
          <div className={s.switchLabels}>
            <span className={s.train}>Delivery</span>
            <span className={s.expanded}>Pick up</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Switcher;
