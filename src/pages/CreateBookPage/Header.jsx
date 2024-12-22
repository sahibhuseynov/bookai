import { AiOutlineLogout, AiOutlineHome, AiOutlineUser } from "react-icons/ai";

function Header({ onLogout }) {
  return (
    <header className="flex items-center justify-between bg-darkblue2 text-white p-4">
      <div className="flex items-center gap-4">
        <AiOutlineHome className="text-2xl cursor-pointer" />
        <AiOutlineUser className="text-2xl cursor-pointer" />
        <span className="text-lg font-semibold">Create Book</span>
      </div>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded"
        onClick={onLogout}
      >
        <AiOutlineLogout/>
        Logout
      </button>
    </header>
  );
}

export default Header;
