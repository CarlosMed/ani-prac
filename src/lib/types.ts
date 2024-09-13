import { ReactNode } from "react";

export type CarouselProps = {
  baseUrl: string;
  images: {
    id: number;
    imageURL: string;
    altTag: string;
  }[];
};

export type CarouselButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  handleClick: () => void;
};
