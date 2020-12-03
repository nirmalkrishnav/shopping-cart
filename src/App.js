function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="p-3">

        <div className="grid grid-cols-3 gap-4">
          <div className=""></div>
          <div className="text-center">
            <a href="/" className="text-yellow-600 font-bold">Wroomlando</a>
          </div>
          <div className=""></div>
        </div>


      </header>
      <main className="flex-grow p-3">
        Content
      </main>
      <footer className="bg-gray-900 text-white p-3">
        footer
      </footer>
    </div>
  );
}

export default App;
