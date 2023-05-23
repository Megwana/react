import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional />
    </div>
  );
}

export default App;