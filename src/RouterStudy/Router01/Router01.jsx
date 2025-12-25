import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

/**
 * React Router Dom
 * 리액트 => SPA (Single Page Application)
 * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
 * => 페이지의 주소나 링크를 클릭했을 때,
 * 페이지 전체를 새로고침하지 않고 특정 주소에 맞는 컴포넌트만 보여주어서
 * 마치 여러 페이지가 있고 이동을 하는 것처럼 동작하는 것
 */

function Router01() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <a href="/">홈</a>
                <a href={"/color/red"}>RED</a>
                <a href={"/color/blue"}>BLUE</a>
                <a href={"/color/orange"}>ORANGE</a>
                {/* a태그는 전체 새로고침됨, 리액트 쓰는 의미가 없어짐 */}

                <Link to={"/"}>홈화면(Link)</Link>
                <Link to={"/color/red"}>RED(Link)</Link>
                <Link to={"/color/blue"}>BLUE(Link)</Link>
                <Link to={"/color/orange"}>ORANGE(Link)</Link>
                {/* Link를 쓰면 SPA 장점을 살릴 수 있음 */}

                <button onClick={() => navigate("/")}>홈(Navigate)</button>
                <button onClick={() => navigate("/color/red")}>
                    RED(Navigate)
                </button>
                <button onClick={() => navigate("/color/blue")}>
                    BLUE(Navigate)
                </button>
                <button onClick={() => navigate("/color/orange")}>
                    ORANGE(Navigate)
                </button>
                {/* ex) 회원가입 후 로그인 버튼 */}
                <div css={s.countBox}>
                    <h1>{count}</h1>
                    <button onClick={() => setCount((prev) => prev + 1)}>
                        +1
                    </button>
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<div css={s.main("white")}>메인 홈화면</div>}
                />
                <Route
                    path="/color/red"
                    element={<div css={s.main("red")}>RED 화면</div>}
                />
                <Route
                    path="/color/blue"
                    element={<div css={s.main("blue")}>BLUE 화면</div>}
                />
                <Route
                    path="/color/orange"
                    element={<div css={s.main("orange")}>ORANGE 화면</div>}
                />
            </Routes>
            {/*
             * Route를 쓰려면 Routes로 감싸야함
             * Route는 경로 하나만 */}
        </div>
    );
}

export default Router01;
