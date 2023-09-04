// Import a CSS file to apply styles in app
import './App.css'

// Import the Desc, Maps, Navbar component from the 'components' directory
import Desc from './components/Desc'
import Maps from './components/Maps'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<>
			{/* Include the Navbar, Desc, Maps component */}
			<Navbar />
			<Desc />
			<Maps />
		</>
	)
}

// Export the App component as the default export of the module
export default App