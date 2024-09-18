import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lightTheme = {
    background: '#ffffff',
    color: '#333',
    buttonBackground: '#4caf50',
    buttonHover: '#45a049',
};

const darkTheme = {
    background: '#333',
    color: '#f4f4f4',
    buttonBackground: '#007BFF',
    buttonHover: '#0056b3',
};

const AppContainer = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: ${(props) => props.theme.background};
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
    background: none;
    border: 1px solid #ccc;
    color: #333;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
        background: #f0f0f0;
    }
`;

const App = () => {
    const [currentContact, setCurrentContact] = useState(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <Provider store={store}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles />
                <AppContainer>
                    <ToggleButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
                        Mudar para {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                    </ToggleButton>
                    <h1 style={{ textAlign: 'center' }}>Lista de Contatos</h1>
                    <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
                    <ContactList setCurrentContact={setCurrentContact} />
                    <ToastContainer />
                </AppContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default App;