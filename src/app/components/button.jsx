const Button = ({ className,  onClick, props, children }) => {

  return(
    <button 
      className={`rounded-md 2xl:rounded-lg px-3 py-2.5 lg:px-4 lg:py-2.5 2xl:px-5 2xl:py-3 3xl:px-6 3xl:py-4 bg-button-bg shadow-button-shadow hover:shadow-button-hover duration-150 text-button xl:text-button-xl 2xl:text-button-2xl 3xl:text-button-3xl text-black ${className}`}
      onClick={onClick}
      {...props}
    >
      
      {children}
    </button>
  )
}
export default Button;