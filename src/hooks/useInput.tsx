import { useState, ChangeEvent } from "react";

type TuseInput = [
    value: string, 
    handleValue: (e:ChangeEvent<HTMLInputElement>) => void
]
    
export const useInput = ():TuseInput => {
    const [value, setValue] = useState("");

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return [value, handleValue];
};

;