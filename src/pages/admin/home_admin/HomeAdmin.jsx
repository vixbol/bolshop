import React from "react";
import NavBarAdmin from "../../../components/admin/NavBarAdmin";
import HeaderAdmin from "../../../components/admin/HeaderAdmin";

function HomeAdmin(props) {
  return (
    <div className="flex">
      <NavBarAdmin />
      <div className="flex-1">
        <HeaderAdmin />
      </div>
    </div>
  );
}

export default HomeAdmin;
