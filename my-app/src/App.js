import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import NestingComponents from './components/NestingComponents'
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

function App() {
  return (
    <div className="App">
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;