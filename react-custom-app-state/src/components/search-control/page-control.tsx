import React, { useContext } from 'react';
import { AppContext } from 'context';
import s from './page-control.module.sass';
import { Types } from 'reducers';

function PageControl() {
  const { state, dispatch } = useContext(AppContext);
  const {
    total,
    searchForm: { number, size },
  } = state;

  return (
    <div className={s.paginator}>
      <ul className={s.pageList}>
        <li className={s.pageLabel}>Page number:</li>
        <li>
          <input
            type="button"
            className={s.btn}
            value="<"
            onClick={() => (number > 1 ? dispatch({ type: Types.Number, payload: number - 1 }) : 1)}
          />
        </li>
        <li>
          <p className={s.pageNumber}>{number}</p>
        </li>
        <li>
          <input
            type="button"
            className={s.btn}
            value=">"
            onClick={() => dispatch({ type: Types.Number, payload: number + 1 })}
          />
        </li>
        <li>
          <select
            className={s.pageSize}
            id="page-size"
            onChange={(event) =>
              dispatch({
                type: Types.Size,
                payload: Number((event?.target as unknown as HTMLInputElement).value),
              })
            }
            defaultValue={size}
          >
            <option value={8}>8 / page</option>
            <option value={12}>12 / page</option>
            <option value={30}>30 / page</option>
          </select>
        </li>
        <li>
          <p className={s.pageNumber}>Total pages: {total}</p>
        </li>
      </ul>
    </div>
  );
}

export default PageControl;
