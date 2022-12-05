import { useState } from "react";
import FriendOnline from "./components/FriendOnline";
import Header from "./components/Header";
import NewFeed from "./components/NewFeed";
import OnYourMine from "./components/OnYourMine";
import Profile from "./components/Profile";
import Sponsor from "./components/Sponsor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="h-[90vh] bg-gray-200 dark:bg-gray-600 fixed top-[10vh] left-0 w-full">
        <div className="container mx-auto flex justify-between gap-10">
          <div className="hidden lg:block flex-[0.6] mt-2">
            <Profile />
          </div>
          <div className="flex-1 h-[90vh] overflow-auto pb-10 mt-2">
            <OnYourMine />
            <NewFeed />
            <NewFeed />
            <NewFeed />
          </div>
          <div className="hidden lg:block flex-[0.6] mt-2">
            <Sponsor />

            <FriendOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
