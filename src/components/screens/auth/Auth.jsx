import Button from "../../ui/button/Button"
import Field from "../../ui/field/Field"
import Loader from "../../ui/Loader"

import Layout from "../../layout/Layout"

import styles from './Auth.module.scss'

import { useAuthPage } from './useAuthPage'

const Auth = () => {
  const {errors, handleSubmit, isLoading, onSubmit, register, setType} = useAuthPage()

  return (
  <>
  <Layout heading="Sign in" bgImage='/images/auth-bg.png' />
    <div className="wrapper-inner-page">
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)}>

        <Field
          error={errors?.email?.message}
          name='email'
          register={register}  
          options={{required: 'email is required'}}
          type="text" placeholder="enter your email"/>

        <Field
        error={errors?.password?.message}
        name='password'
        register={register}  
        options={{required: 'password is required'}}
        type="password" placeholder="enter your password"/>

        <div className={styles.wrapperButtons}>
          <Button clickHandler={() => setType('login')}>Sign in</Button>
          <Button clickHandler={() => setType('register')}>Sign up</Button>
        </div>
        
      </form>
    </div>
    </>
  )
}

export default Auth