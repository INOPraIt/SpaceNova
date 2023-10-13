import { useTranslation } from 'react-i18next';
import React from 'react';
import '../../assets/styles/style.scss';
import lefthand from '../../assets/images/LeftHand.png';
import righthand from '../../assets/images/RightHand.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

// import 'swiper/swiper.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';
// import 'swiper/modules/pagination.min.css';

// import './swiper.scss';

// import { EffectCoverflow, Pagination } from 'swiper/modules';

export default ({ }) => {
  const { t } = useTranslation();

  return (
    <div className='conatinerHome'>
      <div className='containerGeneral'>
        <div className='itemOne'>
          <div className='blockOrange'>
            <p className='textSpaceNovaStudio'>
              SpaceNova<br />
              studio
            </p>
          </div>

          <button className='btnOne'>
            <p className='btnAbout'>
              {t('about us')}
            </p>
          </button>

          <button className='btnTwo'>
            <p className='btnProjects'>
              {t('our projects')}
            </p>
          </button>

          <p className='customText'>
            Custom<br />
            built<br />
          </p>
          <p className='webText'>
            web sites<br />
            to be<br />
            proud of<br />
          </p>

          <p className='demoForm'>
            Please fill out the form for more <br />
            information or products
          </p>
        </div>
        <div className='itemTwo'>
          <div className='leftHandBlock'>
            <img
              className='leftHand'
              src={lefthand}
              alt='lhand'
            />
          </div>
          <div className='blockBetween'>
            <Swiper
              autoplay={false}
              arrows={false}
              dots={false}

              // effect={'coverflow'}
              // grabCursor={true}
              // centeredSlides={true}
              // slidesPerView={4}
              // coverflowEffect={{
              //   rotate: 20,
              //   stretch: 0,
              //   modifier: 1,
               
              // }}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              // modules={[EffectCoverflow, Pagination, Autoplay]}
              // className="mySwiper"
              // direction={'vertical'}
              // pagination={{
              //   clickable: true,
              // }}
            >
              <SwiperSlide>
                <img 
                  src="https://inoprait-eta.vercel.app/images/works/arbit_eyecatch.png" 
                  alt='dsmealkcf'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="https://inoprait-eta.vercel.app/images/works/wierdmerch_01.jpg" 
                  alt='smeafpodwef'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="https://inoprait-eta.vercel.app/images/works/auto_01.jpeg" 
                  alt='dwedf'
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='rightHandBlock'>
            <img
              className='rightHand'
              src={righthand}
              alt='lhand'
            />
          </div>
        </div>
      </div>
    </div>
  )
};
