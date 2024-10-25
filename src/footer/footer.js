import React, { Component } from 'react'


class Footer extends Component {
    render(){
       return(
        <div className='footermain'>                       
            <footer id="footer">            
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Bidsinfoglobal</h3>
                            <p>
                            A108 Adam Street <br/>
                            New York, NY 535022<br/>
                            United States <br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Advanced Search</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Login / Register</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms and condition </a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Tenders</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Project</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Contract Awards</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Grants </a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Subscribe</a></li>
                            {/* <li><i className="bx bx-chevron-right"></i> <a href="#">E - Procurement</a></li> */}
                            

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-whatsapp"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>

                <div className="container py-3">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Bidsinfoglobal</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>        
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
       );
    }
}
export default Footer;