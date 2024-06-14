import Appbar from "./components/Appbar";
import GreatThinkers from "./components/Hero";
import HelloGoodbye from "./components/Hero1";
import News from "./components/News";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-x-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="absolute inset-0">
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
    </div>
  );
}