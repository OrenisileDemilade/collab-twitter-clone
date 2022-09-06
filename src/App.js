import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Aside from './components/Aside';

function App() {
  return (
    <div className='HomePage'>
      <Sidebar/>
      <Middle/>
      <Aside/>
  </div>
  );
}

export default App;
