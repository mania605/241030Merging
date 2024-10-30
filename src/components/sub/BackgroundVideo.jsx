import vid from '../../assets/tech3.mp4';
const BackgroundVideo = () => {
    return (
        <div className='backgroundVideo'>
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4" />
            </video> 
            </div>
            );
        };
export default BackgroundVideo;
