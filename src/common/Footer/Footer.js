import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <>
        <div className='container'>
            <div className="row footer-main">
                <div className="col-md-3 col-6">
                    <h4 className='list-title'>Company</h4>
                    <ul className='list-item'>
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Facility</Link></li>
                        <li><Link to="">Affliates</Link></li>
                        <li><Link to="">Blog</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h4 className='list-title'>Services</h4>
                    <ul className='list-item'>
                        <li><Link to="">Php</Link></li>
                        <li><Link to="">Java</Link></li>
                        <li><Link to=""> Machine Learning</Link></li>
                        <li><Link to="">React</Link></li>
                        <li><Link to="">Mysql</Link></li>
                        <li><Link to="">Javascript</Link></li>
                        <li><Link to="">Ruby</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h4 className='list-title'>Help</h4>
                    <ul className='list-item'>
                        <li><Link to="">Client Service</Link></li>
                        <li><Link to="">My Account</Link></li>
                        <li><Link to="">Find a Store</Link></li>
                        <li><Link to="">Legal & Privacy</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to="">Gift Card</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h4 className='list-title'>Contact Info</h4>
                    <ul className='list-item'>
                        <li><Link to="">+880 1234567873</Link></li>
                        <li><Link to="">Mon To Sun: 10:00 AM To 6:00 PM</Link></li>
                        <li><Link to="">help@gmail.com</Link></li>
                        <li><Link to="">48 West Temple Drive <br />
                        Dhanmondi 32, Dhaka
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className="container-full text-center footer-bottom text-light py-5">
         <div className="container footer">
           <div className="row">
             <div className="col-md-6 col-12">
               <div className="list d-flex">
                 <h3 className="text-warning fw-bold footer-span">Human Right & Advocacy</h3>
                 <h3>Privacy </h3>
                 <h3 >Cookie </h3>
                 <h3 >Term of Use</h3>
               </div>
             </div>
             <div className="col-md-6 col-12">
               <h3 className="">
                 Copyright © 2022  Ed-tech, <span className="footer-span">All rights reserved</span>.
               </h3>
             </div>
           </div>
         </div>
       </div>
       </>
    );
};

export default Footer;