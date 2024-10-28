import Layout from '../common/Layout';
import Content from '../common/Content';

export default function BrandStory() {
	const memberData = [
		{ name: 'Angelo', text: 'CEO', pic: '/CEO.jpg' },
		{ name: 'Peter', text: 'Creative', pic: '/creative.png' },
		{ name: 'Paul', text: 'Model', pic: '/model.png' },
		{ name: 'Perfume', text: 'Best Product', pic: '/p1.jpg' }
	];

	return (
		<Layout title='Brand Story'>
			<article className='ceoBox'>
				<div className='story'>
					<nav className='ceoTitle'>
						향기의 권위자 Angelo의
						<br /> 단독 Brand 론칭
					</nav>
					<nav className='ceoSubTitle'>
						<p>남자의 향을 완성하다</p>
						<p>since 1990</p>
						<p>젊은날의 성공을 함께 전달하다</p>
						<p></p>
					</nav>
				</div>
				<div className='ceoImg'>
					<img className='ceo' src={memberData[0].pic} alt={memberData[0].name} />
					<h2>{memberData[0].name}</h2>
					<p>{memberData[0].text}</p>
				</div>
			</article>

			<section className='mid'>
				<div className='mid1'></div>
				<div className='mid2'></div>
			</section>
			<section>
				{memberData.map((data, idx) => {
					if (idx !== 0) {
						return (
							// 리턴문 안쪽에 제일 부모 jsx요소엔 무조건 key={순서값} 적용
							<article key={idx}>
								<div className='pic'>
									<img className='others' src={data.pic} alt={data.name} />
								</div>
								<h3>{data.name}</h3>
								<p>{data.text}</p>
							</article>
						);
					}
				})}
			</section>
			<section className='last'>
				<div className='last1'></div>
				<div className='last2'></div>
			</section>
		</Layout>
	);
}


// import Layout from '../common/Layout';
// import memberData from '../../data/memberData';
// import Pic from '../common/Pic';
// import MaskBox from '../common/MaskBox';
// import MaskText from '../common/MaskText';
// import Content from '../common/Content';

// export default function Brand() {
// 	return (
// 		<Layout title={'BRAND'}>
// 			<MaskText delay={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad?</MaskText>
// 			<br />
// 			<MaskText delay={1.5} style={{ marginBottom: 80 }}>
// 				Lorem ipsum dolor
// 			</MaskText>

// 			<Content delay={1}>
// 				<article className='ceoBox'>
// 					<div className='txt'>
// 						<h2>{memberData[0].name}</h2>
// 						<p>{memberData[0].position}</p>
// 					</div>

// 					<MaskBox className='picWrapper' style={{ width: '50%', height: '65vh' }} delay={1}>
// 						<Pic style={{ width: '100%', height: '100%' }} src={'/' + memberData[0].pic} />
// 					</MaskBox>
// 				</article>

// 				<article className='memberListBox'>
// 					<div className='titBox'>
// 						<h2>Our Team Members</h2>
// 						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus non ipsa cum. Veritatis, dolore aliquam? Consectetur assumenda dolor labore.</p>
// 					</div>

// 					<ul>
// 						{memberData.map((member, idx) => {
// 							if (idx !== 0) {
// 								return (
// 									<li key={idx}>
// 										{/* 이미지 컴포넌트 호출후 src에 이미지 url값 전달, pic클래스에는 이미지의 크기정도만 지정 */}
// 										<Pic src={member.pic} className='pic' shadow={true} />
// 										<div className='txt'>
// 											<h2>{member.name}</h2>
// 											<p>{member.position}</p>
// 										</div>
// 									</li>
// 								);
// 							}
// 						})}
// 					</ul>

// 					<div className='descBox'>
// 						<h2>Lorem ipsum dolor sit.</h2>
// 						<p>
// 							Lorem ipsum, dolor sit amet consectetur adipisicing elit. A esse cupiditate, vitae deleniti repellat explicabo sit, corrupti beatae dicta, nulla optio corporis alias.
// 							Perferendis quidem sapiente minima, quisquam inventore soluta.
// 						</p>
// 					</div>
// 				</article>
// 			</Content>
// 		</Layout>
// 	);
// }
  