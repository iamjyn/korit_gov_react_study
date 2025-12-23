import { css } from "@emotion/react";

export const layout = css`
    width: 100vw;
    height: 100vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    -webkit-box-shadow: 2px 2px 12px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 2px 2px 12px 0px rgba(66, 68, 90, 1);
    box-shadow: 2px 2px 12px 0px rgba(66, 68, 90, 1);
`;
