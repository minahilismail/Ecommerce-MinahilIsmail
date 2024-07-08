export type PRODUCT_ITEM = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type CART_ITEM = {
  category: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

export type NEWS = {
  date: string;
  image: string;
  title: string;
  news: string;
  company: string;
};

export type USER_REVIEW = {
  fullName: string;
  image: string;
  review: string;
};

export type STAR_RATING = {
  stars: number;
};

export type CHECKBOX_FILTER_PROPS= {
  id: string;
  label: string;
  isChecked: boolean;
  count?: number;
  onClick: () => void;
}