import React from 'react'
import Find from './Find'
import Success from './Success'
import Member from './Member'
import Footer from './Footer'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
        <header>
        <nav>
            <div className="logo"></div>
            <div className="nav_link">
                <ul>
                    <li>
                       <Link to="login"> 
                        
                         Login 
                        <img src="icon/expand_more.png" className="expand" alt=""/>
                    
                    </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <img src="icon/support_agent.png" className="agent" alt=""/>
                        Help 
                        <img src="icon/expand_more.png" alt=""/>
                    </Link></li>
                </ul>
            </div>
        </nav>
{/* <div className="row"> */}
        <div className="main_heading">
        <h1 data-testid="homepage_headline" class="common_headline__3GyDZ ">The World's No.1 Matchmaking Service</h1>
           <div class="common_subheading__18uit">Search by City, Profession &amp; Community</div>
        </div>
        
        <div className="form_section PreferenceForm_formWrapper__25uHC">
            <form action="#">
                {/* <!-- gender --> */}
                <div className="gender">
                    <span className="opt_nam">I'm looking for a
                        <select name="gender" id="optin_gender">
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                        </select>
                    </span>
                </div>
                {/* <!-- age --> */}
                <div className="age">
                    <span className="opt_nam">aged

                        <div className="age_option">

                            
                            <select name="age" id="optin_age">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20" selected >20</option>
                                <option value="21">21</option>
                            </select>
                            
                            <span className="txt">to</span>
                            
                            <select name="age" id="optin_age">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25" selected>25</option>
                                <option value="26">26</option>
                            </select>
                        </div>
                            
                    </span>
                </div>
                {/* <!-- religion --> */}
                <div className="religion">
                    <span className="opt_nam opt_nam_religion">of religion
                        <select name="religion" id="optin_religion">
                            <option value="Select">Select</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Chrition">Chrition</option>
                            <option value="Shik">Shik</option>
                            <option value="Parsi">Parsi</option>
                        </select>
                    </span>
                </div>
                {/* <!-- lanuage --> */}
                <div className="language">
                    <span className="opt_nam">and mother tongue

                        <div className="optin_lang_size">

                            <select name="lanuage" id="optin_language">
                                <option value="Select">Select</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Telgue">Telgue</option>
                                <option value="Tamil">Tamil</option>
                            </select>
                        </div>
                    </span>
                </div>
                {/* <!-- button --> */}

                <div className="button">
                    Let's Begin
                </div>
                           
                            
            </form>
            </div>
        {/* </div> */}

    </header>
    <Find/>
    <Success/>
    <Member/>
    <Footer/>
    </>
  )
}

export default Home