import { render, screen } from '@testing-library/react';
import {Home} from '../../pages/Home'

test('should contain a css class named homeBack and not include even a space within a string', ()=>{
    render(<Home/>);
    const homeElement =screen.getByTestId('home-test');
    expect(homeElement.classList.contains('homeBack')).toBe(true)
    expect(homeElement).not.toHaveTextContent(' ')
})