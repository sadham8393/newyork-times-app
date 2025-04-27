import Article from "./pages/Articles/Article";
import { TITLE } from "./constants";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black shadow-sm">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {TITLE}
            </h1>
          </div>
        </div>
      </header>


      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Article />
      </main>

      <footer className="bg-black border-t mt-8">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-sm text-blue-100">
          <p className="mt-1">© {new Date().getFullYear()} NY Times Viewer</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
