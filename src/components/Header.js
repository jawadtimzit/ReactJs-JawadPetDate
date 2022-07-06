import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
            <div>
                <nav class="navbar fixed top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="">About</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="">Reviews</a>
                                    </li>

                                    <li class="nav-item active">
                                        <a class="nav-link" href="/testcarousel">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/body2">Other</a>
                                    </li>

                                    <li class="nav-item ">
                                        <a className="nav-link disabled"  href="/customerlistdogs" style={{marginLeft:450}}></a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link" href="/login" style={{marginLeft:140}}>Admin</a>
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
