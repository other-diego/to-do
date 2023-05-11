import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <>
      <h1 className="text-5xl font-bold my-8 text-center">To do</h1>
      <div className="max-w-[800px] mx-auto">
        <form
          className="mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            setTasks([...tasks, message]);
            setMessage("");
          }}
        >
          <textarea
            className="w-full border rounded-md outline-none p-2 text-sm"
            placeholder="Escribe aquí tu tarea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input
            type="submit"
            value="Agregar Tarea"
            className="cursor-pointer bg-green-500 hover:bg-green-600 transition-all 
            rounded-md py-2 text-xl text-white w-full"
          />
        </form>
        <div className="flex flex-col gap-5">
          {tasks.map((taskMessage) => (
            <Card message={taskMessage} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
