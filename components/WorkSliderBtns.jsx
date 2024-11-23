

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'; // import Swiper components

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';


const WorkSliderBtns = ({containerStyle, btnStyle, iconsStyle}) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={()=>swiper.slidePrev()}><PiCaretLeftBold className={iconsStyle} /></button>
            <button className={btnStyle} onClick={()=>swiper.slideNext()}><PiCaretRightBold className={iconsStyle} /></button>
        </div>
    )
}

export default WorkSliderBtns