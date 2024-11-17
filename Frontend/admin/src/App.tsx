import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import DefaultLayout from "./layout/DefaultLayout";
import { RouterConfigs } from "./router";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <RouterConfigs />
    </DefaultLayout>
  );
}

export default App;
