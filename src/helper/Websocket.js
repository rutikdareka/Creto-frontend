export function connectWebSocket() {
  const socket = new WebSocket("ws://localhostL:5000");

  socket.onopen = () => {
    console.log("WebSocket connection established.");
  };

  socket.onclose = (event) => {
    console.log(`WebSocket connection closed: ${event.reason}`);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  return socket;
}
