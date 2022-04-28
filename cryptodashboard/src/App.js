import './App.css';
import MainDiv from './components/MainDiv';
// import ShadowScrollbars from './components/Scrollbar';

const App = () => {
  return (
    <div className="App">
    {/* <ShadowScrollbars
    style={{ height: 300 }}> */}
    <MainDiv />
    {/* </ShadowScrollbars> */}
    </div>
  );
}

export default App;
