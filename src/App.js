import './styles/App.scss';
import PeriodicTable from './components/PeriodicTable';
import { ReactComponent as IconRotate } from './images/rotate-cw.svg';


function App() {
  return (
    <div className='container' tabIndex='0'>
      <div className='rotatewarning'>
        <IconRotate />
        <span>Please rotate your device</span>
        <p>The periodic table is much happier in landscape!</p>
      </div>
      <h1 className='title'>Cloudinary Transformations</h1> 
      <PeriodicTable />
    </div>
  );
}

export default App;
