import { WorkoutContext } from "../context/workouts.context";
import { useContext } from "react";


export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('Use workout context must be used inside its provider')
    }

    return context
}