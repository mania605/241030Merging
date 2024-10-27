import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { Link } from 'react-router-dom';
import Content from '../common/Content';
import { useYoutubeQuery } from '../../hooks/useYoutube';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();

	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });


	return (
		<Layout title={'YOUTUBE'}>
				<h1>AVALLION</h1>




				<Content delay={1}>
						{isPending && <p>Loading...</p>}
						
						{/* 비디오 카드를 8개까지만 렌더링 */}
						<div className="video-grid">
								{Vids?.slice(0, 8).map((vid, idx) => (
										<article key={idx} className="video-card">
										 	<p className="round">●</p>
												<h3>
													
														<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 53)}</Link>
												</h3>
												<div className="txt">
														<p>{shortenText(vid.snippet.description, 50)}</p>
														<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
												</div>
												<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
										</article>
								))}
						</div>
				</Content>
		</Layout>
);
}