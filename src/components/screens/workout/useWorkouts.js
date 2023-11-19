import { useNavigate } from "react-router-dom"
import workoutService from "../../../services/workout/workout.service"
import workoutLogService from "../../../services/workout/workout-log.service"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useWorkouts = () => {
  const {data, isSuccess} = useQuery({
    queryKey: ['get workouts'], 
    queryFn: () => workoutService.getAll(),
    select: ({ data }) => data
  })

  const navigate = useNavigate()

  const {mutate, isLoading, isSuccess: isSuccessMutate, error} = useMutation({
    mutationKey: ['create new workout log'],
    mutationFn: workoutId => {return workoutLogService.create(workoutId)},
    onSuccess({ data }) {
      navigate(`/workout/${data.id}`)
    }
  })

  return {
    data,
    isSuccess,
    mutate,
    isLoading,
    isSuccessMutate,
    error
  }
}