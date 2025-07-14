const SiteContainer = ({className, children}) => {

  return(
    <div className={`3xl:max-w-[1760px] 2xl:max-w-[1400px] xl:max-w-[1280px] mx-auto lg:px-[70px] px-4 w-full ${className ? className : ''}`}>
      {children}
    </div>
  )
}
export default SiteContainer;