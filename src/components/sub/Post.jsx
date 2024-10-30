import Layout from '../components/common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
	const [Posts, setPosts] = useState([]);
	const [SearchText, setSearchText] = useState('');
	//카테고리명이 담길 state
	const [Category, setCategory] = useState('');

	//전체 포스트 목록 초기화를 편하게 하도록 함수 분리
	const fetchAllPosts = () => {
		axios.get('http://localhost:8000/posts').then(res => {
			console.log(res.data);
			setPosts(res.data);
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setSearchText(e.target[0].value);
	};

	// Category 상태값에 따라 기존 Posts에서 해당 카테고리명에 매칭되는 데이터만 filtering해서 FilteredPosts라는 이름의 state로 저장
	// 삼항연사자의 구조를 응용해서 마치 if, else if, else 구문처럼 활용 가능
	const FilteredPosts =
		Category === 'BUSINESS'
			? Posts.filter(post => post.category == 'BUSINESS')
			: Category === 'PERSONAL'
			? Posts.filter(post => post.category == 'PERSONAL')
			: Category === 'IMPORTANT'
			? Posts.filter(post => post.category == 'IMPORTANT')
			: Posts;

	useEffect(() => {
		fetchAllPosts();
	}, []);

	useEffect(() => {
		if (!SearchText) return;
		axios
			.get(`http://localhost:8000/posts-search/?search=${SearchText}`)
			.then(res => {
				console.log(res.data);
				setPosts(res.data);
			})
			.catch(err => console.log(err.message));
	}, [SearchText]);

	return (
		<Layout title='Post'>
			<form className='searchBox' onSubmit={handleSubmit}>
				<input type='text' />
				<button>Search</button>
			</form>

			<select onChange={e => setCategory(e.target.value)}>
				<option value=''>All Notes</option>
				<option value='BUSINESS'>Business</option>
				<option value='PERSONAL'>Personal</option>
				<option value='IMPORTANT'>Important</option>
			</select>

			<button>
				<Link to='/post-add'>Write Post</Link>
			</button>

			{/* FilteredPosts 상태값으로 반복 렌더링 */}
			{FilteredPosts?.map(post => (
				<h3 key={post.id}>
					<Link to={`/post/${post.slug}`}>{post.title}</Link>
				</h3>
			))}
		</Layout>
	);
}
