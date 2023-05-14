import logo from './logo.svg';
import './App.css';
import TaskListContainer from './components/taskListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListContainer></TaskListContainer>
      </header>
    </div>
  );
}

export default App;
