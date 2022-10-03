import './App.css';
import Mouse from './components/Mouse/Mouse';
import Cat from './components/Cat/Cat';
import Field from './components/Field/Field';

function App() {
  return (
    <div className="App">
      <h2>Cat</h2>
      <Field render={(style: React.CSSProperties) => <Cat style={style} />} />
      <h2>Mouse</h2>
      <Field render={(style: React.CSSProperties) => <Mouse style={style}/>}/>
    </div>
  );
}

export default App;
