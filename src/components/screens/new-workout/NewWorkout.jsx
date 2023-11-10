import { useMutation } from "@tanstack/react-query"
import workoutService from "../../../services/workout/workout.service"
import Layout from "../../layout/Layout"
import { useForm, Controller } from "react-hook-form"
import Loader from "../../ui/Loader"
import Field from "../../ui/field/Field"
import Button from "../../ui/button/Button"
import Alert from "../../ui/alert/Alert"
import cn from 'clsx'
import { useNewWorkout } from "./useNewWorkout"
import SelectExercises from "./SelectExercises"
import { Link } from "react-router-dom"


const NewWorkout = () => {

  const {control, error, errors, handleSubmit, isLoading, isSuccess, onSubmit, register} = useNewWorkout()

  return (
    <>
      <Layout 
        bgImage='/images/new-workout-bg.jpg'
        heading="Create new workout"
      />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text='Workout created successfully!' />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>

          <Field
            error={errors?.name?.message}
            name='name'
            register={register}  
            options={{required: 'name is required'}}
            type="text" placeholder="enter workout name"/>

            <Link to='/new-exercise' className='dark-link'>
              Add new exercise
            </Link>

            <SelectExercises  control={control}/>

          {errors?.iconPath && <div className="error">{errors?.iconPath?.message}</div>}
          
            <Button>Create</Button>
          
        </form>
    </div>
    </>
  )
}

export default NewWorkout