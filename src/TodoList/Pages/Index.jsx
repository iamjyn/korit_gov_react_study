import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";

function Index() {
    const [todoList, setTodoList] = useState(() => {
        const localStorageTodoList = localStorage.getItem("TodoList");
        return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
    });

    const [searchKeyword, setSearchKeyword] = useState("");
    const [filterMode, setFilterMode] = useState("all");

    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(todoList));
    }, [todoList]);

    const filterTodoList = todoList
        .filter((todo) => {
            if (filterMode === "all") {
                return true;
            } else if (filterMode === "complete") {
                return todo.isComplete;
            } else if (filterMode === "incomplete") {
                return !todo.isComplete;
            }
        })
        .filter((todo) => {
            if (searchKeyword.trim().length === 0) {
                return true;
            }
            return todo.content.includes(searchKeyword);
        });

    return (
        <Layout
            setSearchKeyword={setSearchKeyword}
            filterMode={filterMode}
            setFilterMode={setFilterMode}>
            <Main todoList={filterTodoList} setTodoList={setTodoList} />
        </Layout>
    );
}

export default Index;
