import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function Router03() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("경로 이동함!");
        console.log(location.pathname);

        if (location.pathname === "/location/2") {
            navigate("/location/3", {
                state: {
                    name: "홍길동",
                    age: 100,
                },
            });
        }
    }, [location]);

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    useEffect(() => {
        console.log("쿼리 파라미터 변경됨");
        console.log("location.search =>", decodeURI(location.search));
    }, [location.search]);

    return (
        <div>
            <Link to={"/location/1"}>location1</Link>
            <Link to={"/location/2"}>location2</Link>
            <Link to={"/location/3"}>location3</Link>
            <Link to={"/location/3?name=홍길서"}>location3-2</Link>
            <Link to={"/location/3?name=홍길남"}>location3-3</Link>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <Routes>
                <Route path="/location/1" element={<h1>location1</h1>} />
                <Route path="/location/2" element={<h1>location2</h1>} />
                <Route path="/location/3" element={<h1>location3</h1>} />
            </Routes>
        </div>
    );
}

export default Router03;
