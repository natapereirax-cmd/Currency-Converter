import styled from "styled-components";

export const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .currency-input-div, #menu-div, form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .currency-input-div {
        flex-direction: row;
        gap: 3rem;
    }

    #menu-div, form {
        flex-direction: column;
        gap: 0.7rem;
    }

    input, select {
        width: 100%;
        padding: 15px;
        border: 2px solid #e0e0e0;
        border-radius: 12px;
        font-size: 13px;
        transition: all 0.3s ease;
    }

    input:focus, select:focus {
        outline: none;
        border-color: #667eea;
        transform: translateY(-2px);
    }

    button {
        background: linear-gradient(90deg,rgba(255, 140, 0, 1) 0%, rgba(227, 125, 0, 1) 50%, rgba(209, 115, 0, 1) 100%);
        color: #12141c;
        border: none;
        padding: 15px 30px;
        border-radius: 12px;
        font-size: 18px;
        font-weight: 600;
        
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.3s ease;
    }

    button:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: translateY(-2px);
    }

    
    #loading {
        margin: 20px;
        display: none;
    }

    #spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #667eea;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        margin: 0 auto;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(365deg);}
    }
`