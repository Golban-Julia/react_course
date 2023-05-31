import React from 'react';
import EditModal from './EditModal';


export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPost: null,
      isEditing: false,
      notification: null,
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch(`${API_URL}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
      .catch(error => console.log(error));
  }

  handleEdit = (post) => {
    this.setState({ selectedPost: post, isEditing: true });
    console.log(post)
  }

  handleDelete = (postId) => {
    fetch(`${API_URL}/${postId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          this.setState({ posts: this.state.posts.filter(post => post.id !== postId) });
          this.showNotification('Операция выполнена успешно');
        } else {
          throw new Error('Ошибка удаления');
        }
      })
      .catch(error => console.log(error));
  }

  handleSave = (post) => {
    fetch(`${API_URL}/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          this.setState({
            posts: this.state.posts.map(p => (p.id === post.id ? post : p)),
            selectedPost: null,
            isEditing: false,
          });
          this.showNotification('Операция выполнена успешно');
        } else {
          throw new Error('Ошибка сохранения');
        }
      })
      .catch(error => console.log(error));
  }

  showNotification = (message) => {
    this.setState({ notification: message }, () => {
      setTimeout(() => {
        this.setState({ notification: null });
      }, 3000);
    });
  }

  render() {
    const { posts, selectedPost, isEditing, notification } = this.state;

    return (
      <div className='container'>
        <div className='posts'>
          {notification && <div className="notification">{notification}</div>}
          <h1>Posts</h1>
            <ul>
              {posts.map(post => (
              <div className='posts__block'>
                <li key={post.id} >
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <div className='btn_block'>
                    <button onClick={() => this.handleEdit(post)}>Редактировать</button>
                    <button onClick={() => this.handleDelete(post.id)}>Удалить</button>
                  </div>
                </li>
                </div>
              ))}
            </ul>
          {isEditing && selectedPost ? (
            <EditModal post={selectedPost} onSave={this.handleSave} onClose={() => this.setState({ isEditing: false })} />
          ) : null}
        </div>
      </div>
    );
  }
}


export default PostList;