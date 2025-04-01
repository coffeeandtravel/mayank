import Bookstore from "./Projects/Bookstore";
import Folio from "./Projects/Folio";
import TextUtils from "./Projects/TextUtils";
import WaggingTails from "./Projects/WaggingTails";
import WeatherApp from "./Projects/WeatherApp";

const Project = () => {
  return (
    <ul className="group/list">
      <WaggingTails/>
      <Bookstore />
      <WeatherApp />
      <TextUtils/>
      <Folio />
    </ul>
  );
};

export default Project;
