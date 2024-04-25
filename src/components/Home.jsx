import React from 'react'
import pdf from '../assets/data.pdf';
import heroImg from '../constants/data/hero.json'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <div className='home_cover'>
          <div className='hero_data'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae sequi quae quis animi.</p>
              <a href={pdf} download="resume.pdf" className='btn btn-outline-warning'>Download resume</a>
              </div>
              <div className='hero_image'>
                <img src={`/assets/${heroImg.imgSrc}`} alt="hero image"/>
            </div>
          </div>
              
            </div>
              
          </div>

    </>
  )
}

export default Home