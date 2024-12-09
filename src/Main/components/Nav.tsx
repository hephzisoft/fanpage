const Nav = () => {
  return (
    <nav className="ml-5 mt-10 flex justify-around text-center items-center px-5">
      <div className="logo">
        <p className="text-2xl italic">
          배우 <span className="text-[#2e5095]">이레</span>
        </p>
      </div>

      <ul className="nav-links flex gap-10 mx-auto">
        <li>Home</li>
        <li>Movies</li>
        <li>Updates</li>
      </ul>

      <button className="border px-5 py-2 rounded-md ">fan account ↗️</button>
    </nav>
  );
};

export default Nav;
