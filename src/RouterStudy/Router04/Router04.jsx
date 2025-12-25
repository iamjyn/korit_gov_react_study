import React, { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

function Component1() {
    const { name } = useParams();
    return <h1>path paramete는 {decodeURI(name)}입니다.</h1>;
}

function Component2() {
    // useSearchParams는 현재 search Params, params를 변경하는 함수 형태의 배열을 반환
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get("name")); // 특정 키 하나의 값을 가져올 수 있다.
        console.log(searchParams.getAll("info")); // 같은 키의 이름으로 된 값을 배열로 모두 가져올 수 있다.
    }, [searchParams]);

    const onClickHandler = () => {
        setSearchParams((prev) => {
            prev.set("info", "busan");
            prev.set("name", "홍길동");
            return prev;
        });
    };

    return (
        <>
            <div>
                <button onClick={onClickHandler}>URI에 'address=busan' 추가/변경</button>
            </div>
        </>
    );
}

function Router04() {
    return (
        <div>
            <Routes>
                <Route path="/param1/:name" element={<Component1 />} />
                <Route path="/param2" element={<Component2 />} />
            </Routes>
        </div>
    );
}

export default Router04;
