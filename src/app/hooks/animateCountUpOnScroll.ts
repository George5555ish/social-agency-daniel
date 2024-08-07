import React, { useState, useRef, useEffect } from "react"; 

export default function AnimateCountUpOnScroll (){
    
const isBrowser = typeof window !== `undefined`
const [scrollPosition, setScrollPosition] = useState(0);
const [animateNumbers, setanimateNumbers] = useState(false);
const handleScroll = () => {
    const position = window.scrollY;  
    const shouldNumbersAnimate = position > 200
    // setScrollPosition(position);
    setanimateNumbers(shouldNumbersAnimate);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollPosition]);

return {animateNumbers}
}