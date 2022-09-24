import './index.scss'
import React, {useRef, useState, useEffect} from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0aoqayt', 'template_ipuvqng', form.current, 'AiiE9VS0mchwmdPb7')
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, (error) => {
          alert('Failed to send the message, please try again')
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <>
 
          <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                  Contact
                </h1>
                <p>
                  <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </h3>
                </p>
                  <div className='contact-form'>
                  <form ref={form} onSubmit={sendEmail}>
                    <ul>
                      <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                      </li>
                      <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                      </li>
                      <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                      </li>
                      <li>
                        <textarea placeholder='Message' name='message' required type='text'>
                        </textarea>
                      </li>
                      <li>
                        <input type='submit' className='flat-button' value='SEND'>
                        </input>
                      </li>
                    </ul>
                  </form>
                  </div>
            </div>
            <div className='text-zone-right'>
                    <h2 className='placeholder'>
                      Find us here
                    </h2>
                    <iframe title='h' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.2224205864545!2d-2.2251276840176226!3d53.44661017489718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb22fbbda70c3%3A0xf039926674a8b4b1!2sManchester%20High%20School%20For%20Girls!5e0!3m2!1sen!2suk!4v1661616906555!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <Loader type='line-scale-pulse-out'/>
          
    </>
  );
}

export default Contact