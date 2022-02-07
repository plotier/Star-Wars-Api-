import { render, screen } from '@testing-library/react';
import {StarshipList} from '../../pages/StarshipList'

test("should return a message, cause the StarShipList is not available without logging", ()=>{
    render(<StarshipList/>);
    const starshipListElement = screen.getByTestId('starshipList-test')
    expect(starshipListElement).toHaveTextContent('You must be logged to access the Starship Database');
})