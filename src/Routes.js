import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { StarshipList } from './pages/StarshipList';
import { Navbar } from './components/Navbar';
import { StarshipProfile } from './components/StarshipProfile';



export default () => (
    <BrowserRouter>
    <Navbar/>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="/starships/" element={<StarshipList/>}/>
            <Route path="/starships/:id/" element={<StarshipProfile/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  