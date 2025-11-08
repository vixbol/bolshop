import React from "react";
import { DiDatabase } from "react-icons/di";
import {
  FaAngleRight,
  FaCaretRight,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaTools,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import {
  MdCastConnected,
  MdContactPage,
  MdDashboard,
  MdMoneyOffCsred,
  MdPermMedia,
} from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { SiDailydotdev, SiFireship, SiTraefikproxy } from "react-icons/si";

function NavBarAdmin(props) {
  return (
    <div className="bg-[#060D10] min-md:h-screen p-2">
      <div className="flex items-center justify-center gap-2 text-3xl font-bold p-5 text-yellow-400">
        <SiDailydotdev />
        <h1>BOLSHOP</h1>
      </div>

      {/* <div>
        <div className="flex items-center gap-2 text-xl">
          <SiFireship />
          <h3>Menu Hệ Thống</h3>
        </div>

        <div className="flex items-center gap-2 text-xl">
          <MdMoneyOffCsred />
          <h3>Dịch Vụ Miễn Phí</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaFacebook />
          <h3>Facebook</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaInstagram />
          <h3>Instagram</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaThreads />
          <h3>Threads</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaTiktok />
          <h3>Tiktok</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaYoutube />
          <h3>YouTube</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaTelegram />
          <h3>Telegram</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaXTwitter />
          <h3>X - Twitter</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaGoogle />
          <h3>Google</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <SiTraefikproxy />
          <h3>Proxy</h3>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaTools />
          <h3>Tool - Tiện Ích</h3>
        </div>
      </div> */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <MdDashboard />
          <h3>Dashboard</h3>
        </div>
        <h3 className="text-[#B4B4B2]">Form and Data</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
            <MdPermMedia />
            <h3>Media Management</h3>
            <FaCaretRight className="ml-auto" />
          </div>
          <ul className="flex flex-col gap-2">
            <li className="bg-white px-4 py-2 rounded-xl">Line 1</li>
            <li className="bg-white px-4 py-2 rounded-xl">Line 2</li>
            <li className="bg-white px-4 py-2 rounded-xl">Line 3</li>
            <li className="bg-white px-4 py-2 rounded-xl">Line 4</li>
          </ul>
        </div>

        <div className="flex items-center text-xl bg-white px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <RiVipCrownFill />
            <h3>Vip</h3>
          </div>
          <FaCaretRight className="ml-auto" />
        </div>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <DiDatabase />
          <h3>MetaData</h3>
          <FaCaretRight className="ml-auto" />
        </div>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <MdCastConnected />
          <h3>Cast & Crew</h3>
          <FaCaretRight className="ml-auto" />
        </div>
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
        <h3 className="text-[#B4B4B2]">Help</h3>
        <div className="flex items-center gap-2 text-xl bg-white px-4 py-2 rounded-xl">
          <ImProfile />
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBarAdmin;
