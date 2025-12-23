import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
    const [inputValue, setInputValue] = useState("");

    const inputOnChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    // 13 = 엔터키
    const onKeyDownHandler = (e) => {
        if (e.keyCode !== 13) {
            return;
        }
        if (inputValue.trim().length === 0) {
            return;
        }

        setTodoList((prev) => {
            const newId = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
            const newTodo = {
                id: newId,
                content: inputValue,
                isComplete: false,
            };

            return [...prev, newTodo];
        });

        setInputValue("");
    };

    const checkBoxOnChangeHandler = (todoId) => {
        setTodoList((prev) =>
            prev.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    };
                }
                return todo;
            })
        );
    };

    const deleteOnClickHandler = (todoId) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    };

    return (
        <div css={s.container}>
            <div css={s.listContainer}>
                <ul>
                    {todoList.map((todo) => (
                        <li key={todo.id}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={todo.id}
                                    checked={todo.isComplete}
                                    onChange={() =>
                                        checkBoxOnChangeHandler(todo.id)
                                    }
                                />
                                <label htmlFor={todo.id}></label>
                                <label htmlFor={todo.id}>{todo.content}</label>
                            </div>
                            <div
                                css={s.trashBoxContainer}
                                onClick={() => deleteOnClickHandler(todo.id)}>
                                <IoTrash />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input
                    type="text"
                    placeholder="할일을 입력하세요."
                    value={inputValue}
                    onChange={inputOnChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>
        </div>
    );
}

export default Main;
