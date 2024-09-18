import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

export const Input = styled.input`
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #dedede;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #4caf50;
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;