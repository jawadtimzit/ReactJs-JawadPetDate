import React, { Component } from 'react'

export default class Body2 extends Component {
  render() {
    return (
      <div>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn1.photostockeditor.com/t/0401/animal-two-short-coated-brown-and-black-dogs-playing-dog-dog-image.jpg" class="d-block w-100" alt="dog1"/>
    </div>
    <div class="carousel-item">
      <img src="https://wtop.com/wp-content/uploads/2019/01/2920895-1880x1254.jpg" class="d-block w-100" alt="dog2"/>
    </div>
    <div class="carousel-item">
      <img src="https://s28489.pcdn.co/wp-content/uploads/2021/03/IMG_5084.jpg.optimal.jpg" class="d-block w-100" alt="dog3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    )
  }
}
