import { Card } from "./Card";
import { AppProvider } from "./context";
import { Navbar } from "./Navbar";
import { SearchForm } from "./SearchForm";

function App() {
  return (
    <AppProvider>
      <div className="mx-auto bg-primary text-primary-foreground lg:max-w-3xl">
        <Navbar />
        <SearchForm/>
        <Card/>
      </div>
    </AppProvider>
 
  );
}

export default App;
