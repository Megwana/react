import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import NestingComponents from './components/NestingComponents'
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";

function App() {
  return (
    <div className="App">
      <LifeCyclesCDU />
    </div>
  );
}

export default App;