import { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { HeaderMainWrap, HeaderWrap, Brand, DropDownWrap, NavBar, NavItem, SocialBarWrap } from "./headerStyles"
import MenuIcon from "./menuIcon";
import { TwitterIcon } from '../svg/twitter';
import { FacebookIcon } from '../svg/facebook';
import { GithubIcon } from '../svg/github';
import { LinkedinIcon } from '../svg/linkedin';
import { InstagramIcon } from '../svg/instagram';
import { useRouter } from 'next/router';



const Header = () => {
  const router = useRouter()
  const myRef = useRef()
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNave] = useState("/")
  const getRouter = () => {
    return (router.asPath === activeNav)  
  }
  const toggleMenu = (clicked) => {
    if(clicked&&showMenu || (!clicked)&&(!showMenu))
      setShowMenu(!showMenu);
  }
  useEffect(()=>{
    console.log(router.asPath);
    setActiveNave(router.asPath);
  },[router])
  return (
    <>
      <HeaderMainWrap>
        <HeaderWrap>
          <Brand><p>Jerome Elorm Cordjotse</p></Brand>
          <MenuIcon ref={myRef} menuFunc={toggleMenu} />
        </HeaderWrap>
      </HeaderMainWrap>
      <DropDownWrap showMenu={showMenu}>
        <NavBar onClick={() => {toggleMenu(true); myRef.current.childMethod()}}>
          <Link href="/" passHref>
            <NavItem className={router.pathname == "/" ? "active" : ""}>Home</NavItem>
          </Link>
          {/* <Link href="/about/elorm_jerome" passHref>
            <NavItem className={router.pathname == "/about/elorm_jerome" ? "active" : ""}>About Me</NavItem>
          </Link> */}
          <Link href="/contact" passHref>
            <NavItem className={router.pathname == "/contact" ? "active" : ""}>Contact</NavItem>
          </Link>
          <SocialBar />
        </NavBar>
      </DropDownWrap>
    </>
  )
};

export const SocialBar = () => {
  return (         <SocialBarWrap>
    <Link href="https://web.facebook.com/jerome.eljay">
      <a>
        <FacebookIcon />
      </a>
    </Link>
    <Link href="https://github.com/jecordjotse">
      <a>
        <GithubIcon />
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/jerome-cordjotse">
      <a>
        <LinkedinIcon />
      </a>
    </Link>
    <Link href="https://twitter.com/Elorm_Jerome">
      <a>
        <TwitterIcon />
      </a>
    </Link>
    <Link href="https://www.instagram.com/elorm_jerome">
      <a>
        <InstagramIcon />
      </a>
    </Link>
  </SocialBarWrap>)
}

export default Header;
