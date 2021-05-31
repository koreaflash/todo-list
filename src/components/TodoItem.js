import { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextstate) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;
        console.log(id);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>
                <div style={{ color: color }} className={`todo-text ${checked ? 'checked' : ''}`}>
                    <div>{text}</div>
                </div>
                <div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;