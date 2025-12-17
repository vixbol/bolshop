import React from "react";
import NavBarAdmin from "../../../components/admin/NavBarAdmin";
import HeaderAdmin from "../../../components/admin/HeaderAdmin";
import AdminRouter from "../../../routers/AdminRouter";
import ChristmasBackground from "../../../components/background/ChristmasBackground";
import SnowfallCanvas from "../../../components/background/SnowfallCanvas";

function HomeAdmin(props) {
  return (
    <div className="md:flex">
      <NavBarAdmin />
      <div className="flex-1">
         <HeaderAdmin />
        <ChristmasBackground> 
            <SnowfallCanvas  count={160} />
            <AdminRouter />
        </ChristmasBackground>
       
      </div>
    </div>
  );
}

export default HomeAdmin;
