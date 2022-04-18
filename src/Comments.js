import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import { Link } from 'react-router-dom';

const Comments = ({ posts, setPosts }) => {
   
   const [postBody, setPostBody] = useState('');

   useEffect(() => {
      const fetchPost = async () => {
         try {
            const response = await api.get('/posts');
            setPosts(response.data);
         } catch (err) {
            if (err.response) {
            // out of 200 response range
               console.log(err.response.data);
               console.log(err.response.status);
               console.log(err.response.headers);
            } else {
               console.log(`Error: ${err.message}`)
            }
         }
      }

      fetchPost();
   }, [setPosts]);

//új poszt
   const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1; // id adás
      const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = { id, dateTime, body: postBody};
      try {
         const response = await api.post('/posts', newPost);
         const allPosts = [...posts, response.data];
         setPosts(allPosts);
         setPostBody('');
      } catch (err) {
         console.log(`Error: ${err.message}`);
      }
   }
   
// poszt törlés
   const handleDelete = async (id) => {
      try {
         await api.delete(`/posts/${id}`)
         const postsList = posts.filter(post => post.id !== id);
         setPosts(postsList);
      } catch (err) {
         console.log(`Error: ${err.message}`);
      }
   }

   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='comments'>
               <div className='commentsBox d-flex flex-column mx-auto col-12 col-md-8 col-lg-8 col-xl-6 col-xxl-5'>
                  <div className='commentForm col-12 col-sm-8 mx-auto p-5 my-5'>
                     <form onSubmit={handleSubmit}>
                           <h4>Írja le véleményét:</h4>
                           <textarea className='form-control mb-3 commentArea'
                              id='postBody'
                              required
                              value={postBody}
                              onChange={(e) => setPostBody(e.target.value)}
                           />
                           <button type='submit' className='btn btn-primary'>Küldés</button>
                     </form>
                  </div>   
                  {posts.length ? ( // Ha nem lenne még vélemény, akkor "nincs vélemény"
                  posts.map(post => (
                     <div className='post mb-4 p-3'>
                        <div className='postDate'>
                           <p>{post.dateTime}</p>
                        </div>
                        <div className='postBody'>
                           <h3>{post.body}</h3>
                        </div>
                        <button className='btn btn-danger' onClick={() => handleDelete(post.id)}>Törlés</button>
                        <Link posts={posts} to={`/edit/${post.id}`}><button className='btn btn-warning ms-2'>Szerkesztés</button></Link>
                     </div>
                  ))) : (
                     <p>Nincs még vélemény!</p>
                  ) }
               </div>   
            </div>
         </div>
      </div>
   )
}

export default Comments