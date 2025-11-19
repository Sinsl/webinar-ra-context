
import { Dot } from "./Dot";


export const Dots = () => {

  const renderDots = () => {
    const dots = [];

    for (let i = 1; i < 10; i++) {
      dots.push(<Dot key={i} number={i}/>)
    }
    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}