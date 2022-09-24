import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoPhilSoc from '../../assets/images/philsoclogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBullhorn, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => 
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoPhilSoc} alt ='logo'/> 
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active'className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='next-link' to='/next'>
                <FontAwesomeIcon icon={faBullhorn} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/the-manchester-philsoc/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/philsoc_2021/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='mailto:themanchesterphilsoc@gmail.com'>
                <FontAwesomeIcon icon={faAt} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/ManchesterPhil3'>
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                </a>
            </li>

        </ul>
    </div>
export default Sidebar