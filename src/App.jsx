import ToDo from './components/todo/todo.jsx'
import Navbar from './components/navbar'
import './App.css'

export default function App() {
  return (
    <main className="App">
      <Navbar/> 
      <ToDo/>
    </main>
  )
}

