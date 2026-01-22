'use client'

import { useEffect, useState } from "react"

export default function MainButton() {
    const [ count, setCount ] = useState<number>(1);

    useEffect(() => {
        console.log('Компонент смонтирован');
        console.log(window.scrollY)
        
        return () => {
            console.log('Компонент будет размонтирован');
        };
    }, [count]); 

    const countUp = () => {
        return setCount(count + 1)
    }

    return(
        <>
            <button onClick={ countUp }>Нажмать</button>
            <div>{ count }</div>  
        </>
    )
}