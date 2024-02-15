import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<>
<footer>
        <div className="matrimonial_site_container">
            <div className="site_card card-1 footer_card">
                <div className="site_heading">
                    Need Help?
                    <span className="horizontal_line footer_hr_line"/>
                </div>
                <div className="site_lang">
                    
                    <p className="footer_content">
                        <Link href="#">    Member Login </Link> <br/>
                        <Link href="#">     Sign Up </Link><br/>
                        <Link href="#">    How to Use Shaadi.com </Link><br/>
                        <Link href="#">     Premium Memberships </Link><br/>
                        <Link href="#">    Customer Support </Link><br/>
                        <Link href="#">    Member Login </Link><br/>
                        <Link href="#">    Site Map</Link><br/>
                    </p>
                </div>
            </div>
            
            <div className="site_card card-2 footer_card">
                <div className="site_heading">
                    Company
                    <span className="horizontal_line footer_hr_line"/>
                </div>
                <div className="client-religion">
                    
                    <p className="footer_content">
                        <Link href="#">    About Us </Link><br/>
                        <Link href="#">     Shaadi Blog </Link><br/>
                        <Link href="#">   Careers </Link><br/>
                        <Link href="#">    Awards & Recognition</Link><br/>
                        <Link href="#">    Cov-Aid </Link><br/>
                        <Link href="#">    Contact Us</Link><br/>
                      
                    </p>
                           
                            
                            
                           
                           
                            
                    {/* <!-- <span> <a href="#" className="read-more">Read More </a></span> -->/ */}
                </div>
            </div>

            <div className="site_card card-3 footer_card footer_card-3">
                <div className="site_heading">
                    Privacy & You
                    <span className="horizontal_line footer_hr_line"/>
                </div>
                <div className="site_community">
                  
                    <p className="footer_content">
                        <Link href="#">      Terms of Use </Link><br/>
                        <Link href="#">     Privacy Policy </Link><br/>
                        <Link href="#">  Be Safe Online </Link><br/>
                        <Link href="#">     Report Misuse</Link><br/>
                     

                     
                     
                       
                        
                    </p>
                </div>
            </div>

            <div className="site_card card-4 footer_card">
                <div className="site_heading">
                    More
                    <span className="horizontal_line footer_hr_line"/>
                </div>
                <div className="site_community">
                  
                    <p className="footer_content">
                        <Link href="#">        VIP Shaadi</Link><br/>
                        <Link href="#">       Select Shaadi </Link><br/>
                        <Link href="#">   Sangam</Link><br/>
                        <Link href="#">      Shaadi Centres</Link><br/>
                        <Link href="#">     Shaadi Live</Link><br/>
                     
                     
                 
                     
                       
                        
                    </p>
                </div>
            </div>

          
        </div>
    </footer>

    <section className="cta footer_cta">
        <div className="cta_footer">
            &copy; 1996-2023 Shaadi.com, The World's Leading Matchmaking Service™
        </div>
        <div className="cta_footer">
            Passionately created by People Group ➤
        </div>
    </section>

</>
    )
}

export default Footer