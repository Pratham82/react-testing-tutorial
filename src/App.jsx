import './App.css'
import Counter from './components/Counter/Counter'
import Search from './components/SearchPage/Search'
// import HelloWorld from './components/HelloWorld/HelloWorld'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Testing</h2>
        {/* <TodoList /> */}
        {/* <HelloWorld /> */}
        <Search />
        <Counter />
      </header>
    </div>
  )
}

export default App
