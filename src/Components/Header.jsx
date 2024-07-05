import React, { useContext, useState } from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';

import { favMoviesContextApi } from '../ContextAPI/ContextShare';

import { Link } from 'react-router-dom';

function Header() {

    const [openNav, setOpenNav] = useState(false);

    const { favMoviesRes, setFavMoviesRes } = useContext(favMoviesContextApi)

    console.log("Favs:");
    console.log(favMoviesRes);

    return (
        <div>
            <MDBNavbar style={{ backgroundColor: "#FEC631" }} expand='lg'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        <h1 className='text-primary'>Movie Search <i className="fa-solid fa-film fa-xl" style={{ color: "red" }}></i></h1>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNav}>
                        <MDBNavbarNav>

                            <Link to={'/'}>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </Link>

                            <Link to={'/search'}>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page'>
                                        Search Movies
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </Link>

                            <Link to={'/favourites'}>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page'>
                                        Favourites
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </Link>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header