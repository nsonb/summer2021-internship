import DiscoveryPage from './page/DiscoveryPage';
import Header from './components/Header'
import './App.css'

const App = () => {

  return (
    <div>
      <Header/>
      <div style = {{width: '100%'}}>
        <DiscoveryPage/>
      </div>
    </div>
  );
}

export default App;
