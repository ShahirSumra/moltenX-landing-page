import Image from "next/image";
import SiteContainer from "../components/sitecontainer";

const TokenEconomy = () => {

  return(
    <section className="py-[50px]">
      <SiteContainer className="flex flex-col item-center">
        <h2 className="text-title-2xl text-center">
          <span className="text-yellow">$MOLT</span> Token Economy
        </h2>
        <p className="mb-[68px] mt-3.5 text-description-xl text-description-gray max-w-[618px] text-center mx-auto">
          $MOLT’s community friendly tokenomics exclude insiders, VCs, and whales, ensuring community-driven control and equitable opportunities for all.
        </p>

        <Image 
          src="/images/economoy-diagram.png"
          width={1136}
          height={626}
          className="w-full max-w-[1136px] mx-auto"
        />
      </SiteContainer>
    </section>
  )
}
export default TokenEconomy;