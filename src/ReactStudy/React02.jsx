import React from "react";

function React02() {
    console.log("React02 렌더링 됨")
    const student = {
        name: "홍길동",
        age: 20,
        hobby: ["도적질", "정의구현", "적서차별", "탐관오리 척결"],
    };
    return (
        <div>
            <div>이름: {student.name}</div>
            <div>나이: {student.age} ({student.age > 19 ? "성인" : "미성년자"})</div>
            <div>
                <p>취미</p>
                <ul>
                    {student.hobby.map((hobbyName, index) => (
                        <li key={index}>{hobbyName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default React02;
