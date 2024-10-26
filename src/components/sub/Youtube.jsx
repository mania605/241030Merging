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
{/* <h1>AVALLION YOUTUBE VIDEOS</h1>
	<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/0XPfwjw0z-Q?autoplay=1" 
    allow="autoplay" frameborder="0" allowfullscreen>
</iframe>   */}

<main class="wrapper">
      <div class="video">
        <div class="video__info">
          <h2 class="video__info__title">AVALLION </h2>
          <p class="video__info__desc">BRAND STORY</p>
        </div>
        <video class="video__item" loop>
 
          <source src="https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL" type="video/webm" />
        </video>
      </div>
      <div class="video">
        <div class="video__info">
          <h2 class="video__info__title">STEP into possibilities</h2>
          <p class="video__info__desc">First Fragrance</p>
        </div>
        <video class="video__item" loop> 
          <source src="https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL" type="video/webm" />
        </video>
      </div>


    </main>
    <script defer src="./scripts.js"></script>


			<Content delay={1}>
				{isPending && <p>Loading...</p>}
				{Vids?.map((vid, idx) => {  
					return (
						<article key={idx}>
							<h3>
								<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 60)}</Link>
							</h3>
							<div className='txt'>
								<p>{shortenText(vid.snippet.description, 150)}</p>
								<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
							</div>
							<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						</article>
					);
				})}
			</Content>
		</Layout>
	);
}
 

