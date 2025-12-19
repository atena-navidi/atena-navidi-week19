import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ search, setSearch }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white p-4 rounded-2xl mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-right">
          <p className="text-sm font-semibold">
            {user?.username || "کاربر"}
          </p>
          <p className="text-xs text-gray-400">مدیر</p>
        </div>
      </div>

      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو کالا"
          className="bg-gray-100 rounded-xl pr-10 pl-4 py-2 w-64 text-right"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          🔍
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="text-red-500 text-sm"
      >
        خروج
      </button>
    </header>
  );
};

export default DashboardHeader;
