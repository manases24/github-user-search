import { AppProvider } from "./context";
import { Navbar } from "./Navbar";

function App() {
  return (
    // <AppProvider>
    //   <div className="mx-auto bg-primary text-primary-foreground lg:max-w-3xl">
    //     <Navbar />
    //   </div>
    // </AppProvider>
    <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
  </div>
  );
}

export default App;
