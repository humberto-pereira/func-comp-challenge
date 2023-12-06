import css from './App.module.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'


function App() {
    return (
    <div className={css.App}>
        <Navbar />
        <Sidebar />
    </div>
    );
}

export default App;