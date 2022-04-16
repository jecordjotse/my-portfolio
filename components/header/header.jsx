import { useState } from 'react'
import Link from "next/link";
import { HeaderMainWrap, HeaderWrap, Brand, DropDownWrap, NavBar, NavItem, SocialBar } from "./headerStyles"
import MenuIcon from "./menuIcon";
import { TwitterIcon } from '../svg/twitter';
import { FacebookIcon } from '../svg/facebook';
import { GithubIcon } from '../svg/github';
import { LinkedinIcon } from '../svg/linkedin';
import { InstagramIcon } from '../svg/instagram';



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (clicked) => {
    if(clicked&&showMenu || (!clicked)&&(!showMenu))
      setShowMenu(!showMenu);
  }
  return (
    <>
      <HeaderMainWrap>
        <HeaderWrap>
          <Brand><p>Jerome Cordjotse</p></Brand>
          <MenuIcon menuFunc={toggleMenu} />
        </HeaderWrap>
      </HeaderMainWrap>
      <DropDownWrap showMenu={showMenu}>
        <NavBar>
          <Link href="/" passHref>
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/about/elorm_jerome" passHref>
            <NavItem>About Me</NavItem>
          </Link>
          <Link href="/contact" passHref>
            <NavItem>Contact</NavItem>
          </Link>
          <SocialBar>
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
            <Link href="#">
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href="https://www.instagram.com/elorm_jerome">
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </SocialBar>
        </NavBar>
      </DropDownWrap>
    </>
  )
};

export default Header;
