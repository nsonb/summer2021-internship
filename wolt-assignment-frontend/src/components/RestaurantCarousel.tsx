import Restaurant from './Restaurant';

const RestaurantCarousel = ({restaurantList}) => {
    const renderRestaurant = restaurantList.map((restaurant) => {
        return <Restaurant restaurant={restaurant} key={restaurant.blurhash}></Restaurant>
    })

    const style = {
        display: 'flex',
        flexDirection: 'horizontal'
    }
    return (
        <div style={style}>
            {renderRestaurant}
        </div>
    )
}
export default RestaurantCarousel