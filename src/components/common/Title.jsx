export default function Title({ color = '#999', children }) {
	return (
		<h1 className='title' style={{ color: color }}>
			{children}
		</h1>
	);
}
