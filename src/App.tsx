import './global.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<SigninForm />} />
        {/* <Route path="/about" element={<About />} /> */}

        {/* private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App