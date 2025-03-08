const Header = () => {
  return (
    <div className="bg-white h-[70px] flex justify-between items-center px-5 drop-shadow-md">
      <h1 className="text-xl font-bold flex-1 text-center md:text-left">
        Admin Dashboard
      </h1>
      <button className="bg-red-500 px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Header;
