import "./App.css";
import CityName from "./Components/CityName";
import Clock from "./Components/Clock";
const App = () => {
  return (
    <>
     <div className="app h-screen w-screen bg-[#0f0f0f] flex items-center justify-center">
      <div className="app__background h-[70%] w-[60%] rounded-2xl flex">
        <div className="app__name-clock px-20 py-10 flex flex-col justify-between">
          <CityName/>
          <Clock />
        </div>
        <div className="app__details"></div>
      </div>
     </div>
    </>
  );
};
export default App;