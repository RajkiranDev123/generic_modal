import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <>
      <p className="text-center bg-gray-500 text-white p-3">
        Generic Modal Component : Multiple pages can use the same modal
        component{" "}
      </p>
      <p className="text-center bg-gray-500 text-white p-3">
        Generic Button Component : Multiple pages can use the same Button
        component{" "}
      </p>
      <div className=" bg-gray-300 min-h-screen flex flex-col items-center justify-evenly">
        <Page1 />
        <Page2 />
      </div>
    </>
  );
}

export default App;
