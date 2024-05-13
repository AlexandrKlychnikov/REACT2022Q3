import { IRegCardProps } from './types';

export const BASE_URL =
  'https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/';

export const MAIN_URL = 'https://api.unsplash.com/search/';

export const KEY = 'qXB6FcBG8PNXEl6bn-3rLd2TL8yr6JugZcQ4Q6dDsUs';

export const NUMBER_OF_CARDS = 12;

export const DEFAULT_QUERY_WORD = 'street';

export const INITIAL_SEARCH_STATE = {
  query: '',
  search: '',
  number: 1,
  size: 12,
  orderBy: 'relevant',
};

export const INITIAL_REGISTER_STATE: IRegCardProps = {
  name: '',
  surname: '',
  birth: '',
  country: '',
  langueges: '',
  receiving: '',
  photo: '',
};

export const INITIAL_RESPONSE_ITEM = {
  urls: {
    full: '',
    small: '',
  },
  id: '',
  user: {
    name: '',
  },
  links: {
    download: '',
  },
  height: '',
  width: '',
  description: '',
  created_at: '',
};
