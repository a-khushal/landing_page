import Appbar from "./components/Appbar";
import GreatThinkers from "./components/Hero";
import HelloGoodbye from "./components/Hero1";
import News from "./components/News";

export default function Home() {
  return (
    <div>
      <div className="h-screen relative">
        <div className="bg-white">
          <Appbar />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="mt-10">
            <GreatThinkers />
          </div>
          <div className="mt-6">
            <HelloGoodbye />
          </div>
        </div>
    </div>
    <div>
      <News/>
    </div>
  </div>
  );
}

