import React from 'react';
import s from './page-control.module.sass';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import searchFormSlice from 'redux/slices/searchFormSlice';

function PageControl() {
  const dispatch = useAppDispatch();
  const searchForm = useAppSelector((state) => state.searchForm);
  const { number, size } = searchForm;
  const total = useAppSelector((state) => state.total);

  return (
    <div className={s.paginator}>
      <ul className={s.pageList}>
        <li className={s.pageLabel}>Page number:</li>
        <li>
          <input
            type="button"
            className={s.btn}
            value="<"
            onClick={() =>
              number > 1 ? dispatch(searchFormSlice.actions.setNumber(number - 1)) : 1
            }
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
            onClick={() => dispatch(searchFormSlice.actions.setNumber(number + 1))}
          />
        </li>
        <li>
          <select
            className={s.pageSize}
            id="page-size"
            onChange={(event) =>
              dispatch(
                searchFormSlice.actions.setSize(
                  Number((event?.target as unknown as HTMLInputElement).value)
                )
              )
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
