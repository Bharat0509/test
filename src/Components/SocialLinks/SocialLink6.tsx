import React from 'react'
import { social4 } from "../../data/social4";

const SocialLink6 = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
           {social4.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
    </div>
  )
}

export default SocialLink6