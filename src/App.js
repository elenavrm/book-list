import './App.css';
import image from './girl.png'
import imageTwo from './books.png'
import { ReadingList } from './ReadingList';

function App() {
  return (
    <div className='app'>
    <div className='container'>
      <img src={image} alt='book' width='150px' className='imgOne'/>
    </div>
    <div className='container'>
      <h1>My reading list</h1>
    </div>
    <ReadingList />
    <div className='container'>
      <img src={imageTwo} alt='books' width='90px'/>
    </div>
    </div>
  );
}

export default App;
