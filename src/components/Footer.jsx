import React from 'react'
import mylogo_white from '../assets/mylogo_white.png'
import mylogo_dark from '../assets/mylogo_dark.png'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'

const Footer = () => {
  return (
    <div className="mt-20">
    <div className="text-center">
        <img src={mylogo_dark} alt="" className="w-36 mx-auto mb-2 dark:hidden"/>
        <img src={mylogo_white} alt="" className="w-36 mx-auto mb-2 hidden dark:block"/>


        <div className="w-max flex items-center gap-2 mx-auto">
            <img src={mail_icon} alt="" className="w-6 dark:hidden"/>
            <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block"/>

            aidesigns004@gmail.com
        </div>
    </div>
    <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
    <p class="flex flex-wrap items-center justify-center text-center gap-2">
  © 2024
  <div
    class="badge-base LI-profile-badge flex flex-col items-center p-2 border border-gray-300 rounded-lg bg-gray-800 shadow-lg"
    data-locale="en_US"
    data-size="medium"
    data-theme="dark"
    data-type="VERTICAL"
    data-vanity="akinpeluibrahim"
    data-version="v1"
  >
    <a
      class="badge-base__link LI-simple-link text-white text-sm font-semibold hover:text-blue-400"
      href="https://ng.linkedin.com/in/akinpeluibrahim?trk=profile-badge"
    >
      Ibrahim Akinpelu
    </a>
  </div>
   All rights reserved.
</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target='_blank' href="https://github.com/Kinpelu">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/ibrahim-akinpelu-950394197/">LinkedIn</a></li>
            <li><a target='_blank' href="https://x.com/Officialibrah10">Twitter</a></li>
            <li><a target='_blank' href="https://wa.me/c/2348159202211">WhatsApp</a></li>
        </ul>
    </div>
 </div>
  )
}

export default Footer
