import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;

// Создать форму с полями - email, password, firstname, lastname и кнопку сабмит.

// добавить валидацию

// стандартная валидация на email
// password - минимум 1 заглавная буква, 1 цифра, максимум 10, минимум 6 символов
// firstname, lastname - минимум 2 символа, отсутствие чисел.
// Валидация должна быть реалтайм. Юзер вводит значения в инпут и под ним показывается соответствующее сообщение.
//  Текст сообщений на ваше усмотрение.

// Пока все значения инпутов не будут провалидированы, кнопка сабмит не активна. Библиотеки не использовать.
// Использовать подход “controlled component”