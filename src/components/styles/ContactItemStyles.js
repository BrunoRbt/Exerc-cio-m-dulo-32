import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Info = styled.div`
    flex: 1;

    h4 {
        margin: 0;
        font-size: 18px;
    }

    p {
        margin: 5px 0;
        font-size: 14px;
        color: #555;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        color: #c0392b;
    }
`;