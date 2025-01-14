import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center text-neutral-0">
      <Header />
      <h1 className="mb-4 text-center text-4xl font-bold">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-center text-neutral-500">
        Secure your spot at next year's biggest coding conference
      </p>
      <Form />
    </div>
  );
}

export default App;
