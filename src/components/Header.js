import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div>
            <nav class="navbar fixed top navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    {/* <a>  
                        <img 
                        src="https://webneel.com/sites/default/files/images/manual/logo/30-pet-veterinary-animal-logo.gif"
                        width={180} 
                        class = "d-inline-block align top"/>
                        
                    </a> */}

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Feature</a>

        </li>

        <li class="nav-item">
            <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="">Others</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">About</a>
        </li>
        
       
        <li class="nav-item ">
            <a class="nav-link" href="customerlistdogs" style={{marginLeft:450}}>Customer</a>
        </li>
        <li class="nav-item ">
            <a class="nav-link" href="/login">Admin</a>
        </li>

        
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        

    </div>
    </div>
    </nav>
    
    </div>  
    )
  }
}
