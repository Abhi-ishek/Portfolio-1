import React from 'react'
import { CONTACT } from '../constants'
export default function Contact() {
  return (
    <div className=' border-b border-neutral-800 pb-20'>
      <h2 className=' text-center my-10 text-4xl '>  Contact</h2>
      <div className=' text-center tracking-tighter '>
        <p className=' my-4' > {CONTACT.address} </p>
        <p className=' my-4'>{CONTACT.phoneNo} </p>
        <p className=' my-4'>{CONTACT.email} </p>
      </div>
    </div>
  )
}
