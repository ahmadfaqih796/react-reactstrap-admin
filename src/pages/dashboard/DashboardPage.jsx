import React from "react";
import { usePageContext } from "../../contexts/PageContext";

const DashboardPage = () => {
  const { setPage } = usePageContext();
  React.useEffect(() => {
    setPage({
      title: "Dashboard",
      subtitle: "Halaman utama dashboard",
    });
  }, [setPage]);
  return <div>DashboardPage</div>;
};

export default DashboardPage;
