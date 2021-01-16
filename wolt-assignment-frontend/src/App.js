import {popularRes, newRes, nearRes} from '../api/discovery_page';
import RestaurantCarousel from './components/RestaurantCarousel'

const App = () => {
  return (
    <div className="App">
      <RestaurantCarousel restaurantList = {popularRes.restaurants}></RestaurantCarousel>
      <RestaurantCarousel restaurantList = {nearRes.restaurants}></RestaurantCarousel>
      <RestaurantCarousel restaurantList = {newRes.restaurants}></RestaurantCarousel>
    </div>
  );
}

export default App;
