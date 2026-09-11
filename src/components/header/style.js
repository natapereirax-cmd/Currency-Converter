import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid #000;
    margin-left: 20%;
    margin-right: 20%;

    #header-div, #links-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    #links-div {
        gap: 1rem;
    }

    nav {
        display: flex;
        gap: 1.0rem;
    }

    nav a {
        color: var(--ink-muted);
        text-decoration: none;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid transparent;
    }
    nav a:hover {
        color: #FFBC00;
    }

    nav a.is-active {
        border-bottom-color: #FFBC00;
    }
`