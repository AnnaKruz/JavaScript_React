import {render, screen, waitFor} from '@testing-library/react';
import App from '../App';

test('renders learn react link', async () => {
    render(<App/>);
    await waitFor(() => {
        const linkElement = screen.getByText(/Home Page/i);
        expect(linkElement).toBeInTheDocument();
    });
});
