import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from './Components/common/ThemeContext.jsx';
import CommonLayout from './layouts/CommonLayout.jsx';
import ContactPage from './Components/contact/ContactPage.jsx';
import PostList from './Components/postList/PostList.jsx';
import Homepage from './Components/homepage/Homepage.jsx';
import BlogPost from './Components/blog/BlogPostPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element ={<CommonLayout/>}>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={<PostList/>}/>
          <Route path="/posts/:postId" element={<BlogPost />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App; 
