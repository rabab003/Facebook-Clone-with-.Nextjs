import { useState } from "next-auth/client";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/react/outline";

import {
  CalenderIcon,
  ClockIcon,
  DesktopComputerIcon,
} from "@heroicons/react/react/solid";

function Sidebar() {
  const [session, loading] = useState();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon />
    </div>
  );
}

export default Sidebar;
