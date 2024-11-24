'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiBootstrap,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

// About Data
const about = {
  title: 'About Me',
  description:
    'I am a self-taught Full Stack Web Developer and Digital Marketing Specialist with expertise in Python, Django, JavaScript, AI/ML, and SEO content writing.',
  info: [
    { fieldName: 'Name', fieldValue: 'Shaloof Saleem' },
    { fieldName: 'Phone', fieldValue: '(+971) 05 44 598781' },
    { fieldName: 'Experience', fieldValue: '12+ Years' },
    { fieldName: 'Skype', fieldValue: 'ShaloofSaleem' },
    { fieldName: 'Nationality', fieldValue: 'India' },
    { fieldName: 'Email', fieldValue: 'shaloofsaleem@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'English, Malayalam, Hindi' },
  ],
};

// Experience Data
const experience = {
  title: 'My Experience',
  description:
    'Experienced Full Stack Web Developer and Digital Marketing Expert skilled in Python, Django, JavaScript, React, and AI.',
  items: [
    {
      company: 'Real Touch Office Furniture – Dubai, UAE',
      position: 'Digital Marketing & Web Developer',
      duration: 'Dec 2023 – Present',
    },
    {
      company: 'Brototype - Calicut, India',
      position: 'Jr. Python/Django Developer',
      duration: 'May 2022 – June 2023',
    },
    {
      company: 'Avodha Edutech Pvt Ltd',
      position: 'AI Developer Intern',
      duration: 'Oct 2021 – Feb 2022',
    },
  ],
};

// Education Data
const education = {
  title: 'My Education',
  description:
    'Highly skilled professional with a strong educational foundation in programming, web development, and digital marketing.',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Developing',
      duration: '2021-2022',
    },
    {
      institution: 'Alphonsa Arts and Science College',
      degree: 'Bachelor of Computer Applications (BCA)',
      duration: '2018 - 2021',
    },
  ],
};

// Skills Data
const skills = {
  title: 'My Skills',
  description:
    'Expert in Python, Django, JavaScript, React, and AI, specializing in scalable web apps, e-commerce platforms, and SEO-friendly websites.',
  items: [
    { icon: <FaHtml5 />, title: 'HTML5' },
    { icon: <FaCss3Alt />, title: 'CSS3' },
    { icon: <FaJs />, title: 'JavaScript' },
    { icon: <SiNextdotjs />, title: 'Next.js' },
    { icon: <FaReact />, title: 'React.js' },
    { icon: <FaNodeJs />, title: 'Node.js' },
    { icon: <FaPython />, title: 'Python' },
  ],
};

// Resume Component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 px-4'
    >
      <div className='container mx-auto max-w-screen-lg'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-6'
        >
          {/* Tab List */}
          <TabsList className='flex flex-col sm:flex-row xl:flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className='w-full'>
            <TabsContent value='experience'>
              <Section
                title={experience.title}
                description={experience.description}
              >
                <ScrollArea className='h-[300px] sm:h-[400px] overflow-y-auto'>
                  <ItemList items={experience.items} />
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value='education'>
              <Section
                title={education.title}
                description={education.description}
              >
                <ScrollArea className='h-[300px] sm:h-[400px]'>
                  <ItemList items={education.items} />
                </ScrollArea>
              </Section>
            </TabsContent>

            <TabsContent value='skills'>
              <Section title={skills.title} description={skills.description}>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {skills.items.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-gray-800 rounded-xl flex justify-center items-center'>
                          <div className='text-6xl text-gray-400 hover:text-accent transition-all'>
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{skill.title}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </Section>
            </TabsContent>

            <TabsContent value='about'>
              <Section title={about.title} description={about.description}>
                <ul className='grid grid-cols-1 sm:grid-cols-2  gap-y-6'>
                  {about.info.map((item, index) => (
                    <li key={index} className='flex gap-4'>
                      <span className='text-gray-400  sm:text-xs'>{item.fieldName}</span>
                      <span className='lg:text-lg sm:text-xs '>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// Section Component
const Section = ({ title, description, children }) => (
  <div className='flex flex-col gap-6'>
    <h3 className='text-2xl sm:text-4xl font-bold'>{title}</h3>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    {children}
  </div>
);

// Item List Component
const ItemList = ({ items }) => (
  <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
    {items.map((item, index) => (
      <li key={index} className='bg-gray-800 p-6 rounded-lg'>
        <span className='text-accent text-sm'>{item.duration}</span>
        <h3 className='text-lg font-semibold'>{item.position}</h3>
        <p className='text-gray-400'>{item.company}</p>
      </li>
    ))}
  </ul>
);

export default Resume;
