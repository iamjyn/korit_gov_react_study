import React, { useEffect, useRef } from "react";

function Hook08() {
    // Dom 객체에 직접 접근할 때 사용되는 Hook
    // 값을 저장하되, 그 값이 바뀌어도 재렌더링을 발생시키지 않는 상태값
    // (렌더링이 일어나지 않아서 UI업데이트는 없다)
    const inputRef = useRef();
    const intervalValueRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();

        // intervalValueRef.current = setInterval(() => {
        //     console.log("아무거나");
        // }, 1000);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default Hook08;
