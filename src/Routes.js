import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { Starships } from './pages/Starships';
import { Navbar } from './components/Navbar';
import { StarshipProfile } from './components/StarshipProfile';

export default () => (
    <BrowserRouter>
    <Navbar/>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="/starships/" element={<Starships/>}/>
            <Route path="/starships/:id/" element={<StarshipProfile/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  