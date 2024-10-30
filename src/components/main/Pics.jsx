import React from 'react';
export default function Pics({ Scrolled, pos }) {
	return (
			<section className="pics">
					{/* style 속성에서 Scrolled와 pos의 차이를 이용하여 회전 효과 적용 */}
					<div className="box" style={{ transform: `rotate(${Scrolled - pos}deg)` }}></div>
			</section>
	);
}