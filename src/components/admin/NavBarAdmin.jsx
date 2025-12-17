import React, { useState } from "react";
import { FaCaretRight, FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdContactPage, MdDashboard } from "react-icons/md";
import { SiDailydotdev } from "react-icons/si";
import { LISTMENU } from "../../untils/Contants";
import { Link } from "react-router-dom";

function NavBarAdmin(props) {
  const [showNav, setShowNav] = useState(null);
  return (
    <div className="bg-[#060D10] min-md:h-screen p-2">
      <div className="flex items-center justify-center gap-2 text-3xl font-bold p-5 text-yellow-400">
        <SiDailydotdev />
        <h1>BOLSHOP</h1>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <MdDashboard />
          <h3>Dashboard</h3>
        </div>
        <h3 className="text-[#B4B4B2]">Form and Data</h3>
        {LISTMENU.map((p, index) => (
          <div className="flex flex-col gap-2">
            <div
              onClick={() => setShowNav(index == showNav ? null : index)}
              className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl"
            >
              {p.icon}
              <h3>{p.title}</h3>
              <FaCaretRight className="ml-auto" />
            </div>
            {showNav == index && (
              <ul className="flex flex-col gap-2">
                {p.subItem.map((s) => (
                  <Link to={s.path} className="bg-white px-4 py-2 rounded-xl">{s.name}</Link>
                ))}
              </ul>
            )}
          </div>
        ))}
        <h3 className="text-[#B4B4B2]">Pages</h3>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <MdContactPage />
          <h3>User Pages</h3>
        </div>
        <h3 className="text-[#B4B4B2]">User Management</h3>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <FaUsers />
          <h3>User Management</h3>
        </div>
        <h3 className="text-[#B4B4B2]">Pages</h3>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <ImProfile />
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBarAdmin;
