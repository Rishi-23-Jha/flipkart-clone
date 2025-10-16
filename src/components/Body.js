import Carousel from './Carousel';
import  Deals  from './Deals';
import Header from './Header'
import OptionsSection from './OptionsSection';
const Body = () => {
    return (
        <div className='mx-3'>
            <Header/>
            <OptionsSection/>
            <Carousel/>
            <Deals/>
        </div>
    )
}

export default Body;