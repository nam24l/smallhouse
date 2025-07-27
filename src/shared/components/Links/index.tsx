import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpotify,
  faSoundcloud,
  faYoutube,
  faApple,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

type LinkItem = {
  name: string
  url: string
  icon: React.ReactNode
}

const socialLinks: LinkItem[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/smallhousetheband/',
    icon: (
      <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-500" />
    )
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@smallhousetheband',
    icon: <FontAwesomeIcon icon={faYoutube} className="text-xl text-red-500" />
  }
]

const streamLinks: LinkItem[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1RKrHVr5PNc47TDbDmiJzV?si=9PCQADrHR1OdlS0Kug7D-w',
    icon: (
      <FontAwesomeIcon icon={faSpotify} className="text-xl text-green-700" />
    )
  },
  {
    name: 'Soundcloud',
    url: 'https://on.soundcloud.com/EseZXqFqhj0oN7YPos',
    icon: (
      <FontAwesomeIcon icon={faSoundcloud} className="text-black-700 text-xl" />
    )
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCjOo46AADHTB-UBhd-M_eFA?si=15kBHKvtLlDqgZDG',
    icon: <FontAwesomeIcon icon={faYoutube} className="text-xl text-red-500" />
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/small-house/1810812714',
    icon: <FontAwesomeIcon icon={faApple} className="text-black-700 text-xl" />
  }
]

const Links: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-6xl p-4 text-center text-gray-100">
      {/* Text Above Social Links */}
      <h2 className="mb-2 text-lg font-semibold sm:text-xl md:text-2xl">
        Check out our Insta and YouTube Channel!
      </h2>

      {/* Social Links - Always Two Columns Side-by-Side */}
      <div className="mb-4 grid grid-cols-2 place-items-center gap-2 sm:gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-full min-w-32 max-w-40 items-center justify-center gap-2 rounded-xl bg-white/60 shadow-md transition-transform hover:scale-105 hover:bg-white sm:h-20 sm:min-w-48 sm:max-w-56 sm:gap-4"
          >
            <div className="text-lg sm:text-2xl">{link.icon}</div>
            <span className="text-sm font-medium text-gray-900 sm:text-lg">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Text Above Stream Links */}
      <h2 className="mb-2 text-lg font-semibold sm:text-xl md:text-2xl">
        Our debut album <em>What Do You Wonder?</em> is streaming now.
      </h2>

      {/* Stream Links - Four Column Grid */}
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {streamLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-20 w-full min-w-48 max-w-56 items-center justify-center gap-4 rounded-xl bg-white/60 shadow-md transition-transform hover:scale-105 hover:bg-white"
          >
            <div className="text-2xl">{link.icon}</div>
            <span className="text-lg font-medium text-gray-900">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Links
