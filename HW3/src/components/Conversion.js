import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Suspense, useState} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Conversion() {
    const [valueC, setValueC] = useState(0);
    const [valueF, setValueF] = useState(0);

    /**
     * Перевод из Цельсия в Фаренгейты
     * @param e
     * @constructor
     */
    const CelsiusToFahrenheit = (e) => {
        if (!isNaN(e.target.value)) {
            if (e.target.value[0] === '0') {
                const [...arr] = e.target.value;
                arr.shift();
                setValueC(arr.join(''));
            } else {
                setValueC(e.target.value);
            }
            setValueF(Math.round((9 / 5 * e.target.value + 32) * 100) / 100);
        }
    }

    /**
     * Перевод из Фаренгейтов в Цельсия
     * @param e
     * @constructor
     */
    const FahrenheitToCelsius = (e) => {
        if (!isNaN(e.target.value)) {
            if (e.target.value[0] === '0') {
                const [...arr] = e.target.value;
                arr.shift();
                setValueF(arr.join(''));
            } else {
                setValueF(e.target.value);
            }
            setValueC(Math.round(5 / 9 * (e.target.value - 32) * 100) / 100);
        }
    }

    return (
        <Suspense fallback={<ClimbingBoxLoader/>}>
            <div>
                <h1>Conversion</h1>
                <p style={{display: 'flex', justifyContent: 'center', alignItems: 'end', gap: '20vw'}}>
                    <TextField id="standard-basic" label="C" variant="standard" value={valueC}
                               onChange={CelsiusToFahrenheit}/>
                    <TextField id="standard-basic" label="F" variant="standard" value={valueF}
                               onChange={FahrenheitToCelsius}/>
                </p>
            </div>
        </Suspense>
    );
}
