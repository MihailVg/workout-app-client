import styles from './Hamburger.module.scss'
import Menu from './Menu'

import { useState } from "react"
import {CgMenuRight} from 'react-icons/cg'
import {IoClose} from 'react-icons/io5'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

const Hamburger = () => {
  const {isShow, ref, setIsShow} = useOnClickOutside(false)

  return <div className={styles.wrapper} ref={ref}>
    <button onClick={() => setIsShow(!isShow)}>
      {isShow ? <IoClose /> : <CgMenuRight />}
    </button>
    <Menu isShow={isShow} setIsShow={setIsShow}/>
  </div>
}

export default Hamburger