import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGlassdoor } from 'react-icons/si';
import dastore from './dastore.png'
import ggplay from './ggplay.png'
import './footer.css';

const footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className='row special' id='list'>
                    <div className='col'>                
                        <p>Follow us on</p>                        
                            <ul id='horizontal-list' className='list-unstyled'>
                                <li ><AiFillFacebook /></li>
                                <li ><AiFillYoutube /></li>
                                <li ><AiFillInstagram /></li> 
                                <li ><AiOutlineTwitter /></li>
                                <li ><AiFillLinkedin /></li>
                                <li ><SiGlassdoor /></li>                         
                            </ul>                     
                    </div>
                    <div className='col imgspcl'>
                            <ul id='horizontal-list' className='list-unstyled' >
                                    <li ><img src={dastore} alt="Apple Store" className='define' />
                                    <img src={ggplay} alt="Google Store" className='define' />
                                </li>
                             </ul>
                    </div>                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                    <ul id='horizontal-list-two'>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Parent's Guide</li>
                        <li>Safe and Fair Play Policy</li>
                    </ul>
                    </p>
                </div>
                <div className="row">
                    <p className='ending'>Supercell Oy</p>
                    <p className='ending'>Itämerenkatu 11-13</p>
                    <p className='ending'>00180 Helsinki</p>
                    <p className='ending'>Finland</p>
                </div>
            </div>            
        </div>
    )
}


export default footer