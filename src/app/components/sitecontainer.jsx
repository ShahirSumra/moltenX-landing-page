const SiteContainer = ({className, children}) => {

  return(
    <div className={`3xl:max-w-[1760px] 2xl:max-w-[1480px] xl:max-w-[1180px] mx-auto px-[70px] w-full ${className ? className : ''}`}>
      {children}
    </div>
  )
}
export default SiteContainer;