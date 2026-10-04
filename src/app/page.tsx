import Banner from './Components/Banner';
import Thelibrary from './Components/Thelibrary';
import WorkoutPage from "./workouts/page";


const page = () => {
  return (
    <div>
      <Banner />
      <Thelibrary />
      <WorkoutPage/>
    </div>
  );
};

export default page;