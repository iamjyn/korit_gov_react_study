import React, { useEffect, useState } from "react";

function Hook07() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [h1Name, setH1Name] = useState("");
    const [h1Age, setH1Age] = useState("");

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    };

    const ageOnChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const nameOnClickHandler = () => {
        setH1Name(name);
    };

    const ageOnClickHandler = () => {
        setH1Age(age);
    };

    // []: 의존성 배열(배열안의 상태에 의존하면서, 상태가 바뀔때마다 콜백함수를 계속 실행함
    // 최초에 1회는 무조건 실행됨 => 마운트 시점
    // 안에 상태가 바뀌는 거 => 업데이트 시점
    // 컴포넌트가 소멸이 될 때 => 언마운트 시점 (return => 클린업 함수)

    // useEffect: 렌더링 이후 실행되는 사이드 이펙트(부수효과)를 다루기 위한 훅
    useEffect(() => {
        // 렌더링 이후 실행할 작업
        console.log("마운트 됨");

        return () => {
            // cleanup함수: 컴포넌트가 언마운트 될 때 실행할 작업
            console.log("언마운트 됨");
        };
    }, [name, age]);
    // 의존성 배열 => 상태에 의존하게 해 상태값이 바뀔때마다 이펙트 발생

    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" onChange={nameOnChangeHandler} />
            <button onClick={nameOnClickHandler}>이름 확인</button>
            <input type="text" onChange={ageOnChangeHandler} />
            <button onClick={ageOnClickHandler}>나이 확인</button>
        </div>
    );
}

export default Hook07;
