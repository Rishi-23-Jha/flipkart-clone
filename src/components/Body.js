import Carousel from './Carousel';
import  Deals  from './Deals';
import Gadget from './Gadget';
import Header from './Header'
import ImageBanner from './ImageBanner';
import OptionsSection from './OptionsSection';
const Body = () => {
    return (
        <div className='mx-3'>
            <Header/>
            <OptionsSection/>
            <Carousel/>
            <Deals/>
            <ImageBanner/>
            <Gadget/>
        </div>
    )
}

export default Body;