import Link from 'next/link';
import React from 'react';

import { Shantell_Sans } from "next/font/google";
const shantell = Shantell_Sans({ subsets: ["latin"] });
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`mt-2 pt-2  border-t w-full relative items-center border-white/10 flex bg-background/80 text-pretty text-primary justify-center transition-all duration-300   ${shantell.className}`}>
      <p className="text-sm text-center md:text-left">
        © {currentYear} <span className='underline decoration-dotted decoration-primary'>
          <Link href={"https://ygntech.vercel.app"}>
            <span className='colgra  font-extrabold animate-pulse '>YGN</span>
          </Link>
        </span>. All rights reserved.
      </p>
     
    </div>
  );
}

export default Footer;