import { useMutation } from "@tanstack/react-query"
import exerciseService from "../../../services/exercise/exercise.service"
import Layout from "../../layout/Layout"
import { useForm, Controller } from "react-hook-form"
import Loader from "../../ui/Loader"
import Field from "../../ui/field/Field"
import Button from "../../ui/button/Button"
import styles from './NewExercise.module.scss'
import Alert from "../../ui/alert/Alert"
import cn from 'clsx'
import { getIconPath } from "./icon-path.util"

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {

  const {register, 
    handleSubmit, 
    formState: {errors}, 
    reset,
    control
    } = useForm({
    mode: 'onChange'
  })

  const {isSuccess, error, isLoading, mutate} = useMutation({
    mutationKey: ['create exercise'],
    mutationFn: (body) => {exerciseService.create(body)},
    onSuccess: () => {
      reset()
    }
  })

  const onSubmit = (data) => {
    mutate(data)
  }

  return (
    <>
      <Layout 
        bgImage='/images/new-exercise-bg.jpg'
        heading="Create new exercise"
        backLink="/new-workout"
      />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text='Exercise created!' />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>

          <Field
            error={errors?.name?.message}
            name='name'
            register={register}  
            options={{required: 'name is required'}}
            type="text" placeholder="enter exercise name"/>

          <Field
          error={errors?.times?.message}
          name='times'
          register={register}  
          options={{required: 'times is required',
            valueAsNumber: true,
            validate: value => value > 0 || 'times must be a number'
            }}
          placeholder="enter exercise times"/>

          <Controller 
            name="iconPath"
            control={control}
            render={({ field: {value, onChange} }) => (
              <div className={styles.images}>
              {
                data.map(name => (
                  <img 
                    key={`ex img ${name}`}
                    src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
                    alt={name}
                    className={cn({
                      [styles.active]: value === getIconPath(name)
                    })}
                    onClick={() => onChange(getIconPath(name))}
                    draggable={false}
                    height='45'
                  />
              ))}
            </div>
            )}
          />

          {errors?.iconPath && <div className="error">{errors?.iconPath?.message}</div>}
          
          <div className={styles.wrapperButtons}>
            <Button>Create</Button>
          </div>
          
        </form>
    </div>
    </>
  )
}

export default NewExercise