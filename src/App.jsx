import "./App.css";
import FruitsFilter from "./ReactStudy/LifeCycle/FruitsFilter";
import Hook01 from "./ReactStudy/Hook01";
import CountState from "./ReactStudy/Hook02/CountState";
import Hook03 from "./ReactStudy/Hook03";
import Hook04 from "./ReactStudy/Hook04";
import Hook05 from "./ReactStudy/Hook05";
import Hook06 from "./ReactStudy/Hook06";
import Hook07 from "./ReactStudy/Hook07";
import LifeCycleApp from "./ReactStudy/LifeCycle/LifeCycleApp";
import Render from "./ReactStudy/LifeCycle/Render";
import React01 from "./ReactStudy/React01";
import React02 from "./ReactStudy/React02";
import React03 from "./ReactStudy/React03";
import React04 from "./ReactStudy/React04";
import SignupForm from "./ReactStudy/LifeCycle/SignupForm";
import Hook08 from "./ReactStudy/Hook08";
import Emotion1 from "./Emotion/Emotion1";
import Hook09 from "./ReactStudy/Hook09";
import Index from "./TodoList/Pages/Index";
import { BrowserRouter } from "react-router-dom";
import Router01 from "./RouterStudy/Router01/Router01";
import Router02 from "./RouterStudy/Router02/Router02";
import Router03 from "./RouterStudy/Router03/Router03";
import Router04 from "./RouterStudy/Router04/Router04";

function App() {
    // const name = "홍길동";
    // const age = 50;

    return (
        <>
            <BrowserRouter>
                {/* <React01 /> */}
                {/* <React02 /> */}
                {/* <React03
                    name={name}
                    age={age}
                    address={"조선시대"}
                    tel={"987-6543-2109"}
                /> */}
                {/* <React04>
                    <h1>자식요소</h1>
                </React04> */}
                {/* <Hook01 /> */}
                {/* <CountState /> */}
                {/* <Hook03 /> */}
                {/* <Hook04 /> */}
                {/* <Hook05 /> */}
                {/* <Hook06 /> */}
                {/* <Hook07 /> */}
                {/* <Render /> */}
                {/* <LifeCycleApp /> */}
                {/* <FruitsFilter /> */}
                {/* <SignupForm /> */}
                {/* < Hook08 /> */}
                {/* < Emotion1 /> */}
                {/* < Hook09 /> */}
                {/* <Index /> */}
                {/* <Router01 /> */}
                {/* <Router02 /> */}
                {/* <Router03 /> */}
                <Router04 />
            </BrowserRouter>

            {/** BrowserRouter로 감싸진 내부에 있는 컴포넌트들만
             * Routes, Route, Link, useNavigation 같은 라우터 기능을 쓸 수 있다. */}
        </>
    );
}

export default App;
