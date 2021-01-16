import {popularRes, newRes, nearRes} from './api/discoveryPage.js';
import RestaurantCarousel from './components/RestaurantCarousel'

const App = () => {
  return (
    <div className="App">
      popular
      <RestaurantCarousel restaurantList = {popularRes.restaurants}></RestaurantCarousel>
      near
      <RestaurantCarousel restaurantList = {nearRes.restaurants}></RestaurantCarousel>
      new
      <RestaurantCarousel restaurantList = {newRes.restaurants}></RestaurantCarousel>
    </div>
  );
}

export default App;
