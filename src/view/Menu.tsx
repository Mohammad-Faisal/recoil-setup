import React from 'react';
import {useRecoilState} from "recoil";
import {nameState} from "../data/NameState";

export const Menu = () => {

    const [name , setName] = useRecoilState(nameState)

    return <div>
        Menu
        <button onClick={() => setName('Faisal')}>Faisal</button>
        <button onClick={() => setName('AKhi')}>AKhi</button>
    </div>
}