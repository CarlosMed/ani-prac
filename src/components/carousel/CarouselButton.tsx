import { CarouselButtonProps } from "../../lib/types";

export default function CarouselButton({
  ariaLabel,
  handleClick,
  children,
}: CarouselButtonProps) {
  return (
    <button aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </button>
  );
}
