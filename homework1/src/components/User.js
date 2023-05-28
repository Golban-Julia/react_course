import React from 'react';


class User extends React.Component {

    constructor(props){
        super(props);

        this.state={
            name:'Stepan',
            age: 25,
        }
    }

    setUserInfo=()=>{
        this.setState({name:'Mykola', age:40})
    }
    

  render () {
    return(
     
        <div>
            <p>Name:{this.state.name}, age: {this.state.age}</p>
            <button onClick={this.setUserInfo}> Click on me</button>
        </div>
    );
  } 
}

export default User;

// Дан следующий стейт:

// this.state = {name: 'Stepan', age: 25};
// Добавить кнопку, по нажатию на которую 'Stepan' поменяется на 'Mykola', а 25 поменяется на 30.
// Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался, а по второму нажатию - скрывался. 
// Переделайте предыдущую задачу так, чтобы по заходу на страницу текст кнопки был 'показать', а после нажатия на нее - 'скрыть' (ну и так далее - по каждому нажатию текст должен чередоваться).