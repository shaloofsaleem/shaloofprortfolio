import { Button } from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'

//Components
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Status from '@/components/Status'

const page = () => {
  return (
    <section className="">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/><span className="text-accent">Shaloof Saleem</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I specialize in Python, Django, JavaScript, and AI to create scalable web apps, e-commerce sites, and SEO-friendly solutions that boost user experience and business growth.</p>
            {/* Button  and Social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variants="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="">
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" 
                  />
                </div>
              </div>

            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Status/>
    </section>
  )
}

export default page
