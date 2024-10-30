import Visual from './Visual';
import { useRef, useState, useEffect } from 'react';
import Banner from './Banner';
import Pics from './Pics';
import Vids from './Vids';  

export default function Home() {
	const [Scrolled, setScrolled] = useState(0);
	const ref_el = useRef(null);
	const ref_posArr = useRef([]);

	// 브라우저 리사이즈시 해당 메인 프레임의 자식 요소를 반복돌면서 각 요소의 세로 위치값을 ref_posArr에 담아주는 함수
	const getPos = () => {
		ref_posArr.current = [];
		for (const el of ref_el.current.children) ref_posArr.current.push(el.offsetTop);
		console.log(ref_posArr.current);
	};

	const handleScroll = () => {
		setScrolled(window.scrollY);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

return (		
		<main ref={ref_el}>
			<Visual />
			{/* 해당 Home컴포넌트에서 만들어지는 자식 섹션들의 세로 위치 배열값중 2번째에 해당하는 Pics의 위치값만 pos라는 props로 전달  */}
			{/* pos값이 필요한 이유 해당 컴포넌트는 문서 상단에 위치해 있지 않기 때문에 현재 스크롤되고 있는 거리값에서 해당 섹션의 위치값을 빼줘야지 0으로 초기화된 값으로 스타일 적용 가능 */}
			<Pics Scrolled={Scrolled} pos={ref_posArr.current[1]} />
			<Vids />
			<Banner /> 
	</main>
	);
} 