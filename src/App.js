import NavigationBar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Comments from './Comments';
import Contacts from './Contacts';
import EditPost from './EditPost';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api/posts';
import { format } from 'date-fns';

function App() {

  const [posts, setPosts] = useState([]);
  const [editBody, setEditBody] = useState('');
  const history = useHistory();

  // komment szerkesztés
  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, dateTime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => posts.id === id ? { ...response.data } : post));
      setEditBody('');
      history.push('/Comments');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <NavigationBar />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/about" component={About}>
         <About />
        </Route>
        <Route path="/services" component={Services}>
         <Services />
        </Route>
        <Route path="/comments" component={Comments}>
         <Comments posts={posts} setPosts={setPosts}/>
        </Route>
        <Route path="/contacts" component={Contacts}>
         <Contacts />
        </Route>
        <Route path="/edit/:id">
          <EditPost posts={posts} editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
