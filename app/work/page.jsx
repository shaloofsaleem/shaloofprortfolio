"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import WorkSliderBtns from "@/components/WorkSliderBtns"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsArrowRight, BsGithub } from "react-icons/bs"

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'; // import Swiper components

const projects = [
  {
    num: "01",
    category: "E-commerce Website",
    title: "Football Frenzy Shop",
    description: "A feature-rich e-commerce platform built with Python Django, PostgreSQL, and Razorpay integration. Includes OTP verification, a custom admin panel, and AWS EC2 deployment for scalability and seamless performance.",
    stack: [
      { name: "HTML CSS JavaScript" },
      { name: "Django Python Postgres" },
      { name: "Twilio Paypal" },
    ],
    image: "/work/thumb1.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "02",
    category: "API",
    title: "BLOG-API",
    description: "A blog API in Django is an API that allows developers to interact with a blog's data, such as posts, comments, and categories, usingDjango as the backend. To create a blog API in Django, you can use the Django Rest Framework,Integrated : J W T",
    stack: [
      { name: "Django" },
      {name: "REST Framework"},
      { name: "Postgres" },
      { name: "JWT" },
    ],
    image: "/work/thumb1.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "03",
    category: "CLONE",
    title: "NEXTFLIX",
    description: "A simple Netflix Clone made using React.js.Currently, I have implemented the basic UI with media details fetch functionality.Deployed it using netlify",
    stack: [
      { name: "React.js" },
      { name: " TMDB API" },
      { name: "JWT" },
    ],
    image: "/work/thumb1.png", // Corrected the image path
    live: '',
    github: '',
  },
  
  {
    num: "04",
    category: "Machine Learning",
    title: "Number Plate Detection",
    description: "Developed using Kaggle datasets, YOLOv5, OpenCV, and EasyOCR, this system efficiently detects and classifies license plates, showcasing expertise in computer vision.",
    stack: [
      { name: "Kaggle" },
      { name: "YOLOv5" },
      { name: "OpenCV" },
      { name: "EasyOCR" },
    ],
    image: "/work/thumb2.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "05",
    category: "Machine Learning",
    title: "BOOK RECOMMENDER SYSTEM",
    description: "Built a Book recommender system to recommend BOOK based on the selected BOOK.",
    stack: [
      { name: "Python" },
      { name: "Numpy, Pandas" },
      { name: "Flask" },
    ],
    image: "/work/thumb2.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "06",
    category: "Detection",
    title: "American Sign Language (ASL)",
    description: "A robust detection system using cvzone, trained on custom datasets for accurate ASL classification.",
    stack: [
      { name: "Python" },
      { name: "cvzone, OpenCV" },
    ],
    image: "/work/thumb3.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "07",
    category: "Detection",
    title: "Emotion Detection with CNN",
    description: "Built a CNN-based model for real-time emotion detection from videos and images, leveraging ImageDataGenerator for data preprocessing.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
    ],
    image: "/work/thumb3.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "08",
    category: "Detection",
    title: "Object Detection with OpenCV",
    description: "Object-detection-using-deep-learning-withOpenCV-and-Pythonssd_mobilenet_v3_large_coco_2020_01_14.pbtxt",
    stack: [
      { name: "Python" },
      { name: "OpenCV" },
      { name: "Deep Learning" },
    ],
    image: "/work/thumb3.png", // Corrected the image path
    live: '',
    github: '',
  },
  {
    num: "06",
    category: "Detection",
    title: "Face Recognition Attendance System",
    description: "Real-time attendance tracking using OpenCV, automatically recording data into Excel via webcam detection.",
    stack: [
      { name: "Python" },
      { name: "OpenCV" },
    ],
    image: "/work/thumb3.png", // Corrected the image path
    live: '',
    github: '',
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
 
  const handelSlideChange = (swiper) =>{
     //get Current Style index
     const currentIndex = swiper.activeIndex;
    //Update Project State Based on current slide Index
    setProject(projects[currentIndex])
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row lg:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-non font-extrabold text-transparent text-outline">{project.num}</div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="w-full xl:w-[520px] mb-12"
            onSlideChange={handelSlideChange} >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  <div className="relative w-full group flex justify-center h-[460px] items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} 
                       alt="alt" 
                       fill 
                       className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
              containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
