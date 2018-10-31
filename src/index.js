import './assets/scss/main.scss';
import "@babel/polyfill";
import { Main } from './routes/main/Main.jsx';

const App = () => <Main/>


ReactDOM.render(<App/>, document.getElementById('root'));