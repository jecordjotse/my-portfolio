import React, { useState } from 'react'
import { DashOne, DashThree, DashTwo, MenuIconWrap } from './menuIconStyles'

const MenuIcon = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setClicked(!clicked);
    }
  return (
      <MenuIconWrap href="#" onClick={handleClick} clicked={clicked}>
          <>
            <DashOne clicked={clicked}></DashOne>
            <DashTwo clicked={clicked}></DashTwo>
            <DashThree clicked={clicked}></DashThree>
          </>
      </MenuIconWrap>
  )
}

export default MenuIcon