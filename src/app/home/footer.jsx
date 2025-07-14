import Image from "next/image";
import SiteContainer from "../components/sitecontainer";
import Link from "next/link";
import { socials } from "../static/config";

const Footer = () => {

  return(
    <footer className="border-t border-dashed border-dashed-border pt-[80px] md:pt-[112px] pb-8 3xl:pb-10">
      <SiteContainer>
        <div className="flex md:flex-row flex-col gap-8 items-center w-full justify-between">
          <Image 
            src="/images/logo.png"
            height={26}
            width={160}
            className="h-[26px] w-[160px] 3xl:h-8 3xl:w-[196px]"
            alt="MoltenX"
          />

          <div className="flex items-center gap-3">
            {
              socials.map((item, index) => (
                <Link 
                  href={item.cta} 
                  key={item.icon + index} 
                  target="_blank" 
                  className="h-10 w-10 md:h-12 md:w-12 3xl:h-14 3xl:w-14 bg-[url('/images/social-box.png')] bg-cover bg-center flex items-center justify-center social-link"
                >
                  {item.svgIcon()}
                </Link>
              ))
            }
          </div>
        </div>

        <div className="text-copyright-gray text-copyright 2xl:text-copyright-2xl 3xl:text-copyright-3xl mt-[76px] 3xl:mt-[96px] text-center"> 
          Copyright © 2025 MoltenX Inc. All rights reserved.
        </div>
      </SiteContainer>
    </footer>
  )
}
export default Footer;