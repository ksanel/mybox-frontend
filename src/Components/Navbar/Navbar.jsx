import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container py-4">
            <a class="navbar-brand text-warning" href="#"> <h1 className='display-5 p-0 m-0'> <i class="fa-solid fa-box-open"></i> MyBox</h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form class="d-flex" role="search">
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li class="nav-item">
                        <a class="nav-link text-warning btn btn-outline-dark" aria-current="page" href="#">
                            <i class="fa-solid fa-circle-user display-6"></i>
                        </a>
                    </li>
                </ul>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar