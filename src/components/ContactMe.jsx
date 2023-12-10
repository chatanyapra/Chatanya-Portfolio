import React from 'react'
import HologramEffect from './HologramEffect'

export default function ContactMe() {
  return (
    <div className='pt-10 px-0 pb-20 lg:px-24 flex flex-col-reverse justify-center bg-gray-900 lg:p-32 lg:flex-row lg:justify-between'>
      <div className="form-container m-auto lg:m-0">
        <form className="form">
          <h2 className='text-3xl'>Get in touch</h2>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input required="" name="name" id="name" type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required="" name="email" id="email" type="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Leave a message</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
      <HologramEffect/>
    </div>
  )
}
