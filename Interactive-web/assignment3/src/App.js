import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TimeDisplay from './components/TimeDisplay';
import TodoList from './components/TodoList';
import MemoExample from './components/MemoExample';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />}>
            <Route path=":postId" element={<BlogPost />} />
          </Route>
          <Route path="/memo-examples" element={<MemoExample />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/time" element={<TimeDisplay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}