import React from 'react'
import '../index.css';


const WelcomeNote = () => {
    return (
        <div className="welcome_div">
           <div className="design_div">
               <div className="title_div">
                   <h2>Welcome To My Site</h2>
                   <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
               </div>
               <div className="knowledge">
                    <div className="progress">
                        <h4>Design</h4>
                        <div className="progress_bar">
                            <div className="progress_display"></div>
                        </div>
                        
                    </div>
                    <div className="progress">
                        <h4>Marketing</h4>
                        <div className="progress_bar">

                        </div>
                        
                    </div>
                    <div className="progress">
                        <h4>Security</h4>
                        <div className="progress_bar">

                        </div>
                        
                    </div>
                    <div className="progress">
                        <h4>SEO</h4>
                        <div className="progress_bar">

                        </div>
                        
                    </div>
                    <div className="progress">
                        <h4>Design</h4>
                        <div className="progress_bar">

                        </div>
                        
                    </div>
                    <div className="progress">
                        <h4>Design</h4>
                        <div className="progress_bar">

                        </div>
                        
                    </div>
               </div>
           </div>
        </div>
    )
}

export default WelcomeNote
