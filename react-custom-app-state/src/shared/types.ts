export interface ISearch {
  query: string;
  search: string;
  number: number;
  size: number;
  orderBy: string;
}

export interface ISearchState {
  search: ISearch;
  setChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCleared: () => void;
}

export interface IResponseItem {
  urls: {
    full: string;
    small: string;
  };
  id: string;
  user: {
    name: string;
  };
  links: {
    download: string;
  };
  height: string;
  width: string;
  description: string;
  created_at: string;
}

export interface ICardListProps {
  cardState: IResponseItem[];
}

export interface ISearchFormProps {
  children?: React.ReactNode;
  getData: (queryState: ISearch) => void;
}

export interface ICardProps {
  id: string;
  image: string;
  author: string;
}

export interface IRegCardProps {
  name: string;
  surname: string;
  birth: string;
  country: string;
  langueges: string;
  receiving: string;
  photo: string;
}

export interface IFormInputs {
  firstName: string;
  surname: string;
  birth: string;
  country: string;
  langueges: string[];
  receiving: string;
  photo: string;
}

export interface IPageControl {
  pageNumber: number;
  pageSize: number;
}

export enum SortType {
  relevancy = 'relevant',
  publishedAt = 'latest',
  popularity = 'popularity',
}
