import styled from 'styled-components';

export const ContainerBlockCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 1px solid #e6beae;
    border-radius: 15px;
    background-color: #eee4e1;
    padding: 10px 10px;
`;

export const DataBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px 0;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: row;
    p {
        font-weight: bold;
        margin-right: 5px;
    }
    a {
        text-decoration: none;
        color: #000;
        font-weight: bolder;
    }
`;
