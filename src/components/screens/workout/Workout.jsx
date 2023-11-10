import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import cn from 'clsx'
import styles from './Workout.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import Header from "../../layout/header/Header"
import Alert from "../../ui/alert/Alert"
import workoutLogService from "../../../services/workout/workout-log.service"
import Loader from "../../ui/Loader"
import ExerciseItem from "./ExerciseItem"
import { Fragment } from "react"

const Workout = () => {
  const {id} = useParams()

  const {data: workoutLog, isSuccess, isLoading} = useQuery({
    queryKey: ['get workout log', id],
    queryFn: () => workoutLogService.getById(id),
    select: ({data}) => data
  })

  return (
  <>
    <div 
     className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
     style={{ backgroundImage: `url('/images/workout-bg.jpg')`, height: 356}}
    >
      <Header backLink="/workouts" />

      {isSuccess && (
        <div>
          <time className={styles.time}>{workoutLog.minute + ' min.'}</time>
          <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
        </div>
      )}
    </div>
    <div
     className="wrapper-inner-page"
     style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div style={{ width: '90%', margin: '0 auto'}}>
        {/* {errorCompleted && <Alert type="error" text={errorCompleted}/>} */}
      </div>
      {isLoading ? <Loader /> : 
        <div className={styles.wrapper}>
          {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
            <Fragment key={exerciseLog.id}>
              <ExerciseItem exerciseLog={exerciseLog}/>
              {index % 2 !== 0 && index !== workoutLog.exerciseLog.length - 1 && 
              (<div className={styles.line}/>)}
            </Fragment>
          ))}
        </div>
      }
    </div>
  </>
  )
}

export default Workout