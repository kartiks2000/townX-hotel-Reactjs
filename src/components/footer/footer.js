import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icon/icon';
import '../footer/footer.css';

const Footer = () => {

    return(
        <div className="footer">
            <h1 className="des-name">Designed and Developed by <span className="footer-myname"> Kartik Saxena</span>.</h1>
            <h1 className="text-used">Developed using Reactjs.</h1>
            <div className="social-icon2">
                <a target="blank" href="https://github.com/kartiks2000"><FontAwesomeIcon className="my-icon2" icon={['fab', 'github']} size="2x" /></a>
                <a target="blank" href="https://www.linkedin.com/in/kartik-saxena-aa3378168/"><FontAwesomeIcon className="my-icon2" icon={['fab', 'linkedin']} size="2x" /></a>                        
                <a target="blank" href="https://www.instagram.com/kartiksaxena2000/?hl=en"><FontAwesomeIcon className="my-icon2" icon={['fab', 'instagram']} size="2x"/></a> 
                <a target="blank" href="https://stackoverflow.com/users/13947801/kartik-saxena"><FontAwesomeIcon className="my-icon2" icon={['fab', 'stack-overflow']} size="2x"/></a>
            </div>
            <h2 className="rightsres">All rights reserver&copy; 2020</h2>
        </div>
    );
}

export default Footer;