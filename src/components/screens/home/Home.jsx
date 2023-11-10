import { useState } from 'react'
import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import Statistics from '../profile/statistics/Statistics'

function Home() {
  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button clickHandler={() => navigate('/new-workout')}>New</Button>
      <h1 className={styles.heading}>EXERCISES FOR EVERYONE</h1>
      <Statistics />
    </Layout>
  )
}

export default Home
