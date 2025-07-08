const Button = ({ className,  onClick, props, children }) => {

  return(
    <button 
      className={`rounded-lg px-5 py-3 bg-button-bg shadow-button-shadow hover:shadow-button-hover duration-150 text-button text-button-orange ${className}`}
      onClick={onClick}
      {...props}
    >
      
      {children}
    </button>
  )
}
export default Button;