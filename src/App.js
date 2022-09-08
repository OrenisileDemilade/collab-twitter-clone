import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Aside from './components/Aside';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='main'>
      <div className='HomePage'>
        <Sidebar />
        <div className='other'>
          <Middle/>
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
