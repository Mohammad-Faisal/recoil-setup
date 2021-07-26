import {atom, useRecoilValue} from "recoil";
import {nameState} from "../data/NameState";


export const Display = () =>{
    const name = useRecoilValue(nameState)

    return <div>
        the name is  {name}
    </div>
}
