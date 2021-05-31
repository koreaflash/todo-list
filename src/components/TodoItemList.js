const { Component } = require("react");
const { default: TodoItem } = require("./TodoItem");

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextstate) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            /*
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    color={color}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )*/

            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }

}

export default TodoItemList;