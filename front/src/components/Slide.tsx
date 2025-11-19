import { useContext} from "react";
import { SliderContext } from "./Slider";
import { useGetFetch } from "../func/useGetFetch";

export const Slide = () => {
  const { slideNumber } = useContext(SliderContext);
  const {data, loading, error} = useGetFetch(`cat/${slideNumber}`, {})

  return (
    <div className="slide-list">
        <div className="slide">
            {loading && <div>закгрузка</div>}
            {error && <div>ошибка</div>}
            {data && <img src={data} alt='cat' className="slide-image"/>}
        </div>
    </div>
  );
}