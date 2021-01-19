import DiscoveryPage from './page/DiscoveryPage';
import Header from './components/Header'
import './App.css'

const App = () => {
  const pageContainer: React.CSSProperties = {
    width: '100%'
  }

  const app: React.CSSProperties = {
    
  }

  return (
    <div style = {app}>
      <Header/>
      <div style = {pageContainer}>
        <DiscoveryPage/>
      </div>
    </div>
  );
}

export default App;
/*near
      <RestaurantCarousel restaurantList = {nearRes as restaurantData[]}></RestaurantCarousel>
      new
      <RestaurantCarousel restaurantList = {newRes as restaurantData[]}></RestaurantCarousel>*/