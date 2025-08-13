import { Outlet } from "react-router";
import CommonLayout from "./components/layouts/CommonLayout";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <CommonLayout>
        <ScrollToTop />
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
