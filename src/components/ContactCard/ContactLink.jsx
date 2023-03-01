import React from 'react'

const ContactLink = ({name, adress}) => {
    return (
        <a 
            target={'_blank'} 
            href={adress} 
            className="card-link"
        >
            {name}
        </a>
    )
}

export default ContactLink