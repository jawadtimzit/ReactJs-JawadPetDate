import React, { Component } from 'react'
import "../csscomponent/Body3.css";

export default class Home extends Component {
  render() {
    return (
        <div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/background.jpg`} style={{width:"100%", height:"100%"}}/>
        </div>
    
    <div class = "row">
    <div class = "col-lg-4" style={{marginTop:50}}>
      <svg class="bd-placeholder-img rounded-circle" 
          width="140" height="140" 
          role="img" aria-label="Placeholder: 140x140" 
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
      </svg>
      <h2>Heading</h2>
      <p className = "parag">Some representative placeholder content for the three 
          columns of text below the carousel. This is the first 
          column.
      </p>
      <p><a class="btn btn-secondary" href="#">View details »</a></p>
    </div>
    <div class ="col-lg-4" style={{marginTop:50}}>
      <svg class="bd-placeholder-img rounded-circle" 
          width="140" height="140" 
          role="img" aria-label="Placeholder: 140x140" 
          preserveAspectRatio="xMidYMid slice" 
          focusable="false"><title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
      </svg>
      <h2>Heading</h2>
      <p className = "parag">Another exciting bit of representative 
      placeholder content. 
          This time, we've moved on to the second column.
      </p>
      <p><a class="btn btn-secondary" href="#">View details »</a></p>
    </div>
    <div class ="col-lg-4" style={{marginTop:50}}>
      <svg class="bd-placeholder-img rounded-circle" 
          width="140" height="140" 
          role="img" aria-label="Placeholder: 140x140" 
          preserveAspectRatio="xMidYMid slice" 
          focusable="false"><title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
      </svg>
      <h2>Heading</h2>
      <p className = "parag">And lastly this, the third column of representative placeholder content.
      </p>
      <p><a class="btn btn-secondary" href="#">View details »</a></p>
    </div>
    
    </div>
    </div>
    )
  }
}
