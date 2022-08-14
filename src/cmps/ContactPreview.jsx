import React from 'react'

export function ContactPreview({ contact }) {
    const imgUrl = `https://robohash.org/${contact._id}`
    return (
        <>
            <img src={imgUrl} alt="" />
            <h2>{contact.name}</h2>
        </>
    )
}
