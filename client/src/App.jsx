import { lazy } from "react";


// import Home from "./pages/home/Home";
const Home = lazy(() => import("./pages/home/Home"));

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
