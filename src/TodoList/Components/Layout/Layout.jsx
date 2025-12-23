import React from "react";

/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Header from "../Header/Header";

function Layout({ children, setSearchKeyword, filterMode, setFilterMode }) {
    return (
        <div css={s.layout}>
            <div>
                <div css={s.container}>
                    <Header
                        filterMode={filterMode}
                        setFilterMode={setFilterMode}
                        setSearchKeyword={setSearchKeyword}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
