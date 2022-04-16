import Link from "next/link";
import { HeaderMainWrap, HeaderWrap, Brand, DropDownWrap, NavBar, NavItem, SocialBar } from "./headerStyles"
import MenuIcon from "./menuIcon";



const Header = () => {
  return (
    <>
      <HeaderMainWrap>
        <HeaderWrap>
          <Brand><p>Jerome Cordjotse</p></Brand>
          <MenuIcon menuFunc={()=>{console.log("I Clicked")}} />
        </HeaderWrap>
      </HeaderMainWrap>
      <DropDownWrap>
        <NavBar>
          <Link href="/" passHref>
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/about/elorm_jerome" passHref>
            <NavItem>About Me</NavItem>
          </Link>
          <Link href="contact" passHref>
            <NavItem>Contact</NavItem>
          </Link>
          <SocialBar>
            <Link href="#">
              <a>
                <i className="fa-brands fa-github-square"></i>
              </a>
            </Link>
            <Link href="#">
              <a>
                <i className="fa-brands fa-github-square"></i>
              </a>
            </Link>
            <Link href="#">
              <a>
                <i className="fa-brands fa-github-square"></i>
              </a>
            </Link>
          </SocialBar>
        </NavBar>
      </DropDownWrap>
    </>
  )
};

export default Header;
