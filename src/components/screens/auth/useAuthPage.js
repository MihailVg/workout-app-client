import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import authService from "../../../services/auth.service"

export const useAuthPage = () => {
  const [type, setType] = useState('login')

  const {register, 
    handleSubmit, 
    formState: {errors}, 
    reset} = useForm({
    mode: 'onChange'
  })

  const {isAuth, setIsAuth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const {mutate, isLoading} = useMutation({
    mutationKey: ['auth'],
    mutationFn: ({email, password}) => {authService.main(email, password, type)},
    onSuccess: () => {
      setIsAuth(true)
      reset()
    }
  })

  const onSubmit = (data) => {
    mutate(data)
  }

  return useMemo( () => ({
    setType,
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit
  }), [errors, isLoading])
}