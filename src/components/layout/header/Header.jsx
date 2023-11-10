import { useAuth } from '../../../hooks/useAuth'
import {IoMdArrowBack} from 'react-icons/io'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'
import {SlUser} from 'react-icons/sl'

const Header = ({backLink = '/'}) => {
  const {pathname} = useLocation()

  const navigate = useNavigate()

  const {isAuth} = useAuth()

  return <header className={styles.header}>
    {isAuth && <>
    {pathname === '/' && isAuth ? (
      <button onClick={() => {navigate('/profile')}}>
      <SlUser fill='#fff' fontSize={27} />
      </button>
    ): 
    (<button onClick={() => {navigate(isAuth ? backLink : '/auth')}}>
    <IoMdArrowBack fill='#fff' fontSize={29} />
    </button>)}

      <Hamburger />
      </>
    }
    </header>
}

export default Header