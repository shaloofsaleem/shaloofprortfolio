'use client'

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { easeIn, motion } from 'framer-motion'


const services=[
  {
    num: '01',
    title : 'Web Development',
    description : 'Build robust, scalable web applications using Python, Django, JavaScript, and React.',
    href : ''
  },
  {
    num: '02',
    title : 'E-commerce Solutions',
    description : 'Develop high-performance e-commerce platforms with secure payment integrations and seamless user experience.',
    href : ''
  },
  {
    num: '03',
    title : 'SEO Optimization',
    description : "Improve your website's search engine ranking with SEO-friendly design, content, and strategies.",
    href : ''
  },
  {
    num: '04',
    title : 'Digital Marketing Strategy',
    description : 'Create and manage effective digital marketing campaigns to drive traffic and conversions.',
    href : ''
  },
  {
    num: '05',
    title : 'Website Maintenance & Support',
    description : 'Offer ongoing support, updates, and performance monitoring to ensure your site runs smoothly.',
    href : ''
  },
  {
    num: '06',
    title : 'AI & Machine Learning Integration',
    description : 'Implement AI solutions for data analysis, predictive models, and smart applications.',
    href : ''
  },
  
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1,
          transition:{
            delay : 2.4,
            duration : 0.4,
            ease : 'easeIn'
          }
        }}

        className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {
            services.map((service, index)=>{
              return <div  key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl'/>
                    </Link>
                  </div>
                    {/* Headings */}
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>{service.title}</h2>
                    {/* Description */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* Border */}
                    <div className="border-b border-white/20 w-full"></div>
                </div>
            })
          }

        </motion.div>
      </div>
    </section>
  )
}

export default Services