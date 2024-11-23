'use client';

import {AnimatePresence,motion} from 'framer-motion'
import { usePathname } from 'next/navigation';


const PageTranisition = ({children}) => {
    const pathName = usePathname()
  return (
    <AnimatePresence>
        <div className="" key={pathName}>
            <motion.div  
            inherit={{opacity : 1}}
            animate={{opacity: 0}}
            transition={{delay: 1, duration: 0.4, ease: 'easeInOut'}}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"/>
        {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTranisition
