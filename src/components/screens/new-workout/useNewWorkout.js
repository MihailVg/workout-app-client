import { useMutation } from "@tanstack/react-query"
import workoutService from "../../../services/workout/workout.service"
import { useForm } from "react-hook-form"
import { useMemo } from "react"

export const useNewWorkout = () => {
  const {register, 
    handleSubmit, 
    formState: {errors}, 
    reset,
    control
    } = useForm({
    mode: 'onChange'
  })

  const {isSuccess, error, isLoading, mutate} = useMutation({
    mutationKey: ['create workout'],
    mutationFn: (body) => {workoutService.create(body)},
    onSuccess: () => {
      reset({
        name: '',
        exerciseIds: []
      })
    }
  })

  const onSubmit = (data) => {
    mutate({
      name: data.name,
      exerciseIds: data.exerciseIds.map(ex => ex.value)
    })
  }

  return useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      control,
      isSuccess,
      error,
      isLoading,
      onSubmit
    }),
    [errors, isSuccess, error, isLoading]
  )
}