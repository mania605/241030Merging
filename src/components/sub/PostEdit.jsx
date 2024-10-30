import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function PostEdit() {
	const { slug } = useParams();
	const [Data, setData] = useState(null);
	const navigate = useNavigate();

	const ref_title = useRef(null);
	const ref_body = useRef(null);
	const ref_category = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();

		const editData = {
			title: ref_title.current.value,
			body: ref_body.current.value,
			category: ref_category.current.value
		};

		axios
			.put(`http://localhost:8000/posts/${slug}/`, editData)
			.then(res => {
				console.log(res);
				navigate('/post');
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		axios
			.get(`http://localhost:8000/posts/${slug}`)
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	// 현재 넘어온 상세페이지 전용 모델의 정보에 따라 select의 option활성화
	useEffect(() => {
		ref_category.current.value = Data?.category;
	}, [Data]);

	return (
		<Layout title='Edit Post'>
			<form onSubmit={handleSubmit}>
				<select name='category' id='category' ref={ref_category}>
					<option value='PERSONAL'>Personal</option>
					<option value='BUSINESS'>Busniness</option>
					<option value='IMPORTANT'>Important</option>
				</select>
				<br />
				<input ref={ref_title} type='text' defaultValue={Data?.title} />
				<br />
				<textarea ref={ref_body} defaultValue={Data?.body}></textarea>
				<br />
				{/* 수정취소 버튼 클릭시 폼요소를 비우는게 아닌 이전 화면으로 되돌아감 */}
				<input type='reset' value='수정취소' onClick={() => navigate(-1)} />
				<input type='submit' value='수정' />
			</form>
		</Layout>
	);
}
