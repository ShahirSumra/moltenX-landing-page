import Image from "next/image";
import SiteContainer from "../components/sitecontainer";

const TokenEconomy = () => {

  return(
    <section className="py-[50px] xl:py-[140px]">
      <SiteContainer className="flex flex-col item-center">
        <h2 className="text-title xl:text-title-xl 2xl:text-title-2xl 3xl:text-title-3xl text-center">
          <span className="text-green">$MOLT</span> <span className="bg-[linear-gradient(180deg,_#FFF_58.55%,_#2BF5AB_128.95%)] bg-clip-text text-transparent">Token Economy</span>
        </h2>
        <p className="mb-[68px] mt-3.5 text-description xl:text-description-xl 2xl:text-description-2xl 3xl:text-description-3xl text-description-gray max-w-[618px] text-center mx-auto">
          $MOLT’s community friendly tokenomics exclude insiders, VCs, and whales, ensuring community-driven control and equitable opportunities for all.
        </p>

        <Image 
          src="/images/economoy-diagram.png"
          width={1136}
          height={626}
          className="md:flex hidden w-full md:max-w-[992px] 2xl:max-w-[1136px] 3xl:max-w-[1456px] mx-auto -left-[50%]"
          alt="MoltenX Economy"
        />


      </SiteContainer>
      <div className="w-full overflow-x-auto min-w-0">
        <div className="min-w-[900px] mx-auto px-4 left-[50%]">
          <Image 
            src="/images/economoy-diagram.png"
            width={1136}
            height={626}
            className="md:hidden w-full max-w-none"
            alt="Economy Diagram"
          />
        </div>
      </div>

      <div className="px-4 mt-[66px] md:hidden">
        <button className="swipe-button mx-auto">
          <span className="arrow-left">
              <svg viewBox="0 0 80 18">
                  <path d="M10 9 L70 9 M10 9 L18 3 M10 9 L18 15" stroke="white" strokeWidth="0.5" fill="none"/>
              </svg>
          </span>
          <span>Swipe to explore</span>
          <span className="arrow-right">
              <svg viewBox="0 0 80 18">
                  <path d="M10 9 L70 9 M70 9 L62 3 M70 9 L62 15" stroke="white" strokeWidth="0.5" fill="none"/>
              </svg>
          </span>
        </button>
      </div>
    </section>
  )
}
export default TokenEconomy;