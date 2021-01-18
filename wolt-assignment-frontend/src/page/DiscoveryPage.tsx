import RestaurantCarousel from '../components/RestaurantCarousel'
import {resData} from '../api/discovery';

const DiscoveryPage = () => {
    const renderedRestaurant = resData.map((item) => {
        console.log(item)
        return <RestaurantCarousel restaurantList = {item.restaurants}  title={item.title}></RestaurantCarousel>
    })
    return (
        <div>
            {renderedRestaurant}
            
        </div>
    )
}
export default DiscoveryPage;