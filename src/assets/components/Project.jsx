import Bookstore from "./Projects/Bookstore";
import Folio from "./Projects/Folio";
import WeatherApp from "./Projects/WeatherApp";

const Project = () => {
  return (
    <ul className="group/list">
      <Bookstore />
      <WeatherApp />
      <Folio />
    </ul>
  );
};

export default Project;
