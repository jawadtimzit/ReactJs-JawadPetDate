import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import Customermanagemntservice from '../services/Customermanagemntservice';


export default class Toylist extends Component {
  // constructor
  constructor(props){
    super(props)
    this.state = {
        // initialize an array of dogs
        // this array will be used to make a Rest Api call to our backend and store information we get in this array 
        toys:[],
        
    };      
}

// get toys first thing with componenetdidmount
componentDidMount(){ 
  Customermanagemntservice.getToys().then((res) =>{
     this.setState({toys:res.data})
 });
}
  render() {
    return (
      <div style={{backgroundColor:""}}>
      <section>
        <div class="card">
          
          <div class="card-body">
            <h3 class="card-title" style={{color:'purple'}}>Special Treatment</h3>
            <img src={`${process.env.PUBLIC_URL}/images/gift-dog.jpg`} />
            <br/>  <br/> 
            <h5 class="card-text" style={{color:'purple', textAlign:'center'}}>Still looking? Be sure to check out our pet toy store!</h5>
            
          </div>
        </div>
        </section>
      <section>
          <Carousel className='carousel-comp' style={{height:400, width:1000}}>
            <img src="https://images.unsplash.com/photo-1596278852720-141ba859bbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwd2l0aCUyMGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
            <img src="https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2017/02/AdobeStock_47165532.jpeg"/>
            <img src="https://www.cdc.gov/healthypets/images/pets/training-a-puppy.jpg?_=42452"/>
            <img src="https://www.cdc.gov/healthypets/images/pets/boy-playing-with-dog.jpg?_=42455"/>
            <img src="https://hsnaples.org/wp-content/uploads/bigstock-Dog-And-Owner-Playing-98272085.jpg"/>
            <img src="https://aivnu35kjr040adpuavu2ouf-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/two-dogs-playing-at-dog-park.jpg"/>
            <img src="https://zooawesome.com/wp-content/uploads/2021/06/Why-Do-Dogs-Obey-Humans-2.jpg"/>
          </Carousel> 
      </section>
        
  <div className = "card card-success" className ="container">
                    <div className="card-body" >
                        <div className="row">
    { 
                               this.state.toys.map(
                                   toy =>
                                    <div className="col-md-12 col-lg-6 col-xl-4">
                                      <div className="card mb-2" style={{}}>

                                        <p key = {toy.toyid}>
                                        <img src = {toy.imageurl} style={{width:335, height:250}}/>  
                                        <h1 style={{fontSize:22, textAlign:"center", marginTop:20, color:'purple'}}>{toy.toyname}</h1> 
                                        <h3 style={{fontSize:22, textAlign:"center", color:'red'}}>$ {toy.price}</h3>  
                                      
                                        
                                        <a style={{marginTop:30, marginLeft:125}} id = {toy.id} href = {"/routetopay/"+toy.id}  className="btn btn-success">Buy Now</a>
                                        {/*onClick={()=>this.buyToy(toy.toyid)}*/}
                                        </p>
                                      </div>
                                   
                                    </div>
                               )
                           
                           }

                          <section>
                            <h4 style={{color:'purple'}}>What are the best dog toys for chewers?</h4>
                            <br/>
                            <p class="card-text">Giving your dog a new toy is an exercise in natural selection. No matter how cute or pricey it is,
                              there’s some chance that your pup will ignore the new plaything or rapidly tear it to shreds, 
                              either way leaving it for dead. Here we present the survivors: the toys that our pups have 
                              verified to be good for hours, or even years, of play that’s engaging, ferocious, and cute.</p>
                            
                          </section>
                  </div>
                    </div>
                      <div class="card">
                        <div class="card-body">
                          <h5 style = {{color:'purple'}} class="card-title">Have you ever been to the pet store and gotten overwhelmed at all the options for dog toys?</h5>
                          <br/>
                            <p class="card-text">What’s the difference between them all?</p>
                            <p class="card-text">Does it matter which ones I get my puppy?</p>
                            <p class="card-text">If you’re a new puppy owner you might not realize that there are different types of toys, and they each serve a specific purpose for your pup.</p>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted">Watch Video</small></p>
                        </div>
                        <iframe style={{height:400}}
                              src="https://www.youtube.com/embed/Ht8ncX4Kq7M"
                              frameborder="20"
                              allow="autoplay; encrypted-media"
                              allowfullscreen
                              title="video"
                            />{" "}
                            
                            
                      </div>
                    </div>
                  <div>
              </div>
  </div>   
        
    )
  }
}
