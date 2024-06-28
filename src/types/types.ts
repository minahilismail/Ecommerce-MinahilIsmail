export type ProductItem = {
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

export type CartItem = {
  category: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

export type News = {
  date: string;
  image: string;
  title: string;
  news: string;
  company: string;
};

export type UserReview = {
  fullName: string;
  image: string;
  review: string;
};

export type starRating = {
  stars: number;
};
