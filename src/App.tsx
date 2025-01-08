import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import ZenHive from './pages/ZenHive';
import { DialogProvider } from './providers/DialogProvider';

function App() {

  return (
    <DialogProvider>
    <Router>
      <Suspense fallback={<div className='w-screen h-screen bg-black text-white flex items-center justify-center'></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/zenhive" element={<ZenHive />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
    </DialogProvider>
  )
}

export default React.memo(App)
