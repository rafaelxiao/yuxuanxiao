import React from "react";
import "../styles/Contact.css";

function Contact( { loc_id, title, contact } ) {

    return (
        <div id={loc_id} className='contact_background'>
            <div className="contact_area">
                <div className="contact_title"> {title} </div>
                <div className="contact_main">
                    {
                        contact.map((item) => {
                            return (
                                <div className="contact_item">
                                    <img src={item.icon_url} 
                                        className="contact_item_icon" 
                                        alt={item.name}
                                    />
                                    { item.content }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;