import Restaurant from './Restaurant';
import { restaurantData } from '../types/type';

const RestaurantCarousel = (props: {restaurantList : restaurantData[]}) => {
    const renderRestaurant = props.restaurantList.map((restaurant:restaurantData) => {
        return <Restaurant restaurant={restaurant} key={restaurant.blurhash}></Restaurant>
    })

    return (
        <div>
            {renderRestaurant}
        </div>
    )
}
export default RestaurantCarousel