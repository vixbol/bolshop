import { useState } from "react";
import { FaUser } from "react-icons/fa";
import {
  IoIosLogOut,
  IoIosMail,
  IoIosNotifications,
  IoIosSearch,
  IoIosSettings,
} from "react-icons/io";

function HeaderAdmin() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-[#27403E] w-full text-white flex justify-between items-center p-5 relative">
      <h1 className="text-xl flex items-center">Hello Vixbol</h1>

      <div className="flex items-center gap-4 text-3xl relative">
        <IoIosSearch />
        <IoIosMail />
        <IoIosNotifications />
        <img
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/582634431_2635765106783608_3460177038836837196_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHoHt8M1KNrp1oFWE-keTO87ACaeX9Od1jsAJp5f053WOQU02qQHZYABoWFPQ9xV0pciwc6NpGYq7ncoYfFX5Yc&_nc_ohc=dDjbX66To2IQ7kNvwFp0bcB&_nc_oc=AdkLLO3IhQS3UrfCK3B0-P0ZMgjdp35JiEjTO6HdK1s4P1uBk8VyoHfg7tNNDVAO8HoFAB_jd8dKVTXxnUKXJZMc&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=9eTgAjhfCe2QPinmCMnexg&oh=00_Afhdyj-hDP4VlYvWHpMB7-Mh_4Zb4xObg5b_aJUfmqzGIw&oe=6921EFB0"
          alt="avatar"
        />
        {showMenu && (
          <ul className="flex flex-col gap-2 text-black bg-white absolute top-15 right-0 rounded-md p-2 shadow-lg">
            <li className="items-center px-4 py-2 rounded-xl flex gap-2 hover:bg-gray-100 cursor-pointer">
              <FaUser />
              <p>Profile</p>
            </li>
            <li className="items-center px-4 py-2 rounded-xl flex gap-2 hover:bg-gray-100 cursor-pointer">
              <IoIosSettings />
              <p>Settings</p>
            </li>
            <li className="items-center px-4 py-2 rounded-xl flex gap-2 hover:bg-gray-100 cursor-pointer">
              <IoIosLogOut />
              <p>Logout</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default HeaderAdmin;
