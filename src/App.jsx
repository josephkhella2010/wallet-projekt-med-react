import { useEffect } from "react";
import PagesRouter from "./pages/PagesRouter";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((store) => store.cardData.mode);
  useEffect;
  useEffect(() => {
    const wrapper = document.querySelector("body");

    wrapper.classList.remove("light", "dark", "green");

    if (mode === "light") {
      wrapper.classList.add("light");
    } else if (mode === "dark") {
      wrapper.classList.add("dark");
    } else if (mode === "green") {
      wrapper.classList.add("green");
    }
  }, [mode]);
  return (
    <>
      <PagesRouter />
    </>
  );
}

export default App;
