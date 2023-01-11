import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails"
  

function App() {
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 
      from-cyan-700 to-blue-700`}
    >
      <TopButton />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails/>
    </div>
  );
}

export default App;
