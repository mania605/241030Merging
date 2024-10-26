export default function ColorSelector() {
	const colors = ['40,40,40', '20,20,20', '34, 5, 1'];
	const outerStyle = { display: 'flex', gap: 10, position: 'fixed', left: '5vw', bottom: '10vh', zIndex: 6 };
	const btnStyle = { width: 14, height: 14, borderRadius: '50%', cursor: 'pointer', border: 'none' };
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