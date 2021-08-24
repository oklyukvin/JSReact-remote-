import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import ChatList from "./ChatList";

const useStyles = makeStyles((theme) => ({
  allChat: {
    display: "flex",
    paddingRight: '230px',
    justifyContent: 'center',
  },

  listWrapper: {
    paddingTop: '10px',
    paddingRight: '20px',
  },

  chatsStyle: {
    backgroundColor: "#0ABAB5",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },

  ChatListComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  chatWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "600px",
    height: "800px",
    border: "2px solid #9c27b0",
    display: "flex",
    flexDirection: "column",
  },
}));

const botName = 'Support';
const myName = 'Oleg';


function App() {

  const [inputMessage, setInputMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);
  const [botMessagesArray, setBotMessagesArray] = useState([]);
  const classes = useStyles();

  const onSendMessage = () => {
    const trimmedMessageText = inputMessage.trim();

    if (trimmedMessageText !== '') {
      setMessagesArray(prev => [...prev,
      {
        trimmedMessageText,
        author: myName,
      },
      ]);
      setInputMessage('');

      setTimeout(() => {

        setMessagesArray(prev => [...prev,
        {
          trimmedMessageText: "Ваше сообщение получено, ожидайте ответа специалиста",
          author: botName,
        },
        ]);
      }, 1000);
    };
  };

  useEffect(() => {
    if (messagesArray.length > 0) {
    };
  }, [setBotMessagesArray, messagesArray]);

  return (
    // <div className={classes.allChat}>

    //   <div className={classes.componentWrapper}>
    //     <span className={classes.ChatListComponent}>
    //       {" "}
    //       <ChatList />
    //     </span>
    //     <div className={classes.chatWrapper}>
    //       <MessageList
    //         messagesArray={messagesArray}
    //       // propChatId={params.chatId}
    //       />
    //       <MessageInput
    //         onClick={onSendMessage}
    //         value={inputMessage}
    //         onChange={(e) =>
    //           setInputMessage((prev) => ({
    //             ...prev,
    //             msg: e.target.value,
    //           }))
    //         }
    //       />
    //     </div>
    //   </div>
    // </div>


    <div className={classes.allChat}>
      <div className={classes.listWrapper}>
        <ChatList />
      </div>
      <div className={classes.chatWrapper}>
        <div className={classes.componentWrapper}>
          <MessageList messagesArray={messagesArray} botMessagesArray={botMessagesArray} />

          <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage} />
        </div>
      </div >
    </div>
  )
};

export default App;