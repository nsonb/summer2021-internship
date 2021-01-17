import {popularRes, newRes, nearRes} from './api/discoveryPage';
import RestaurantCarousel from './components/RestaurantCarousel';
import { restaurantData } from './types/type';

const App = () => {
  return (
    <div className="App">
      popular
      <RestaurantCarousel restaurantList = {popularRes as restaurantData[]}></RestaurantCarousel>
      near
      <RestaurantCarousel restaurantList = {nearRes as restaurantData[]}></RestaurantCarousel>
      new
      <RestaurantCarousel restaurantList = {newRes as restaurantData[]}></RestaurantCarousel>
    </div>
  );
}

export default App;
