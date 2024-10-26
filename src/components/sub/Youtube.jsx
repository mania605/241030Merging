import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { Link } from 'react-router-dom';
import Content from '../common/Content';
import { useYoutubeQuery } from '../../hooks/useYoutube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';



export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();

	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });

	return (
		<Layout title={'YOUTUBE'}>
			<Content delay={1}>
				
<div className="wrap">
				<h1>AVALLION <span>YOUTUBE VIDEOS</span></h1>
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
						slideShadows: false,
					}}
					autoplay={{
						delay: 1000,
						disableOnInteraction: true,
					}}
					pagination={{
						el: ".swiper-pagination",
						type: "fraction",
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
				>
					<SwiperSlide>
						<div className="inner">
							<div className="con">
								<a href="https://youtu.be/0XPfwjw0z-Q?si=uh21ujkS6Vbv4l5y">
									<img src="public/thumb1.png" alt="Thumbnail 1" />
									<h2>Step into possibility</h2>
									<p>Step into possibilities with the scent of AVALLION.</p>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="inner">
							<div className="con">
								<a href="https://youtu.be/0XPfwjw0z-Q?si=uh21ujkS6Vbv4l5y">
									<img src="public/thumb2.png" alt="Thumbnail 2" />
									<h2>Perfume Designer</h2>
									<p>AVALLION Eau Purfume – the first version of AVALLION fragrance...</p>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="inner">
							<div className="con">
								<a href="https://youtu.be/0XPfwjw0z-Q?si=uh21ujkS6Vbv4l5y">
									<img src="public/thumb3.png" alt="Thumbnail 3" />
									<h2>Dolor ipsum sit.</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="inner">
							<div className="con">
								<a href="https://youtu.be/0XPfwjw0z-Q?si=uh21ujkS6Vbv4l5y">
									<img src="public/thumb4.png" alt="Thumbnail 4" />
									<h2>Consectetur adicing.</h2>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="inner">
							<div className="con">
								<a href="https://youtu.be/0XPfwjw0z-Q?si=uh21ujkS6Vbv4l5y">
									<img src="public/thumb5.png" alt="Thumbnail 5" />
									<h2>Dicta! elit.</h2>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>

				{/* 네비게이션 및 페이지네이션 요소 */}
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
				<div className="swiper-pagination"></div>
			</div> 



		{isPending && <p>Loading...</p>}
				{Vids?.map((vid, idx) => {  
					return (
						<article key={idx}>
							<h3>
								<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 60)}</Link>
							</h3>
							<div className='txt'>
								<p>{shortenText(vid.snippet.description, 150)}</p>
								<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
							</div>
							<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						</article>
					);
				})}

			</Content>
		</Layout>
	);
}
 

