import Restaurant from './Restaurant';

const RestaurantCarousel = ({restaurantList}) => {
    const renderRestaurant = restaurantList.map((restaurant) => {
        return <Restaurant restaurant={restaurant} key={restaurant.blurhash}></Restaurant>
    })

    return (
        <div>
            {renderRestaurant}
        </div>
    )
}
export default RestaurantCarousel