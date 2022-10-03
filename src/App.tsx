import './App.css';
import Mouse from './components/Mouse/Mouse';
import Cat from './components/Cat/Cat';
import GreenDiv from './components/GreenDiv/Field';

function App() {
  return (
    <div className="App">
      <h2>Cat</h2>
      <GreenDiv render={(style: React.CSSProperties) => <Cat style={style} />} />
      <h2>Mouse</h2>
      <GreenDiv render={(style: React.CSSProperties) => <Mouse style={style}/>}/>
    </div>
  );
}

export default App;
