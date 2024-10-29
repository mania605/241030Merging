//플리커 프로토타입
import Layout from '../common/Layout';
import productData from '../data/productData';
import BackgroundVideo from '../sub/BackgroundVideo';

const Product = () => {
    console.log(productData);
    return (
        <div className="product-page">
            <BackgroundVideo /> 
            <Layout title="Product" className="product-content">
                {productData.map((product, idx) => (
                    <article key={idx}>
                        <div className="pic">
                            <img src={'/' + product.pic} alt={product.name} />
                        </div>
                        <div className="txt">
                            <h2>{product.name}</h2>
                            <p>{product.products}</p>
                        </div>
                    </article>
                ))}
            </Layout>
        </div>
    );
};

export default Product;





			/*{<p>Product Page</p>

			<article>
			

			</article> } */