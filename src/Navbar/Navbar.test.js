import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

test('renders learn react link', () => {
	render(<Navbar />)
	const linkElement = screen.getByText(/about skills projects resume/i)
	expect(linkElement).toBeInTheDocument()
})
