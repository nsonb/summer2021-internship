import {popularRes, newRes, nearRes} from './api/discoveryPage';
import RestaurantCarousel from './components/RestaurantCarousel';
import { restaurantData } from './types/type';
import './App.css'

const App = () => {
  return (
    <div>
      popular
      <RestaurantCarousel restaurantList = {popularRes as restaurantData[]}></RestaurantCarousel>
      
    </div>
  );
}

export default App;
/*near
      <RestaurantCarousel restaurantList = {nearRes as restaurantData[]}></RestaurantCarousel>
      new
      <RestaurantCarousel restaurantList = {newRes as restaurantData[]}></RestaurantCarousel>*/