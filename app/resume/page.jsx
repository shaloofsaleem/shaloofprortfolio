'use client'
import { FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa';
import { FaPython, FaNodeJs, FaPhp, FaLaravel, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiFlask, SiTailwindcss, SiBootstrap } from 'react-icons/si';

import { SiPython, SiTensorflow, SiPytorch, SiKeras, SiNumpy, SiPandas } from 'react-icons/si';
import { FaBrain, FaRobot } from 'react-icons/fa';

import { FaGoogle, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGoogleads, SiGoogleanalytics, SiMailchimp, SiWordpress } from 'react-icons/si';

// About Data

const about = {
    title:'About Me',
    description: 'I am a self-taught Full Stack Web Developer and Digital Marketing Specialist with expertise in Python, Django, JavaScript, AI/ML, and SEO content writing. With a passion for learning new technologies and delivering high-quality web solutions, I have a proven track record of developing scalable websites, e-commerce platforms, and AI-driven applications. My dedication lies in optimizing user experience and creating impactful online presences for businesses.',
    info:[
        {
            fieldName: 'Name',
            fieldValue: 'Shaloof Saleem'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+971) 05 44 598781 '
        },
        {
            fieldName: 'Experince',
            fieldValue: ' 12+ Years'
        },
        {
            fieldName: 'Skype',
            fieldValue: 'ShaloofSaleem'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'India'
        },
        {
            fieldName: 'Email',
            fieldValue: 'shaloofsaleem@gmail.com'
        },
        {
            fieldName: 'FreeLance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Language',
            fieldValue: 'English, Malayalam, Arbic, Hindi'
        },
    ]
}
// Exeperince Data
const experince = {
    icon: '/public/resume/badge.svg',
    title: 'My Experince',
    description: 'Experienced Full Stack Web Developer and Digital Marketing Expert skilled in Python, Django, JavaScript, React, and AI. I create scalable web apps, e-commerce platforms, and SEO-optimized websites to enhance user experience and drive business growth',
    items: [
        {
            company: 'Real Touch Office Furniture – Dubai, UAE',
            position: 'Digital Marketing & Web Developer',
            duration: 'Dec 2023 – Present'
        },
        {
            company: 'Brototype - Calicut, India',
            position: 'Jr. Python/Django Developer',
            duration: 'May 2022 – June 2023'
        },
        {
            company: 'Avodha Edutech Pvt Ltd',
            position: 'AI Developer Intern',
            duration: 'Oct 2021 – Feb 2022'
        },
    ]
}
// Exeperince Data
const education = {
    icon: '/public/resume/cap.svg',
    title: 'My Education',
    description: 'Highly skilled professional with a strong educational foundation in programming, web development, and digital marketing. Proficient in leveraging Python, Django, and JavaScript to build scalable web solutions, with expertise in AI technologies to deliver innovative and impactful results.',
    items: [
        {
            institution: 'Online Course Platform',
            degree: 'Full Stack Developing',
            duration: '2021-2022'
        },
        {
            institution: 'Alphonsa Arts and Science College',
            degree: 'Bachelor of Computer Applications (BCA)',
            duration: '2018 - 2021'
        },
    ]
}
// Skills Data
const skills = {
    title: 'My Skills',
    description: 'Expert in Python, Django, JavaScript, React, and AI, specializing in scalable web apps, e-commerce platforms, and SEO-friendly websites. Skilled in SEO strategies, social media management, and driving digital growth.',
    items: [
        {
            icon: <FaHtml5/>,
            title: 'HTML5',
        },
        {
            icon: <FaCss3Alt/>,
            title: 'CSS3',
        },
        {
            icon: <FaJs/>,
            title: 'JavaScript',
        },
        {
            icon: <SiNextdotjs/>,
            title: 'NextJs',
        },
        {
            icon: <FaReact/>,
            title: 'React.js',
        },
        {
            icon: <FaNodeJs/>,
            title: 'Node.js',
        },
        {
            icon: <FaPython/>,
            title: 'Python',
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger,} from '@/components/ui/tabs'
import { Tooltip , TooltipContent, TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip';

import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';


const Resume = () => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1 ,
            transition:{
                delay:2.4,
                duration:0.4,
                ease : 'easeIn'
            }
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container max-auto">
                <Tabs defaultValue="experince" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList  className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experince" >Experince</TabsTrigger>
                        <TabsTrigger value="educations" >Educations</TabsTrigger>
                        <TabsTrigger value="skill" >Skills</TabsTrigger>
                        <TabsTrigger value="about" >About Me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-w-[70vh] w-full">
                        {/* experince */}
                        <TabsContent value="experince" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experince.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experince.description}</p>
                                <ScrollArea
                                    className="h-[400px] overflow-y-auto"
                                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--accent-color) transparent' }}
                                    >
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                        {experince.items.map((item, index) => (
                                        <li
                                        key={index}
                                        className="bg-[#232329] h-auto py-8 px-6 rounded-lg flex flex-col justify-center items-center lg:items-start gap-2"
                                        >
                                        <span className="text-accent text-sm lg:text-base">{item.duration}</span>
                                        <h3 className="text-lg lg:text-xl font-semibold text-center lg:text-left max-w-full">
                                            {item.position}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {/* dot */}
                                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                                            <p className="text-white/60 text-sm lg:text-base">{item.company}</p>
                                        </div>
                                        </li>
                                        ))}
                                    </ul>              
                                </ScrollArea>

                            </div>
                        </TabsContent>
                         {/* Educations */}
                         <TabsContent value="educations" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea
                                    className="h-[400px] "
                                    // style={{ scrollbarWidth: "thin", scrollbarColor: "accent transparent" }}
                                    >
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                        {education.items.map((item, index) => (
                                        <li
                                        key={index}
                                        className="bg-[#232329] h-auto py-8 px-6 rounded-lg flex flex-col justify-center items-center lg:items-start gap-2"
                                        >
                                        <span className="text-accent text-sm lg:text-base">{item.duration}</span>
                                        <h3 className="text-lg lg:text-xl font-semibold text-center lg:text-left max-w-full">
                                            {item.institution}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {/* dot */}
                                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                                            <p className="text-white/60 text-sm lg:text-base">{item.degree}</p>
                                        </div>
                                        </li>
                                        ))}
                                    </ul>              
                                </ScrollArea>
                            </div>
                         </TabsContent>
                          {/* Skills */}
                        <TabsContent value="skill" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title }
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description }
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {
                                        skills.items.map((skill,index) => {
                                            return <li key={index} className="">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="capitalize">
                                                            {skill.title}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </TabsContent>
                         {/* About Me */}
                         <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <h3 className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</h3>
                                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 min-w-[620px] mx-auto xl:mx-0">
                                {
                                    about.info.map((item,index)=>{
                                        return<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })
                                }
                                    
                                </ul>
                            </div>
                         </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default Resume