import Loading from './components/Loading';
import Latest from './components/Latest';
import Footer from './components/Footer';
import Drivers from './components/Drivers';
import Constructors from './components/Constructors';

function App() {
  return (
    <main className="container">
      <Latest />
      <div className="content">
        <Drivers />
        <Constructors />
      </div>
      <Footer />
    </main>
  );
}

export default App;
