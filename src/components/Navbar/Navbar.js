import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavIcon, NavLogo,
        MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink} from './Navbar.elements';



const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <IconContext.Provider value={{ color: '#045959' }}>
            <Nav>
                <NavbarContainer> 
                    <NavLogo to="/">
                    <NavIcon />
                    SIWH
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/about'>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/faq'>
                                FAQ
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/Write-review">
                                    <Button primary>Write a Review</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/write-review">
                                    <Button fontBig primary>
                                        Write a Review
                                    </Button>
                                </NavBtnLink>
                            ) }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;