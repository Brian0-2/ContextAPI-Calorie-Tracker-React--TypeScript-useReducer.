import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context){
        throw new Error('Hook useActivity must be used in a ActivityProvider')
    }

    return context;
}