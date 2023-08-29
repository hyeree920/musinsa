import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductListBrand from './product'

function SlideAuto() {
    return(
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                type: 'fraction',
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='auto-slide'
        >
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/2023/08/24/4689f84ce11e4ccf8adb27be710195aa.jpg" alt="visual"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/2023/08/24/d0c7915694974405b612427b5e68c1a6.jpg" alt="visual"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/2023/08/24/0b31f5d62fc64af3aabd539d18e5be52.jpg" alt="visual"></img>
            </SwiperSlide>
        </Swiper>
    )
    
}

function SlidePage() {
    const tabList = [ '사운즈라이프','잔스포츠','1993스튜디오' ]
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + tabList[index] + '</span>';
        },
    };

    return(
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className='page-slide'
        >
            <SwiperSlide>
                <div className='brand-card'>
                    <div className='page-slide-img'>
                        <img src="https://image.msscdn.net/display/images/main/2023/08/24/9c3e1e1b31fe45e9823989b865941420.jpg" alt="visual"></img>
                    </div>
                    <div className='page-slide-txt'>
                        <div className='page-slide-title'>
                            <div className='page-slide-icon'>
                                <img src="https://image.msscdn.net/display/images/main/2023/08/24/9439724af84e4e079baf4c9b523450ee.png" alt="brand issue"></img>
                            </div>
                            <span>브랜드명</span>
                        </div>
                        <p>23 F/W 정규 컬렉션 한정 발매 〉</p>
                    </div>
                </div>
                <ProductListBrand></ProductListBrand>
            </SwiperSlide>

            <SwiperSlide>
                <div className='brand-card'>
                    <div className='page-slide-img'>
                        <img src="https://image.msscdn.net/display/images/main/2023/08/24/3cb469f385724cfab24b21f5915e37f4.jpg" alt="visual"></img>
                    </div>
                    <div className='page-slide-txt'>
                        <div className='page-slide-title'>
                            <div className='page-slide-icon'>
                                <img src="https://image.msscdn.net/display/images/main/2023/08/24/9439724af84e4e079baf4c9b523450ee.png" alt="brand issue"></img>
                            </div>
                            <span>브랜드명</span>
                        </div>
                        <p>23 F/W 정규 컬렉션 한정 발매 〉</p>
                    </div>
                </div>
                <ProductListBrand></ProductListBrand>
            </SwiperSlide>

            <SwiperSlide>
                <div className='brand-card'>
                    <div className='page-slide-img'>
                        <img src="https://image.msscdn.net/display/images/main/2023/08/24/30c325a785214b609c2397ecd16b6f45.jpg" alt="visual"></img>
                    </div>
                    <div className='page-slide-txt'>
                        <div className='page-slide-title'>
                            <div className='page-slide-icon'>
                                <img src="https://image.msscdn.net/display/images/main/2023/08/24/9439724af84e4e079baf4c9b523450ee.png" alt="brand issue"></img>
                            </div>
                            <span>브랜드명</span>
                        </div>
                        <p>23 F/W 정규 컬렉션 한정 발매 〉</p>
                    </div>
                </div>
                <ProductListBrand></ProductListBrand>
            </SwiperSlide>
        </Swiper>
    )
    
}

function SlideDot() {
    return(
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className='dot-slide'
        >
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/main/2023/08/18/d6409baada404434b1eb1c8ee9a6d922.jpg" alt="visual"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/main/2023/08/18/c3d5ec2818064c7ba38bebfa2d5bc961.jpg" alt="visual"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.msscdn.net/display/images/main/2023/08/18/4a140f9f4e5b475684a8276079720256.jpg" alt="visual"></img>
            </SwiperSlide>
        </Swiper>
    )
    
}


export { SlideAuto, SlidePage, SlideDot };