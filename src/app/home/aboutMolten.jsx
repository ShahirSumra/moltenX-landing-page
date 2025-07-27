import Image from "next/image";
import SiteContainer from "../components/sitecontainer";
import { Products, Metals } from "../static/config";
import Marquee from "react-fast-marquee";

const AboutMoltenX = () => {

  return(
    <section className="pt-[100px] pb-[50px] 3xl:pt-[140px] 3xl:pb-[70px]">
      <SiteContainer className="flex flex-col item-center">
        <h2 className="text-title xl:text-title-xl 2xl:text-title-2xl 3xl:text-title-3xl text-center">
          <span className="bg-[linear-gradient(180deg,_#FFF_58.55%,_#2BF5AB_128.95%)] bg-clip-text text-transparent">About</span> <span className="text-green">MoltenX</span>
        </h2>
        <p className="mb-11 xl:mb-[68px] mt-3.5 text-description xl:text-description-xl 2xl:text-description-2xl 3xl:text-description-3xl text-description-gray xl:max-w-[920px] 3xl:max-w-[1080px] text-center mx-auto">
          MoltenX transforms synthetic asset trading by harnessing the dynamic potential of precious and base metals within the flexibility of DeFi.  Effortlessly trade synthetic metal assets using crypto collateral on a secure, Web3-native platform, unlocking unmatched liquidity and opportunities in decentralized markets.
        </p>

        <div className="flex gap-8 justify-center relative max-w-full xl:max-w-[520px] 3xl:max-w-[600px] mx-auto">
          <div className="absolute left-0 top-0 h-full bg-carousel-before w-8 xl:w-[70px] 2xl:w-[88px] z-10" />
          <div className="absolute right-0 top-0 h-full bg-carousel-after w-8 xl:w-[70px] 2xl:w-[88px] z-10" />
          <Marquee>
            {
              Metals.map((item, index) => (
                <div className="flex flex-col gap-4 items-center mr-8" key={item.name + index}>
                  <div 
                    className="h-12 w-12 xl:h-16 xl:w-16 3xl:h-20 3xl:w-20 bg-[url('/images/metal-icon-bg.svg')] bg-cover flex items-center justify-center"
                  >
                    {item.icon()}
                  </div>
                  <div className="bg-[linear-gradient(180deg,_#FFF_58.55%,_#8D3100_128.95%)] bg-clip-text text-transparent text-metals xl:text-metals 2xl:text-metals-2xl 3xl:text-metals-3xl">
                    {item.name}
                  </div>
                </div>
              ))
            }
          </Marquee>
        </div>

        <div className="border-b border-dashed border-dashed-border w-full xl:my-18 my-14" />

        <div className="flex justify-between gap-12 md:gap-6 md:flex-row flex-col items-center md:items-start">
          {
            Products.map((item, index) => (
              <div className="max-w-[220px] xl:max-w-[240px] 2xl:max-w-[258px] 3xl:max-w-[300px] flex flex-col items-center" key={item.label + index}>
                <Image 
                  src={item.icon}
                  height={64}
                  width={64}
                  className="h-12 w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20"
                  alt={item.label}
                />

                <div className="text-product-label 2xl:text-product-label-2xl 3xl:text-product-label-3xl text-green mb-2.5 mt-10">{item.label}</div>
                <div className="text-description-gray text-product-description 2xl:text-product-description-2xl 3xl:text-product-description-3xl text-center">{item.description}</div>
              </div>
            ))
          }
        </div>
      </SiteContainer>
    </section>
  )
}
export default AboutMoltenX;