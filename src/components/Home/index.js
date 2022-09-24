import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './index.scss'
import LogoPhilSoc from '../../assets/images/philsoclogo.png'

const Home = () => {

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
         <h1> THE MANCHESTER PHIL SOC</h1>
          <h2>manchester inter-school natural philosophy society</h2>
          <Link to="/contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
        <div className='logo-container'>
            <img className='svg' src={LogoPhilSoc} alt='urmom'/>
        </div>
      </div>
      <Loader type='line-scale-pulse-out'/>
    </>
  )
}

export default Home