import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

function App() {
  return (
    <main className="px-4 text-gray-900">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ALISSONDEV</h1>
        <div>
          <FontAwesomeIcon icon={faBars} size="2x" /> 
        </div>
      </nav>
    </main>
  ); 
}

export default App; 
