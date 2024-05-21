import React from 'react'

import "../HomePage/style.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



export const  HomePage = () => {
  return (
    <div className='container'> 
    
    <section className='carousel'>
    
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="" className='img-slide'/>
        <Carousel.Caption>
          <div className="txt-slide"> 
          <h1 > Wood Cloth Sofa</h1>
          <p >Lorem ipsum dolor sit amet consectetur.</p></div>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="" className='img-slide'/>
        <Carousel.Caption>
        <div className="txt-slide"> 
          <h1 > Wood Cloth Sofa</h1>
          <p >Lorem ipsum dolor sit amet consectetur.</p></div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    <button className='btn-slide'>BUY NOW</button>
  
    </section>
 <div className="txt-categ"><h1>Featured Category</h1></div> 
    <section className='product-category'>
    
    <div className="1-categ">
      <div className="first-prod">
        <p>Premium Quality</p>
        <h3>Latest foam Sofa</h3>
        <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" alt="" />
      </div>
      <div className="second-prod">
        <p>Premium Quality</p>
        <h3>Latest foam Sofa</h3>
        <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" alt="" />
      </div></div>
        <div className="2-categ">  <div className="third-prod">
          <p>Premium Quality</p>
          <h3>Latest foam Sofa</h3>
          <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png " alt="" className='third-img' />
        </div>
        <div className="fourth-prod">
          <p>Premium Quality</p>
          <h3>Latest foam Sofa</h3>
          <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png" alt="" />
        </div></div>
    
       </section>

       {/* <section className='login'>
        <img src="https://preview.colorlib.com/theme/aranoz/img/subscribe_area.png" alt="" className='login-img' />
       </section>
         */}

      
    </div>
  )
}
