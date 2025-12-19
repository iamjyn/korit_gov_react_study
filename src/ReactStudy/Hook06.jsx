import React, { useState } from "react";

// 문제
// input 하나를 만들고 입력된 이름과 값이 일치하는 나이를 h2 태그에 출력하시오
// 만약 일치하는 이름이 없으면 값 없음 출력
function Hook06() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const [view, viewResult] = useState("");

    const profiles = [
        { name: "홍길동", age: 21 },
        { name: "홍길서", age: 22 },
        { name: "홍길남", age: 23 },
        { name: "홍길북", age: 24 },
    ];

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
        // 리액트는 일괄 처리
        // 상태 업데이트 요청이 들어오면 모아서 한번에 철
        // 만약 set함수가 즉시 실행이라면
        // 작은 변화에도 컴포넌트를 다시 렌더링하기 때문에 느려진다.

        const foundProfile = profiles.find((profile) => {
            return profile.name === e.target.value;
        });

        // 선택적 연결(Optional Chaining => ?)
        // 객체를 사용할 때, 속성이 undefined이거나 null일 경우
        // 에러를 발생시키는 대신 undefined를 리턴한다.
        // setResult(foundProfile?.age);

        setResult(foundProfile ? foundProfile.age : "값없음")
    };

    const onClickHandler = () => {
        viewResult(result);
    };

    return (
        <div>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>검색</button>
            <h2>결과: {view}</h2>
        </div>
    );
}

export default Hook06;
