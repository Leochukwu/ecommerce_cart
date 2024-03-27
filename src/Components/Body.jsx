import React from 'react'

const Body = () => {
  return (
    <div className='body'>
        <div className="section1">
            <div className="image1">
                <img src="../images/image-product-1.jpg" alt="" />
            </div>
            <div className="image2">
            <img src="../images/image-product-1-thumbnail.jpg" alt="" />
            <img src="../images/image-product-2-thumbnail.jpg" alt="" />
            <img src="../images/image-product-3-thumbnail.jpg" alt="" />
            <img src="../images/image-product-4-thumbnail.jpg" alt="" />
            </div>
        </div>
        <div className="section2">
            <div className="parta">
            <p className='title'>Sneaker Company </p>
            <h1>Fall Limited Edition <br />Sneakers </h1>
            <p className='title2'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
            <h3>$125.00 <span>50% </span></h3>
            <h5>$250.00</h5> 
            <div className="cartProperties">
            <button className='btn1'> 
            <p>-</p>
            <p>3</p>
            <p>+</p>
            </button>
              <button className='btn2'>
              <img src="../images/icon-cart.svg" alt="" />
              Add to cart</button>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Body
