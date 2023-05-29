import React from 'react'

const NavbarButton = (props) => {
    if (props.active == true) {
        return (
            <>
                <a className="nav-link active" href="#" style={{backgroundColor: "#101113"}}>prop.name</a>
            </>
        )
    } else {
        return (
            <>
                <a className="nav-link" href="#">prop.name</a>
            </>
        )
    }
}

export default NavbarButton