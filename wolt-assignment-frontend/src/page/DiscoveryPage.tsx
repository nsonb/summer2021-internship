import RestaurantCarousel from '../components/RestaurantCarousel'
import {popularRes, newRes, nearRes} from '../api/discoveryPage';
import { restaurantData } from '../types/type';

const DiscoveryPage = () => {
    console.log(popularRes)
    return (
        <div>
            popular
            <RestaurantCarousel restaurantList = {popularRes as restaurantData[]}></RestaurantCarousel>
        </div>
    )
}
export default DiscoveryPage;