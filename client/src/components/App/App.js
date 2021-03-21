import { ContainerApp, ChildContainer } from './styled';
const App = ({ children }) => {
    return (
        <ContainerApp>
            <ChildContainer>{children}</ChildContainer>
        </ContainerApp>
    );
};

export default App;
