import { AiFillTwitch } from "react-icons/ai";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { HiDocumentArrowUp, HiUserPlus } from "react-icons/hi2";
import { IoBagAddSharp, IoLogIn } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  //   const user = { email: "sss" };
  const user = null;
  const menu = (
    <>
      <li>
        <NavLink to="/">
          <FaHome size={20}></FaHome> Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/jobs">
          <FaSuitcase size={20}></FaSuitcase> Jobs
        </NavLink>
      </li>
      {user && user.email && (
        <li>
          <NavLink to="/add-jobs">
            <IoBagAddSharp size={20}></IoBagAddSharp>
            Add Jobs
          </NavLink>
        </li>
      )}
      {user && user.email && (
        <li>
          <NavLink to="/Blogs">
            <HiDocumentArrowUp size={20}></HiDocumentArrowUp>
            My Application
          </NavLink>
        </li>
      )}
      {user && user.email && (
        <li>
          <NavLink to="/Blogs">
            <AiFillTwitch size={20}></AiFillTwitch>
            My Jobs
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <div>
          <Link to={"/"} className="flex items-center  font-bold text-xl">
            <img
              src="https://img.icons8.com/?size=160&id=2zhQitqbq98h&format=png"
              alt=""
              className="w-8"
            />
            <h2 className="">CAREER</h2>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex gap-2 items-center">
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=7819&format=png"
                alt=""
                className="w-10 "
              />
            </div>

            <button className="btn btn-neutral btn-sm">Logout</button>
          </div>
        ) : (
          <div className="space-x-2">
            <Link className="btn btn-outline btn-neutral btn-sm">
              Login <IoLogIn size={20}></IoLogIn>
            </Link>
            <Link className="btn btn-outline btn-neutral btn-sm">
              Register <HiUserPlus size={20}></HiUserPlus>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
