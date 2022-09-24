import './index.scss'
import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';
import physics from '../../assets/images/physics.webp'

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>

           
          <div className="container about-page">
            <div className='text-zone'>
                <h1>
                  Next Speaker
                </h1>
                <h2>
                  Who: Damian Musk <br/>
                  About: Theory of Everything<br/>
                  Where: Manchester High School for Girls<br/>
                  When: 9 September 4:15-5:15<br/>
                </h2>
            </div>
            <div className='logo-container'>
              <img className='physics' src={physics} alt='goaway'/>
            </div>
          </div>
          <Loader type='line-scale-pulse-out'/>
          
    </>
  );
}

export default About