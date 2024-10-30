export default function ColorSelector() {
	const colors = ['222,222,222','0,0,0'];
	const outerStyle = { display: 'flex', gap: 10, position: 'fixed', left: '5vw', top: '4vh', zIndex: 6 };
	const btnStyle = { width: 14, height: 14,      border: '1px solid rgba(50,50,50, 0.5)',  backgroundColor: '#000000',cursor: 'pointer' };
	
	const changeColor = color => {
		document.documentElement.style.setProperty('--keyRGB', color);
	};
	return (
		<nav style={outerStyle}>
			{colors.map(color => (
				<button onClick={() => changeColor(color)} key={color} style={{ ...btnStyle, backgroundColor: `rgb(${color})` }}></button>
			))}
		</nav>
	);
}