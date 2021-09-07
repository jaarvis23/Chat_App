import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import Header from './components/Header';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID="8fb656ec-d1c3-4182-b323-5842c89a393d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    );
}

export default App;