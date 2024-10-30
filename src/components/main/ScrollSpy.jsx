// //npm install scrollmagic gsap imports-loader


// import React, { useEffect } from 'react';
// import ScrollMagic from 'scrollmagic';
// import { TweenMax } from 'gsap';

// export default function ScrollSpy() {
//   useEffect(() => {
//     const controller = new ScrollMagic.Controller();

//     const tween1 = TweenMax.to('#animate1', 0.5, {
//       backgroundColor: '#333333',
//       scale: 2.5,
//       rotation: 360,
//       x: 130,
//     });

//     new ScrollMagic.Scene({
//       triggerElement: '#trigger1',
//       offset: 150,
//     })
//       .setTween(tween1)
//       .addTo(controller)
//       .addIndicators({ name: '1' });
//   }, []);

//   return (
//     <div>
//       {/* VISUAL Section */}
//       <section className="mainvisual">
//         <div className="inner">
//             <div className="fade-in" style={{ opacity: 1 }}>
//             <img src="./back/Perfume No.0.jpg" alt="P0" className="cup1 image" />
//             <img src="./back/Perfume No.1.jpg"alt="p1" className="cup1 text" />
//           </div>
//           <div className="fade-in" style={{ opacity: 1 }}>
//             <img src="./images/visual_cup2.png" alt="Cup2" className="cup2 image" />
//             <img src="./images/visual_cup2_text.png" alt="카라멜 크럼블 모카" className="cup2 text" />
//           </div>
//           <div className="fade-in" style={{ opacity: 1 }}>
//             <img src="./images/visual_spoon.png" alt="Spoon" className="spoon" />
//           </div>
//         </div>
//       </section>

//       {/* NOTICE Section */}
//       <section className="notice">
//         <div className="bg-left"></div>
//         <div className="bg-right"></div>
//         <div className="inner">
//           <div className="inner__left">
//             <h2>공지사항</h2>
//             <div className="swiper swiper-vertical">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide" role="group">
//                   <a href="javascript:void(0)">[당첨자 발표] 전자영수증 이벤트</a>
//                 </div>
//                 <div className="swiper-slide" role="group">
//                   <a href="javascript:void(0)">크리스마스 & 연말연시 매장 영업시간 변경 안내</a>
//                 </div>
//                 {/* Add more swiper-slide items as needed */}
//               </div>
//             </div>
//             <a href="javascript:void(0)" className="notice-more">
//               <span className="material-icons">add_circle</span>
//             </a>
//           </div>
//           <div className="inner__right">
//             <h2>커피 프로모션</h2>
//             <div className="toggle-promotion">
//               <div className="material-icons">upload</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROMOTION Section */}
//       <section className="promotion">
//         <div className="swiper swiper-horizontal">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="./images/promotion_slide3.jpg" alt="프로모션 슬라이드" />
//               <a href="javascript:void(0)" className="btn">
//                 자세히 보기
//               </a>
//             </div>
//             {/* Add more swiper-slide items as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Other sections go here in the same structure, adjusting for JSX as shown */}

//       {/* TO TOP BUTTON */}
//       <div id="to-top">
//         <div className="material-icons">arrow_upward</div>
//       </div>
//     </div>
//   );
// }
