'use client'

import CountUp, { useCountUp } from 'react-countup'

const status =[
    {
        num:4,
        text: 'Year of Experince'
    },
    {
        num:26,
        text: 'Project Completed'
    },
    {
        num:8,
        text: 'Technologies Master'
    },
    {
        num:500,
        text: 'Code Commits'
    },
]
const Status = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {
                        status.map((item, index)=>{
                            return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-4xl lg:text-6xl font-extrabold"/>
                                <p className={`${
                                    item.text.length<15? 'max-w-[100px]' :' max-w-[160px]'
                                    }leading-snug text-white/80 `}>{item.text}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Status