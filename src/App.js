import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import SideMenu from './component/sidemenu';
import Content from './component/content';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <SideMenu />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
