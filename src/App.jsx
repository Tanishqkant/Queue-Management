import { useState } from "react";
import "./App.css";
import QueueForm from "./components/form.jsx";
import Display from "./components/Display.jsx";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id, newstatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newstatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />
        <Display
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
