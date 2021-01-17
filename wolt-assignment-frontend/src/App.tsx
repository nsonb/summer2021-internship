import {popularRes, newRes, nearRes} from './api/discoveryPage';
import RestaurantCarousel from './components/RestaurantCarousel'

const App = () => {
  return (
    <div className="App">
      popular
      <RestaurantCarousel restaurantList = {popularRes}></RestaurantCarousel>
      near
      <RestaurantCarousel restaurantList = {nearRes}></RestaurantCarousel>
      new
      <RestaurantCarousel restaurantList = {newRes}></RestaurantCarousel>
    </div>
  );
}

export default App;
