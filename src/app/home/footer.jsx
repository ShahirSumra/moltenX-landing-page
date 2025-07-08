import Image from "next/image";
import SiteContainer from "../components/sitecontainer";
import Link from "next/link";
import { socials } from "../static/config";

const Footer = () => {

  return(
    <footer className="border-t border-dashed border-dashed-border pt-[112px] pb-8">
      <SiteContainer>
        <div className="flex items-center w-full justify-between">
          <Image 
            src="/images/logo.png"
            height={26}
            width={160}
            className="h-[26px] w-[160px]"
          />

          <div className="flex items-center gap-3">
            {
              socials.map((item, index) => (
                <Link 
                  href={item.cta} 
                  key={item.icon + index} 
                  target="_blank" 
                  className="h-12 w-12 bg-[url('/images/social-box.png')] bg-cover bg-center flex items-center justify-center social-link"
                >
                  {item.svgIcon()}
                </Link>
              ))
            }
          </div>
        </div>

        <div className="text-copyright-gray text-copyright-2xl mt-[76px] text-center"> 
          Copyright © 2025 MoltenX Inc. All rights reserved.
        </div>
      </SiteContainer>
    </footer>
  )
}
export default Footer;