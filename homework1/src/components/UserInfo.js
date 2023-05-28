import React from 'react';


class UserInfo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isShowInfo: false,
            name:'Stepan',
            age: 25
        };
    }

    handleOpenClick=() =>{
        this.setState({ isShowInfo:true });
    }
    handleClouseClick=() =>{
        this.setState({ isShowInfo: false });
    }
    setUserInfo=()=>{
        this.setState({name:'Mykola', age:30})
    }

    render() {
        const isShowInfo = this.state.isShowInfo;

        
        
        return (
            <div>
                {isShowInfo ?
                    <div>
                        <p>Name:{this.state.name}, age: {this.state.age}</p>
                        <button onClick={this.setUserInfo}> Click on me</button>
                        <button onClick={this.handleClouseClick}>Скрыть</button>
                    </div>
                    :
                    <button onClick={this.handleOpenClick}>Показать</button>
                }
            </div>
        );
    } 
}

export default UserInfo;

// Дан следующий стейт:

// this.state = {name: 'Stepan', age: 25};
// Добавить кнопку, по нажатию на которую 'Stepan' поменяется на 'Mykola', а 25 поменяется на 30.
// Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался, а по второму нажатию - скрывался. 
// Переделайте предыдущую задачу так, чтобы по заходу на страницу текст кнопки был 'показать', а после нажатия на нее - 'скрыть' (ну и так далее - по каждому нажатию текст должен чередоваться).