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
      <p>Hello World</p>
      <DropDownWrap>
        <NavBar>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/about/elorm_jerome">
            <NavItem>About Me</NavItem>
          </Link>
          <Link href="contact">
            <NavItem>Contact</NavItem>
          </Link>
          <SocialBar>
            <Link href="#">
              <a>
              </a>
            </Link>
            <Link href="#">
              <a>
              </a>
            </Link>
            <Link href="#">
              <a>
  <i class="fa-brands fa-github-square"></i>
              </a>
            </Link>
          </SocialBar>
        </NavBar>
      </DropDownWrap>
    </>
  )
};

export default Header;
