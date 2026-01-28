function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 h-screen w-[90vw] bg-gray-50 p-4">
        <header className="flex flex-col items-center justify-center gap-5 p-5 bg-blue-50 border border-gray-300 rounded-lg">
          <div className="flex items-center justify-evenly gap-5">
            <button></button>
            <button></button>
          </div>
          <div className="flex items-center justify-evenly gap-5">
            <button></button>
            <div className="flex items-center justify-center gap-3">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </header>
        <main className="bg-gray-200 border border-gray-400 shadow-sm rounded-t-lg rounded-b-sm w-full h-full"></main>
      </div>
    </div>
  );
}

export default App;
