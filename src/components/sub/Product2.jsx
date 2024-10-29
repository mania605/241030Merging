//백그라운드 반응형 적용과 제품페이지 디자인 결정 및 치환
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import BackgroundVideo from '../sub/BackgroundVideo';
import Pic from '../common/Pic';


export default function Product() {
    const [ Flickr, setFlickr ] = useState([]);
    console.log(Flickr);

    useEffect(() => {
        const method = 'flickr.people.getPhotos';
        const flickr_api = import.meta.env.VITE_FLICKR_API;
        const myID = '201491599@N03';
        const num = 10;
        const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

        fetch(url)
            .then(data => data.json())
            .then(json => {
                setFlickr(json.photos.photo);
        });
    }, []);

    return (
        <div className="product-page">
            <BackgroundVideo /> 
            <Layout title={"Product"}>
                <section className='productList'>
                    {Flickr.map((data, idx) => {
                        return (
                            <article key={idx}>
                                <Pic 
                                    src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
                                    className = 'pic'
                                />
                                <h3>{data.title}</h3>
                            </article>
                        );
                    })}
                </section>
            </Layout>
        </div>
    );
}