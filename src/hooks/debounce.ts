import { useEffect, useState } from "react";

export function useDebounce(value: string) {
    const [debounceValue, setDebounceValue] = useState(value)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, 1000)
        return ()=> clearTimeout(timer)
    }, [debounceValue, value])

    return debounceValue;
}