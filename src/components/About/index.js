import './index.scss'
import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';
import LogoPhilSoc from '../../assets/images/philsoclogo.png'

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
                  About
                </h1>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h3>
            </div>
            <div className='text-zone-right'>
                <img src={ LogoPhilSoc } className='placeholder' alt='philsoc'/>
            </div>
          </div>
          <Loader type='line-scale-pulse-out'/>
          
    </>
  );
}

export default About