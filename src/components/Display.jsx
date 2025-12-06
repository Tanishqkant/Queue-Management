export default function Display({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--waiting)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No customer data</p>
      ) : (
        <div className="queue-">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p> {customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => {
                      return onUpdateStatus(customer.id, "serving");
                    }}
                  >
                    Server
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    className="comlete-btn"
                    onClick={() => {
                      return onUpdateStatus(customer.id, "completed");
                    }}
                  >
                    complete
                  </button>
                )}
                <button
                  className="remove-btn"
                  onClick={() => {
                    return onRemove(customer.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
