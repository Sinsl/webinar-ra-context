import { useContext } from "react";
import { SliderContext } from "./Slider";

interface DotProps {
  number: number
}

export const Dot = ({number}: DotProps) => {
  const { goToSlide, slideNumber} = useContext(SliderContext);

  return (
    <div
    className={`dot ${slideNumber === number ? "selected" : ""}`}
    onClick={() => goToSlide(number)}
    />
  );
}