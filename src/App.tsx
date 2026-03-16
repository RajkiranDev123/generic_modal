import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";



function App() {
  return (
    <>
    <p className="text-center">Generic Modal Component : Multiple pages can all use the same modal component </p>
      <div className=" bg-gray-300 min-h-screen flex flex-col items-center justify-evenly">
     <Page1/>
     <Page2/>
      </div>
    </>
  );
}

export default App;
