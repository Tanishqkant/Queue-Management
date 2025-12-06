import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmition = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) {
      return alert("Please add valid data");
    } else {
      onAdd({ name, service });
      setName("");
      setService("");
    }
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmition}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Consultation">Consultation</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus />
          Add Customer
        </button>
      </form>

      {/* My version  */}
      {/* <div>
        <h2>Add to Queue</h2>
        <input type="text" placeholder="Enter Service" />
        <select name="Service" id="Service">
          <option value="Payment">Payment</option>
          <option value="Teach">Teach</option>
          <option value="FC">FC25</option>
        </select>
        <button onClick={handleSubmition}>Add Customer</button>
      </div> */}
    </>
  );
}
