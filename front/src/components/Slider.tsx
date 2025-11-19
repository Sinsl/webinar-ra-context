import { useState, createContext } from "react";
import { Arrows } from "./Arrows";
import { Slide } from "./Slide";
import { Dots } from "./Dots";

export interface SliderContextType {
    goToSlide: (num: number) => void,
    changeSlide: (direction: number) => void,
    slideNumber: number
}

const initialState = {
    goToSlide: () => {},
    changeSlide: () => {},
    slideNumber: 1,
}

// eslint-disable-next-line react-refresh/only-export-components
export const SliderContext = createContext<SliderContextType>(initialState);

export const Slider = () => {
    const [slide, setSlide] = useState(1);

    const changeSlide = (direction: number = 1) => {
        let sliderNumber = slide + direction;
        sliderNumber = sliderNumber < 1 
            ? 9 
            : sliderNumber > 9 
                ? 1 
                : sliderNumber;
        setSlide(sliderNumber);
    }

    const goToSlide = (num: number) => {
        setSlide(num);
    }

    const contextValue = {
        goToSlide,
        changeSlide,
        slideNumber: slide,
    }

    return (
        <div className="slider">
            <SliderContext.Provider
                value={contextValue}
            >
                <Arrows />
                <Slide />
                <Dots />
            </SliderContext.Provider>
        </div>
    );


}