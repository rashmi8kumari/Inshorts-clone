
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';



const Styledheader = styled(AppBar)`
       background-color: #fff;
       height: 70px;
       paddingright: 70
`;


const MenuIcon = styled(Menu)`
      color: #000;

`;
const Image = styled('img')({
    height: 55,
    margin: 'auto'
})

const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <Styledheader position="static">
             <Toolbar>
              <MenuIcon/>
              <Image src = {url} alt = "logo" />
             </Toolbar>
        </Styledheader>
      
    )
}



export default Header;
