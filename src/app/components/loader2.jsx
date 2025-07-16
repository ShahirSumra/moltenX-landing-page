// import Image from "next/image";

// const Loader = () => {
  
//   return(
//     <div className="fixed top-0 left-0 h-screen flex items-center justify-center bg-black w-full relative">
//       <div className="relative flex items-center xl:gap-12 gap-10">
//         <Image 
//           src="/images/logo.png"
//           height={52}
//           width={320}
//           className="h-5 w-auto xl:h-[39px] xl:w-[240px] 3xl:h-8 3xl:w-[196px]"
//           alt="MoltenX"
//         />
//           <i className="loader --7"></i>
//       </div>
//     </div>
//   )
// }
// export default Loader;


'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Loader = () => {
  const loaderRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 })

    // Fade out logo + spinner
    tl.to(contentRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Then fade out background
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        if (loaderRef.current) loaderRef.current.style.display = 'none'
      }
    })
  }, [])


  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 h-screen w-full bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      <div
        ref={contentRef}
        className="relative flex items-center xl:gap-12 gap-10"
      >
        <Image
          src="/images/logo.png"
          height={52}
          width={320}
          className="h-5 w-auto xl:h-[39px] xl:w-[240px] 3xl:h-8 3xl:w-[196px]"
          alt="MoltenX"
        />
        <i className="loader --7"></i>
      </div>
    </div>
  )
}

export default Loader
