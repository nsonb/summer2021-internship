import Restaurant from './Restaurant';


const RestaurantCarousel = ({restaurantList}) => {
    const renderRestaurant = restaurantList.map(() => {
        return <div></div>
    })
    return <div>
        {renderRestaurant}
    </div>
}
export default RestaurantCarousel