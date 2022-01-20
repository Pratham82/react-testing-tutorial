import './App.css'
// import HelloWorld from './components/HelloWorld/HelloWorld'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        {/* <HelloWorld /> */}
      </header>
    </div>
  )
}

export default App
