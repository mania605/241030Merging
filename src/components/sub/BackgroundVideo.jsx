import vid from '../../assets/tech3_1.mp4'

const BackgroundVideo = () => {
    return (
        <div className='BackgroundVideo'>
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4" />
            </video> 
            </div>
            );
        };

export default BackgroundVideo;