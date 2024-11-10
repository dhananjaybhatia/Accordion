import Accordian from "./Accordian";
import faqs from "./Data";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Accordian Data={faqs} />
    </div>
  );
}

export default App;
