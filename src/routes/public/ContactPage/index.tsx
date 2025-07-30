import React from 'react'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">
      {/* Title */}
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Want to get in touch?
      </h2>

      {/* Text Container */}
      <div className="mx-auto mb-12 max-w-3xl text-center text-lg md:text-xl">
        <p>Contact us for bookings and business inquiries...</p>
      </div>
      <div className="mx-auto mb-12 max-w-3xl text-center text-xl font-bold underline md:text-xl">
        <a href="mailto:contact.our.casa@proton.me">Click to Email Us</a>
      </div>
    </div>
  )
}

export default ContactPage
