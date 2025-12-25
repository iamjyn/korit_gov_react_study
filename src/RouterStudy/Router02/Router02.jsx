import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Page1() {
    return (
        <>
            <div>
                <h1>Page</h1>
                <Routes>
                    <Route path="/page1" element={<h1>페이지 1입니다.</h1>} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </>
    );
}

function Page2() {
    return (
        <>
            <div>
                <h1>페이지 2입니다.</h1>
            </div>
        </>
    );
}

function Router02() {
    return (
        <div>
            <div>
                <header>
                    <Link to={"/page/page1"}>page1</Link>
                    <Link to={"/page/page2"}>page2</Link>
                    <Link to={"/name/name1"}>name1</Link>
                    <Link to={"/name/name2"}>name2</Link>
                </header>
            </div>
            <Routes>
                <Route path="/page/*" element={<Page1 />} />
                <Route
                    path="/name/*"
                    element={
                        <Routes>
                            <Route
                                path="/name1"
                                element={<h1>홍길동</h1>}
                            />
                            <Route
                                path="/name2"
                                element={<h1>김길동</h1>}
                            />
                        </Routes>
                    }
                />
                {/* 하위 라우트가 있는 경우 애스터리스크 표기 */}
            </Routes>
        </div>
    );
}

export default Router02;
