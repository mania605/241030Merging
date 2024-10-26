import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow, Virtual } from 'swiper/modules';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import 'swiper/css';  
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BtnStart({ swiper }) {
	return (
		<button
			hidden={swiper?.autoplay?.running}
			className='btnStart'
			onClick={() => {
				swiper.autoplay.start();
			}}>
			<FaPlay />
		</button>
	);
}

export default function Visual() {
	const [Index, setIndex] = useState(0);
	const { data, isSuccess } = useFlickrQuery({ type: 'mine' });
	let swiperRef = null;

	return (
		<figure className='visual'>
			<div className='textBox'>
				{/* 이미지 타이틀정보만 별로 뽑아서 Swipe 변경시마다 해당 순번의 타이틀도 같이 모션 처리 */}
				{data?.map((el, idx) => (
					<h2 key={idx} className={Index === idx ? 'on' : ''}>
						{el.title.substr(0, 30)}
					</h2>
				))}
			</div>

			<Swiper
				//Virtual 모듈 연결 (동적 요소 Slide 추가시에는 Virtaul 설정 추가해야함)
				modules={[Autoplay, Pagination, Navigation, EffectCoverflow, Virtual]}
				virtual
				pagination={{
					el: ".swiper-pagination",
					type: "fraction",
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				direction="horizontal"
				spaceBetween={0}
				slidesPerView="auto"
				loop={true}
				grabCursor={true}
				centeredSlides={true}
				speed={1000}
				effect="coverflow"
				coverflowEffect={{
					rotate: 50, 					// 회전 각도 지정
					stretch: -100,  			//슬라이드 간의 당김 정도 지정
					depth: 400,   				// 원근감 지정
					modifier: 1,    			//중첩 정도 지정
					slideShadows: false, 	//슬라이드의 그림자 생성
				}}
				autoplay={{
					delay: 1000,
					disableOnInteraction: true,
				}}
				onSlideChange={el => setIndex(el.realIndex)} 
				onSwiper={(swiper) => {
					swiperRef = swiper;
					setTimeout(() => {
						swiper.slideNext();
						swiper.autoplay.start();
					}, 1000);
				}}
				breakpoints={{
					1000: {
						slidesPerView: 2,
						spaceBetween: 50
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 50
					},
				}}>

	{/* 슬라이드 콘텐츠 */}
	{isSuccess &&
					data.map((pic, idx) => {
						if (idx >= 10) return null;
						return (
							<SwiperSlide key={pic.id} virtualIndex={idx}>
								<div className='inner'>
									<Pic
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
										style={{ width: '100%', height: '100%' }}
										shadow
									/>
								</div>
							</SwiperSlide>
						);
					})}

				{/* 자동롤링 시작 버튼 */}
				{swiperRef && <BtnStart swiper={swiperRef} />}

				{/* 네비게이션 및 페이지네이션 요소 */}
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
				<div className="swiper-pagination"></div>
			</Swiper>
		</figure>
	);
}