import styled from 'styled-components';

export const ContainerApp = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ecf8f8;
    padding: 10px 0;
    height: 100%;
    p {
        margin: 0;
    }
`;

export const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid #eee4e1;
    border-radius: 15px;
    padding: 5px;
    background-color: #e7d8c9;
`;
