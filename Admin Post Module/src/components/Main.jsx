import React, { useState } from 'react';
import './CreatePostForm.css';
import { addPostToFirebase  } from '../firebaseOperation'; // Update path accordingly

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Create a new post object with the form data
      const newPost = {
        title,
        summary,
        description,
        tags,
        isPrivate,
        imageUrl
      };

      // Add the new post to Firebase
      addPostToFirebase(category, newPost);

      console.log('Post submitted successfully!');
      
      // Reset form fields after submission
      setTitle('');
      setSummary('');
      setDescription('');
      setCategory('');
      setTags('');
      setIsPrivate(false);
      setImageUrl('');
    } catch (error) {
      console.error('Error submitting post: ', error);
    }
  };

  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">GulfNews</div>
          <ul className="navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <div className="create-post-container">
        <h1 className="create-post-heading">ADDING POST TO GULFNEWS</h1>
        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-group">
            <label htmlFor="title" className="title-label">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="form-input title-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Summary" className="title-label">Summary</label>
            <input
              type="text"
              id="title"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Post Summary"
              className="form-input title-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your post description here..."
              className="form-input description-input"
              rows={6}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-input"
            >
              <option value="">Select a category for your post</option>
              <option value="UAE">UAE</option>
              <option value="TECH">TECH</option>
              <option value="WORLD">WORLD</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <select
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="form-input"
            >
              <option value="">Select a tag type</option>
              <option value="Heading">Heading</option>
              <option value="Sub Heading Post">Sub Heading Post</option>
              <option value="Simple Post">Simple Post</option>
            </select>
          </div>
          <div className="form-group buttons">
            <button type="submit" className="btn btn-primary submitbtn">Submit</button>
            <button type="button" className="btn btn-secondary cancelbtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
