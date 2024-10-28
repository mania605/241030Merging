import { useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { Link } from 'react-router-dom';
import Content from '../common/Content';
import { useYoutubeQuery } from '../../hooks/useYoutube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();
	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });

 

	useEffect(() => {
		// 자동 재생 버튼 기능
		document.querySelector('.btnStart').addEventListener('click', () => swiper.autoplay.start());
		document.querySelector('.btnStop').addEventListener('click', () => swiper.autoplay.stop());
	}, []);


	return (
		<Layout title={'YOUTUBE'}>
		<div className="wrap">
		<h1>AVALLION <span>YOUTUBE</span> </h1>
		<ul className="auto">
			<li className="btnStart"><i className="fas fa-play"></i></li>
			<li className="btnStop"><i className="fas fa-pause"></i></li>
		</ul>

		<Swiper
			modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
			loop={true}
			spaceBetween={0}
			slidesPerView="auto"
			centeredSlides={true}
			grabCursor={true}
			speed={1000}
			effect="coverflow"
			coverflowEffect={{
				rotate: 50,
				stretch: -100,
				depth: 400,
				modifier: 1,
				slideShadows: false
			}}
			autoplay={{ delay: 1000, disableOnInteraction: true }}
			pagination={{ el: ".swiper-pagination", type: "fraction" }}
			navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
			className="swiper-wrapper"
		>
			<SwiperSlide className="swiper-slide">
				<div className="inner">
					<div className="con">
						<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="public/thumb1.png" alt="AVALLION" />
						<h2>AVALLION</h2>
						<p>STEP INTO POSSIBILITIES</p>
					</div>
				</div>
			</SwiperSlide>
 
			<SwiperSlide className="swiper-slide">
				<div className="inner">
					<div className="con">
					<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="public/thumb2.png" alt="STEP INTO POSSIBILITIES" />
						<h2>PERFUME DESIGNER</h2>
						<p>ANGELO BEAN</p>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide className="swiper-slide">
				<div className="inner">
					<div className="con">
					<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="public/thumb3.png" alt="AVALLION" />
						<h2>LIMITLESS POTENTIAL</h2>
						<p>FIRST FRAGRANCE</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<div className="inner">
					<div className="con">
					<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="public/thumb4.png" alt="STEP INTO POSSIBILITIES" />
						<h2>STEP INTO POSSIBILITIES</h2>
						<p>PROJCT AVALLION</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<div className="inner">
					<div className="con">
					<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="public/thumb5.png" alt="STEP INTO POSSIBILITIES" />
						<h2>BRAND STORY</h2>
						<p>First Fragrance!</p>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>

		{/* 네비게이션 및 페이지네이션 요소 */}
		<div className="swiper-button-next"></div>
		<div className="swiper-button-prev"></div>
		<div className="swiper-pagination"></div>
	</div>

	<Content delay={1}>
		{isPending && <p>Loading...</p>}
		<div className="video-grid">
			{Vids?.slice(0, 8).map((vid, idx) => (
				<article key={idx} className="video-card">
					<p className="round">●</p>
					<h3>
						<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 53)}</Link>
					</h3>
					<div className="txt">
						<p>{shortenText(vid.snippet.description, 50)}</p>
						<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
					</div>
					<Pic className="thumb" src={vid.snippet.thumbnails.high.url} />
				</article>
			))}
		</div>
	</Content>
</Layout>
);
}