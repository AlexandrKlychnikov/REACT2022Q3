import React, { createContext, useReducer, Dispatch, Reducer } from 'react';
import { INITIAL_REGISTER_STATE, INITIAL_SEARCH_STATE } from 'shared/constants';
import { IRegCardProps, IResponseItem, ISearch } from 'shared/types';
import {
  getDataReducer,
  detailsModeReducer,
  isLoadingModeReducer,
  isErrorModeReducer,
  searchReducer,
  ActionTypes,
  setIdReducer,
  registerReducer,
  regListReducer,
  getTotalReducer,
} from './reducers';

type InitialStateType = {
  cards: IResponseItem[];
  total: string;
  cardId: string;
  searchForm: ISearch;
  isLoading: boolean;
  detailsMode: boolean;
  isError: boolean;
  register: IRegCardProps;
  regList: IRegCardProps[];
};

const initialState = {
  cards: [],
  total: '',
  cardId: '',
  searchForm: INITIAL_SEARCH_STATE,
  isLoading: false,
  detailsMode: false,
  isError: false,
  register: INITIAL_REGISTER_STATE,
  regList: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  {
    cards,
    total,
    cardId,
    register,
    regList,
    searchForm,
    isLoading,
    detailsMode,
    isError,
  }: InitialStateType,
  action: ActionTypes
) => ({
  cards: getDataReducer(cards, action),
  total: getTotalReducer(total, action),
  cardId: setIdReducer(cardId, action),
  register: registerReducer(register, action),
  regList: regListReducer(regList, action),
  searchForm: searchReducer(searchForm, action),
  isLoading: isLoadingModeReducer(isLoading, action),
  detailsMode: detailsModeReducer(detailsMode, action),
  isError: isErrorModeReducer(isError, action),
});

interface IChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

const AppProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<InitialStateType, ActionTypes>>(
    mainReducer,
    initialState
  );

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
