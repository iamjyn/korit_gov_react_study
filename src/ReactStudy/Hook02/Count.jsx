import React from "react";

function Count({ count }) {
    console.log("Count 컴포넌트 렌더링됨");
    return <div>{count}</div>;
}

export default Count;
