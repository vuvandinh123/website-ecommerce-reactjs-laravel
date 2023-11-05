import { useState } from "react";
import Siderbar from "./Siderbar";
import Table from "./Table";
import { useApiCall } from "../../../hooks";
import { getRequestAdmin } from "../../../utils/requestAdmin";

const MenuAdmin = () => {
  const url = "menus";
  const [menus, setMenus] = useState([]);
  const [isReset, setIsReset] = useState(false);
  useApiCall(
    async () => {
      const res = await getRequestAdmin(url, { limit: 20 });
      console.log("data",res);
      setMenus(res.data);
      setIsReset(false);
      return null;
    },
    [isReset],
    []
  );
  return (
    <div className="m-3">
      <div className="flex bg- p-5 gap-3 rounded-md">
        <div className="basis-1/5 border bg-white rounded-md p-5">
          <Siderbar setIsReset={setIsReset}/>
        </div>
        <div className="basis-4/5">
          <Table menus={menus} />
        </div>
      </div>
    </div>
  );
};

export default MenuAdmin;
