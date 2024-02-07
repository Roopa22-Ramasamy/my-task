import ChatBot from 'react-simple-chatbot';
const Chat = () => {
  return (
    <div style={{marginTop:'-10px'}}>
    <ChatBot
       steps={[
        { id: '1', message: 'Hello, how can I help you?', trigger: '2' },
        { id: '2', user: true, trigger: '3' },
        { id: '3', message: 'Welcome to asana.',trigger:'4' },
        { id: '4', message: 'Manage your task to reach your goal', end: true }, 
       
      ]}
    />

    </div>
  )
}

export default Chat