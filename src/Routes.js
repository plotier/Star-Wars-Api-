import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { Starships } from './pages/Starships';
import { Navbar } from './components/Navbar';

export default () => (
    <BrowserRouter>
    <Navbar/>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="/Starships/" element={<Starships/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  