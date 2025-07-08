import Button from "../components/button";
import SiteContainer from "../components/sitecontainer";

const Subscribe = () => {

  return(
    <section className="pt-[50px] pb-[100px]">
      <SiteContainer className="flex flex-col items-center">
        <svg width="100%" height="150" className="h-[140px]" viewBox="0 0 1500 150" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="50%" class="stroked-text">Mint, Swap, Earn Yield</text>
        </svg>

        <div className="text-subscribe-2xl mt-[60px] mb-2.5 bg-[linear-gradient(180deg,_#FFF_58.55%,_#FDF83A_128.95%)] bg-clip-text text-transparent">
          Subscribe to our newsletter
        </div>

        <div className="flex gap-2">
          <input 
            type="email"
            placeholder="Subscribe to our newsletter"
            className="py-2.5 px-3.5 w-[210px] border border-input-border focus:outline-none placeholder:text-description text-input-2xl text-white bg-transparent rounded-md"
          />

          <Button
            className="text-subscribe-button-2xl !text-[#000000]"
          >
            Subscribe
          </Button>
        </div>
      </SiteContainer>
    </section>
  )
}
export default Subscribe;