import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Last from './components/Last';

function App() {
  return (
    <div className='HomePage'>
      <Sidebar/>
      <Middle/>
      <Last/>
  </div>
  );
}

export default App;
