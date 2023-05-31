import React from 'react';

class EditModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: props.post.title,
        body: props.post.body,
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSave = () => {
      const { post } = this.props;
      const updatedPost = { ...post, title: this.state.title, body: this.state.body };
      this.props.onSave(updatedPost);
    }
  
    render() {
      const { onClose } = this.props;
      const { title, body } = this.state;
  
      return (
        <div className="modal">
          <h3>Редактирование поста:</h3>
          <label forHtml='title'>Заголовок:</label>
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={this.handleInputChange}     
            />
          <label forHtml='body'>Содержание:</label>
            <textarea 
                name="body" 
                value={body} 
                onChange={this.handleInputChange}
                rows="4"
                cols="40" 
             />
          <div className='btn_block'>
            <button className='btn_save' onClick={this.handleSave}>Сохранить</button>
            <button className='btn_clouse' onClick={onClose}>Отмена</button>
          </div>
        </div>
      );
    }
  }

export default EditModal;