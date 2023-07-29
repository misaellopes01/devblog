// Imorting Css File
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Divider } from "./components/Divider/Divider";
import { Outlet } from "react-router-dom";



export function App() {
  
  return (
    <>
      <Header />
      <Divider />
      <Outlet/>
      <Footer />
    </>
  );
}
