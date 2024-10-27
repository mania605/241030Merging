import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';
import Product from './components/sub/Product';
import Brand from './components/sub/Brand';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './components/common/MobileMenu';
import { useZustandStore } from './hooks/useZustand';
import ColorSelector from './components/common/ColorSelector';

export default function App() {
	const location = useLocation();
	const IsMenu = useZustandStore(state => state.IsMenu);

	return (
		<>
			<Header />

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/members' element={<Brand />} />
					<Route path='/gallery' element={<Product />} />
					<Route path='/youtube' element={<Youtube />} />
				{/* <Route path='/youtube/:id' element={<YoutubeDetail />} /> */}
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</AnimatePresence>

<ColorSelector />
		
			<AnimatePresence>{IsMenu && <MobileMenu />}</AnimatePresence>

			<Footer />
		</>
	);
}
/*
	Color Selector라는 컴포넌트를 통한 실시간 웹페이지 디자인 컬러 테마 변경
	1.현재 기업형 프로젝트에서 키포인트로 활용될 만한 모든 요소의 색상값을 일반 css변수로 치환
	2.키 컬러 선택 컴포넌트 추가후 해당 컴포넌트 컬러 선택 이벤트 발생
	3.사용자 선택할 컬러값으로 css변수값을 변경
*/