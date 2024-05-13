import { IResponseItem, ISearch, IRegCardProps } from './shared/types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  GetData = 'GET_DATA',
  IsLoading = 'IS_LOADING',
  IsError = 'IS_ERROR',
  Details = 'MODE_DETAILS',
  SetId = 'SET_ID',
  SearchForm = 'SET_SEARCH_FORM',
  Search = 'SET_SEARCH',
  Query = 'SET_QUERY',
  Number = 'SET_NUMBER',
  Size = 'SET_SIZE',
  OrderBy = 'SET_ORDER',
  Register = 'SET_JOIN',
  RegList = 'PUSH_LIST',
  GetTotal = 'GET_TOTAL',
}

export type ActionTypes =
  | GetDataActions
  | GetTotalActions
  | RegisterActions
  | RegListActions
  | SearchActions
  | DetailsModeActions
  | SetIdActions
  | IsErrorModeActions
  | IsLoadingModeActions;

// Cards

type GetDataPayload = {
  [Types.GetData]: IResponseItem[];
};

export type GetDataActions = ActionMap<GetDataPayload>[keyof ActionMap<GetDataPayload>];

export const getDataReducer = (state: IResponseItem[], action: ActionTypes) => {
  switch (action.type) {
    case Types.GetData:
      return [...action.payload];
    default:
      return state;
  }
};

// Total

type GetTotalPayload = {
  [Types.GetTotal]: string;
};

export type GetTotalActions = ActionMap<GetTotalPayload>[keyof ActionMap<GetTotalPayload>];

export const getTotalReducer = (state: string, action: ActionTypes) => {
  switch (action.type) {
    case Types.GetTotal:
      return action.payload;
    default:
      return state;
  }
};

// Search

type SearchPayload = {
  [Types.SearchForm]: ISearch;
  [Types.Number]: number;
  [Types.Size]: number;
  [Types.Search]: string;
  [Types.Query]: string;
  [Types.OrderBy]: string;
};

export type SearchActions = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];

export const searchReducer = (state: ISearch, action: ActionTypes) => {
  switch (action.type) {
    case Types.SearchForm:
      return {
        ...state,
        search: action.payload.search,
        query: action.payload.query,
        number: action.payload.number,
        size: action.payload.size,
        orderBy: action.payload.orderBy,
      };
    case Types.Search:
      return {
        ...state,
        search: action.payload,
      };
    case Types.Query:
      return {
        ...state,
        query: action.payload,
      };
    case Types.Number:
      return {
        ...state,
        number: action.payload,
      };
    case Types.Size:
      return {
        ...state,
        size: action.payload,
      };
    case Types.OrderBy:
      return {
        ...state,
        orderBy: action.payload,
      };
    default:
      return state;
  }
};

// Register

type RegisterPayload = {
  [Types.Register]: IRegCardProps;
};

export type RegisterActions = ActionMap<RegisterPayload>[keyof ActionMap<RegisterPayload>];

export const registerReducer = (state: IRegCardProps, action: ActionTypes) => {
  switch (action.type) {
    case Types.Register:
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        birth: action.payload.birth,
        size: action.payload.country,
        langueges: action.payload.langueges,
        receiving: action.payload.receiving,
        photo: action.payload.photo,
      };
    default:
      return state;
  }
};

// RegList

type RegListPayload = {
  [Types.RegList]: IRegCardProps;
};

export type RegListActions = ActionMap<RegListPayload>[keyof ActionMap<RegListPayload>];

export const regListReducer = (state: IRegCardProps[], action: ActionTypes) => {
  switch (action.type) {
    case Types.RegList:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Details

type detailsModePayload = {
  [Types.Details]: undefined;
};

export type DetailsModeActions = ActionMap<detailsModePayload>[keyof ActionMap<detailsModePayload>];

export const detailsModeReducer = (state: boolean, action: ActionTypes) => {
  switch (action.type) {
    case Types.Details:
      return !state;
    default:
      return state;
  }
};

//SetId

type SetIdPayload = {
  [Types.SetId]: string;
};

export type SetIdActions = ActionMap<SetIdPayload>[keyof ActionMap<SetIdPayload>];

export const setIdReducer = (state: string, action: ActionTypes) => {
  switch (action.type) {
    case Types.SetId:
      return action.payload;
    default:
      return state;
  }
};

// IsLoading

type isLoadingModePayload = {
  [Types.IsLoading]: undefined;
};

export type IsLoadingModeActions =
  ActionMap<isLoadingModePayload>[keyof ActionMap<isLoadingModePayload>];

export const isLoadingModeReducer = (state: boolean, action: ActionTypes) => {
  switch (action.type) {
    case Types.IsLoading:
      return !state;
    default:
      return state;
  }
};

// IsError

type isErrorModePayload = {
  [Types.IsError]: undefined;
};

export type IsErrorModeActions = ActionMap<isErrorModePayload>[keyof ActionMap<isErrorModePayload>];

export const isErrorModeReducer = (state: boolean, action: ActionTypes) => {
  switch (action.type) {
    case Types.IsError:
      return !state;
    default:
      return state;
  }
};
