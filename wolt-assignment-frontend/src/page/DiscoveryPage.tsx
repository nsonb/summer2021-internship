import RestaurantCarousel from '../components/RestaurantCarousel'
import {resData} from '../api/discovery';

const DiscoveryPage = () => {
    const renderedRestaurant = resData.map((item) => {
        console.log(item)
        return <RestaurantCarousel restaurantList = {item.restaurants}  title={item.title} key={item.title}></RestaurantCarousel >
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
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
}
export default DiscoveryPage;