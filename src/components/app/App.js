import Head from "../head/head"
import Timer from "../timer/timer"

import './app.css';

function App() {
  return (
    <div className="container">
      <Head/>
      <div className="body">
        <Timer/>
      </div>
    </div>
  );
}

export default App;
