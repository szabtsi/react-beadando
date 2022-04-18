import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditPost = ({ posts, handleEdit, editBody, setEditBody }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditBody(post.body);
        }
    }, [post, setEditBody])
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='editComments'>
                <div className='commentsBox d-flex flex-column mx-auto col-12 col-md-8 col-lg-8 col-xl-6 col-xxl-5'>
                    <div className='commentForm col-12 col-sm-8 mx-auto p-5 my-5'>
                        {editBody && // ha van ilyen id-vel vélemény, akkor szerk., ha nincs akkor "vissza a véleményekhez" link...
                            <>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <h4>Vélemény szerkesztése:</h4>
                                    <textarea className='form-control mb-3 commentArea'
                                        id='postBody'
                                        required
                                        value={editBody}
                                        onChange={(e) => setEditBody(e.target.value)}
                                    />
                                    <button type='submit' onClick={() => handleEdit(post.id)} className='btn btn-primary mx-auto'>Küldés</button>
                                </form>
                            </>
                        }
                        {!editBody &&
                            <>
                                <h2>Nem található a vélemény!</h2>
                                <p>
                                    <Link to="/Comments">Vissza a véleményekhez</Link>
                                </p>
                            </>
                        }
                    </div>
                </div>          
            </div>
        </div>    
    </div>
  )
}

export default EditPost