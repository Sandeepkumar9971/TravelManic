import React from 'react'
import './Aboutus.css';

const Aboutus = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", marginBottom: '25px' }}>
        <span><b style={{ color: '#d19411' }}>A</b>bout<b style={{ color: '#d19411' }}>U</b>s</span>
      </h3>

      <div className='Maindiv'>

        <div className='AboutBox' style={{ height: 'auto' }}>
          <div style={{
            width:'90%', margin:'auto', height:'100%'
          }}>
            <img src='./Images/company.jpg' height="100%" width="100%"></img>
          </div>
        </div>

        <div className='AboutBox'  >
          <div style={{
            width: '80%', margin: 'auto', background: '#dbe5e9',
            padding: '20px 20px'
          }}>
            <span >

              Welcome to Travel Manic, your gateway to unforgettable travel experiences. Established in 1989, we take pride in curating exceptional journeys that cater to the wanderlust in you. With a passion for exploration and a commitment to excellence, we have been crafting seamless travel experiences for our customers. Our team of seasoned experts meticulously plans each itinerary, ensuring that every detail is thoughtfully considered. Whether you're dreaming of relaxing on pristine beaches, exploring vibrant cities, or embarking on thrilling adventures, Travel Manic is here to turn your travel aspirations into reality. Join us on a journey of discovery, where every destination is a story waiting to be written.
              <br />
              Feel free to customize the information according to your company's specifics, such as the establishment year, unique selling points, or any particular travel themes you specialize in.
            </span>

          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus