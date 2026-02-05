import React, { useEffect, useState } from 'react'
import '../App.css'
import '../index.css'
import val from '../assets/slazzer-preview-gfu67.png'
import download from '../assets/Download.mp4'

function Val() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const noButton = document.getElementById('no');
    
    const moveButton = () => {
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      
      noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };
    
    noButton.addEventListener('mouseenter', moveButton);
    noButton.addEventListener('click', (e) => {
      e.preventDefault();
      moveButton();
    });
    
    return () => {
      noButton.removeEventListener('mouseenter', moveButton);
      noButton.removeEventListener('click', moveButton);
    };
  }, []);

  const handleYesClick = () => {
    setShowVideo(true);
  };

  return (
    <div className='container'>
      <div className='box-card'>

        <img style={{width: '90%', maxWidth: '300px', height: 'auto'}} src={val} alt="Valentine"/>

        <h1>Nenye will you be my valentine?</h1>

        {!showVideo ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%'}}>

            <div style={{display: 'flex', justifyContent: 'center', gap: '0.3rem', flexWrap: 'wrap'}}>

              <button id='yes' onClick={handleYesClick}>Yes</button>

              <button id='no'>No</button>
            </div>
            <p id='shy' style={{marginTop: '2rem'}}>"No" seems a bit shy 😈</p>
          </div>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
            <div style={{position: 'relative', width: '100%', maxWidth: '550px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                   
                    borderRadius: '50%',
                    animation: `confetti ${2 + Math.random() * 1}s ease-in infinite`,
                    left: `${Math.random() * 100}%`,
                    top: `-10px`,
                  }}
                />
              ))}
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', margin: '0', animation: 'bounce 1s infinite', position: 'relative', zIndex: 10}}>
                🎉 Yay! 🎉
              </h2>
            </div>
            <video style={{width: '100%', maxWidth: '550px', height: '150px', borderRadius: '10px', marginBottom: '1rem'}} autoPlay muted loop>
              <source src={download} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 style={{fontSize: '2rem', color: '#dd0b0b', fontWeight: 'bold', animation: 'pulse 1.5s infinite'}}>💕 I Love You My Princess 💕</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Val