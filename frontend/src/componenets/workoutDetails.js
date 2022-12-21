import React from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutDetails = ({workout}) => {

  const { dispatch } = useWorkoutContext()
  const {user} = useAuthContext()

  const handleClick = async () => {

    if(!user){
      return 
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
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
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
      </div>
    );
}

export default WorkoutDetails;
