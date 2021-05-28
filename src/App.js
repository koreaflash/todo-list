import Form from "./components/Form";
import TodoListTemplate from "./components/TodoListTemplate";

const { Component } = require("react");

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;