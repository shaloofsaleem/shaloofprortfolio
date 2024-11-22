"use client"; 

import { AnimatePresence, motion} from "framer-motion"
import { usePathname } from "next/navigation"

// Components
import Stairs from "./Stairs"

const StairTransition = () => {
    const pathName = usePathname()
  return (
    <div>
      <AnimatePresence mode="wait" className="">
        <div key={pathName} className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex">
            <Stairs/>
        </div>
        <motion.div  
            inherit={{opacity : 1}}
            animate={{opacity: 0}}
            transition={{delay: 1, duration: 0.4, ease: "easeInOut"}}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"/>
      </AnimatePresence>
    </div>
  )
}

export default StairTransition
