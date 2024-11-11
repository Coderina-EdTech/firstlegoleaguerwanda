// pages/writer/[writer]/index.js
import { useRouter } from "next/router";
import WriterDashboard from "./dashboard"; // Assuming the dashboard component is located in the same directory

const WriterDashboardPage = () => {
  const router = useRouter();
  const { writer } = router.query;

  return <WriterDashboard writer={writer} />;
};

export default WriterDashboardPage;
