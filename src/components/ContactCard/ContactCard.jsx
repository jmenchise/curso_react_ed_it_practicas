import React from 'react'
import './contactCard.css'
import ContactLink from './ContactLink'

const ContactCard = ({name, career, description, contactLinks}) => {

    
    
    return (
        <div className="card" style={{width: '100%', fontSize: '30px'}}>
            <div className="card-body text-center" style={{paddingTop: '200px'}}>
                <h1 className="card-title mb-5">{name}</h1>
                <h3 className="card-subtitle mb-2 text-muted">{career}</h3>
                <p className="card-text my-5">{description}</p>
                {contactLinks.map(link => 
                    <ContactLink 
                        name={link.name}
                        adress={link.adress}
                    />
                )}
            </div>
        </div>
    )
}

export default ContactCard