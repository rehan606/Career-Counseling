import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const Slide = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div>
                        <div className=" flex flex-col md:flex-row justify-between items-center pt-10 lg:pt-0 lg:pl-20 gap-2 " >
                            <div className='md:w-1/2 space-y-2'>
                                <p className='text-[#ff7029]  font-Inter text-2xl'>You are in safe hands</p>
                                <h2 className='font-Inter text-3xl lg:text-5xl text-white font-bold leading-tight'>Struggling at some stage in normal life? I can help.</h2>

                                <h4 className='text-white fnot-semibold text-xl pb-10 '>The privilege coaching relationship can be an integral asset for <br /> proficient development. Shoot for the correct end goal.</h4>

                                <a className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Download Free E-Book</a>
                            </div>
                            <div className=' md:w-1/2 '>

                                <img src="https://i.ibb.co.com/x3mBfTL/lovepik-business-woman-cheering-png-image-401612457-wh1200-removebg-preview.png" alt="" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-10 lg:pt-0 lg:pl-20 gap-2">
                            <div className='md:w-1/2 space-y-2'>
                                <p className='text-[#ff7029]  font-Inter text-2xl'>You're in capable hands.</p>
                                <h2 className='font-Inter text-3xl lg:text-5xl text-white font-bold leading-tight'>Facing challenges in life's journey? Let me guide u.</h2>

                                <h4 className='text-white fnot-semibold text-xl pb-10 '>A trusted coaching partnership can be a powerful tool for
                                    personal and professional growth. Aim high and achieve your true potential.</h4>

                                <a className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Download Free E-Book</a>
                            </div>
                            <div className='md:w-1/2 '>

                                <img src="https://i.ibb.co.com/vP4NnKw/img-team-member-career-03-removebg-preview.png" alt="" className='w-full h-full ' />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pb-10 lg:pb-0  lg:pt-0 lg:pl-20 gap-2" >
                            <div className='md:w-1/2 space-y-2'>
                                <p className='text-[#ff7029]  font-Inter text-2xl'>You are in safe hands</p>
                                <h2 className='font-Inter text-3xl lg:text-5xl text-white font-bold leading-tight'>Struggling at some stage in normal life? I can help.</h2>

                                <h4 className='text-white fnot-semibold text-xl pb-10 '>The privilege coaching relationship can be an integral asset for <br /> proficient development. Shoot for the correct end goal.</h4>

                                <a className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Download Free E-Book</a>
                            </div>
                            <div className='md:w-1/2'>
                                <img src="https://i.ibb.co.com/6mtRrMc/img-team-member-career-02-removebg-preview.png" alt="" className='w-full h-full' />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;