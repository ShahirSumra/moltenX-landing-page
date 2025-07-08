import Image from "next/image";
import SiteContainer from "../components/sitecontainer";
import { Products, Metals } from "../static/config";

const AboutMoltenX = () => {

  return(
    <section className="pt-[100px] py-12">
      <SiteContainer className="flex flex-col item-center">
        <h2 className="text-title-2xl text-center">
          About <span className="text-yellow">MoltenX</span>
        </h2>
        <p className="mb-[68px] mt-3.5 text-description-xl text-description-gray max-w-[920px] text-center mx-auto">
          MoltenX transforms synthetic asset trading by harnessing the dynamic potential of precious and base metals within the flexibility of DeFi.  Effortlessly trade synthetic metal assets using crypto collateral on a secure, Web3-native platform, unlocking unmatched liquidity and opportunities in decentralized markets.
        </p>

        <div className="flex gap-8 justify-center relative w-fit mx-auto">
          <div className="absolute left-0 top-0 h-full bg-carousel-before w-[88px]" />
          <div className="absolute right-0 top-0 h-full bg-carousel-after w-[88px]" />
          {
            Metals.map((item, index) => (
              <div className="flex flex-col gap-4 items-center" key={item.name + index}>
                <div 
                  className="h-16 w-16 bg-[url('/images/metal-icon-bg.svg')] bg-cover flex items-center justify-center"
                >
                  {item.icon()}
                </div>
                <div className="bg-[linear-gradient(180deg,_#FFF_58.55%,_#8D3100_128.95%)] bg-clip-text text-transparent">
                  {item.name}
                </div>
              </div>
            ))
          }
        </div>

        <div className="border-b border-dashed border-dashed-border w-full my-18" />

        <div className="flex justify-between gap-6">
          {
            Products.map((item, index) => (
              <div className="max-w-[258px] flex flex-col items-center" key={item.label + index}>
                <Image 
                  src={item.icon}
                  height={64}
                  width={64}
                  className="h-16 w-16"
                />

                <div className="text-product-label-2xl text-yellow mb-2.5 mt-10">{item.label}</div>
                <div className="text-description-gray text-product-description-2xl text-center">{item.description}</div>
              </div>
            ))
          }
        </div>
      </SiteContainer>
    </section>
  )
}
export default AboutMoltenX;