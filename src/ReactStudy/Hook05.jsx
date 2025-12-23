import React, { useState } from "react";

function Hook05() {
    const inputValueEmpty = {
        name: "",
        age: "",
        address: "",
    };

    const [inputValue, setInputValue] = useState(inputValueEmpty);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        // 함수형 업데이트 (prev) = 바뀌기 이전 상태값
        // 여기서 prev는 이 함수를 실행하는 시점의 가장 최신 상태를 보장함
        setInputValue((prev) => {
            return {
                // 이전 상태 객체를 그대로 복사해서 불변성을 지킨다.
                ...prev,
                [name]: value,
            };
        });
    };

    const resetOnClick = () => {
        setInputValue(inputValueEmpty);
    };

    return (
        <div>
            <h1>이름: {inputValue.name}</h1>
            <h1>나이: {inputValue.age}</h1>
            <h1>주소: {inputValue.address}</h1>
            <input
                type="text"
                value={inputValue.name}
                name="name"
                onChange={onChangeHandler}
            />
            <input
                type="text"
                value={inputValue.age}
                name="age"
                onChange={onChangeHandler}
            />
            <input
                type="text"
                value={inputValue.address}
                name="address"
                onChange={onChangeHandler}
            />
            <button onClick={resetOnClick}>리셋</button>
        </div>
    );
}

export default Hook05;
