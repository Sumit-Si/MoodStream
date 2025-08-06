import { Heart, UserCircle2 } from "lucide-react";
import ThemeBtn from "./ThemeBtn";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex sticky z-50 top-1 justify-between rounded-2xl shadow-md bg-base-300/90 items-center p-5 w-full mb-3">
      <div id="brand">
        <NavLink to={"/"} className="text-lg font-bold">
          MoodStream
        </NavLink>
      </div>
      <div id="navbar" className="flex items-center gap-5">
        {[
          { content: "Home", redirectTo: "" },
          { content: "Explore", redirectTo: "/explore" },
          { content: "Your Library", redirectTo: "/your-library" },
        ].map((navItem, index) => (
          <h3 key={index}>
            <NavLink
              to={navItem.redirectTo}
              className={({ isActive }) =>
                `text-sm font-semibold ${
                  isActive ? "text-rose-600" : "text-base-content"
                }`
              }
            >
              {navItem.content}
            </NavLink>
          </h3>
        ))}
        <div className="flex gap-2 items-center">
          {/* Favorite */}
          <NavLink to={"/liked-songs"} className={({ isActive }) =>
                `bg-base-content/10 rounded-full p-2 ${
                  isActive ? "text-rose-600" : "text-base-content"
                }`
              }>
            <Heart className="w-5 h-5" />
          </NavLink>
          <div className="bg-base-content/10 rounded-full p-2">
            <UserCircle2 className="w-5 h-5" />
          </div>
          {/* profile */}
          {/* <img src="" alt="profile" /> */}
        </div>
        <ThemeBtn />
      </div>
    </div>
  );
}

export default Navbar;
