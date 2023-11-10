import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../ui/button/Button"
import Field from "../../ui/field/Field"
import Loader from "../../ui/Loader"

import authService from "../../../services/auth.service"
import Layout from "../../layout/Layout"

import styles from './Auth.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
  const {errors, handleSubmit, isLoading, register, onSubmit, setType} = useAuthPage()

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