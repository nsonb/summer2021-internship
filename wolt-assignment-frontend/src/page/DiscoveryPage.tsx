import RestaurantCarousel from '../components/RestaurantCarousel'
import {resData} from '../api/discovery';

const DiscoveryPage = () => {
    const renderedRestaurant = resData.map((item) => {
        console.log(item)
        return <RestaurantCarousel restaurantList = {item.restaurants}  title={item.title}></RestaurantCarousel>
    })
    return (
        <div style={style}>
            {renderedRestaurant} 
        </div>
    )
}

const style: React.CSSProperties = {
    width: '60%',
    minWidth: '320px',
    maxWidth: '1024px',
    margin: 'auto',
    padding: '2rem'
}
export default DiscoveryPage;