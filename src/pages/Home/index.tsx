import catPng from "@/assets/cat.png";
import catJpeg from "@/assets/cat2.jpeg";
import Tg from "@/assets/telegram.svg";
import Map from "@/assets/map.svg";

const Home = () => {
   return (
      <div>
         Home
         <div>
            <img width={200} src={catPng} alt="Кот" />
            <img width={200} src={catJpeg} alt="Кот" />
            <Tg width={20} height={20} />
            <Map color="red" width={50} height={50} />
         </div>
      </div>
   );
};

export default Home;
