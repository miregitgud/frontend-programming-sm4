/**
 * Membuat Component Hello
 * Component Hello mengemballikan/mencetak UI (elements)
 */
function Hello() {
  return (
    <div>
      <h2>Hello React</h2>
      <p>Saya Frontend Engineer</p>
    </div>
  );
}

// Akses element yang memiliki id root
const rootElement = document.getElementById("root");

// Buat React root untuk menampilkan Component di browser
const root = ReactDOM.createRoot(rootElement);

// Render component Hello ke root
root.render(<Hello />);
