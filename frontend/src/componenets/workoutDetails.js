import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutDetails = ({workout}) => {

  const { dispatch } = useWorkoutContext()

  const handleClick = async () => {

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if (response.ok){
      console.log("deleted");
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }


    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (lbs): </strong>
          {workout.load}
        </p>
        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p>
          <strong>Sets: </strong>
          {workout.sets}
        </p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
      </div>
    );
}

export default WorkoutDetails;
