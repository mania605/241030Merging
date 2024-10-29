//시도해본 파일 정리
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import BackgroundVideo from '../sub/BackgroundVideo';
import Pic from '../common/Pic';

export default function Product() {
    const [Flickr, setFlickr] = useState([]);
    console.log(Flickr);

    useEffect(() => {
        const method = 'flickr.people.getPhotos';
        const flickr_api = import.meta.env.VITE_FLICKR_API;
        const myID = '201491599@N03';
        const num = 9;
        const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

        fetch(url)
            .then(data => data.json())
            .then(json => {
                setFlickr(json.photos.photo);
            });
    }, []);

    const totalImages = Flickr.length;
    const angleStep = 360 / totalImages; // 각 이미지의 간격을 360도에서 나눈 각도로 설정

    return (
        <div className="product-page">

            <Layout title={"Product"}>
            <BackgroundVideo />
                <div className="center-text">AVALLION UNIVERSE</div>
                <section className="productList">
                    {Flickr.map((data, idx) => {
                        const rotation = angleStep * idx; // 각 이미지의 회전 각도 계산
                        return (
                            <article key={idx} style={{
                                    position: "absolute",
                                    transform: `rotate(${rotation}deg) translate(20vw) rotate(-${rotation}deg)`,
                                }}>
                                    
                                <Pic
                                    src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
                                    className="pic"
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