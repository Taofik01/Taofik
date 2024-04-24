import { useEffect } from "react";

export const animateUseEffect = () => {
    useEffect(() => {
        //setIsVisible to true after the delay
const timeout = setTimeout(() => {
    setIsVisible(true)
}, 3000) // 2000 milliseconds = 2 seconds

return () => clearTimeout(timeout);
    }, 
    
    []);
};