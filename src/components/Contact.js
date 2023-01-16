import React from "react";
import "../styles/Contact.css";

function Contact( { loc_id, title, contact } ) {

    return (
        <div id={loc_id} className='contact_background'>
            <div className="contact_area">
                <div className="contact_title"> {title} </div>
                <div className="contact_main">
                    {
                        contact.map((item, index) => {
                            return (
                                <div className="contact_item" key={index}>
                                    <img src={item.icon_url} 
                                        className="contact_item_icon" 
                                        alt={item.name}
                                    />
                                    <a href={item.link} target='_blank' rel="noopener noreferrer">{ item.content }</a>
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