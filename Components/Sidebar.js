import { useState } from "next-auth/client";

function Sidebar() {
  const [session, loading] = useState();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <Sidebar />
    </div>
  );
}

export default Sidebar;
