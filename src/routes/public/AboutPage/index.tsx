import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">
      {/* Title */}
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        What Do You Wonder About Us?
      </h2>

      {/* Text Container */}
      <div className="mx-auto mb-12 max-w-3xl text-center text-lg md:text-xl">
        <p>
          Small House is a band that plays music. We like Jazz, Prog, Blues,
          Funk, Metal, and Avant-Garde stuff. We want to play live very soon...
        </p>
      </div>

      {/* Profiles */}
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold">Jacob</h3>
          <div className="mx-auto mb-2 size-32">
            <img
              src="/images/alice.jpg" // Replace with actual image
              alt="Alice Johnson"
              className="size-full rounded-full border-4 border-white object-cover"
            />
          </div>
          <p className="text-sm">Amazing Bass, Synth</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold">Nelson</h3>
          <div className="mx-auto mb-2 size-32">
            <img
              src="/images/carol.jpg" // Replace with actual image
              alt="Carol White"
              className="size-full rounded-full border-4 border-white object-cover"
            />
          </div>
          <p className="text-sm">Guitar, Keys, Lead Songwriter</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold">Joseph</h3>
          <div className="mx-auto mb-2 size-32">
            <img
              src="/images/bob.jpg" // Replace with actual image
              alt="Bob Smith"
              className="size-full rounded-full border-4 border-white object-cover"
            />
          </div>
          <p className="text-sm">Production magic, Percussion</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
