import { render, screen } from '@testing-library/react';
import { StarshipProfile } from '../StarshipProfile';

test('should render StarshipProfile component showing, at least, the "Manufacturer" key', ()=>{
    render(<StarshipProfile/>);
    const starshipProfileElement =screen.getByTestId('starshipProfile-test');
    expect(starshipProfileElement).toBeInTheDocument();
    expect(starshipProfileElement).toHaveTextContent('Manufacturer')
})