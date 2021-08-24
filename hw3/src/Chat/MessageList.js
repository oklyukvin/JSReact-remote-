import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "2px solid #9c27b0",
    overflow: "auto",
  },

  myMessage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 15px',
    fontFamily: 'system-ui',
  },

  nameStyle: {
    fontStyle: 'italic',
    fontSize: '13px',
    color: '#9c27b0',
  },

  messageStyle: {
    fontSize: '15px',
    color: '#4caf50',
  },
}));

const MessageList = ({ messagesArray, botMessagesArray }) => {
  const classes = useStyles();
  return (
    <div className={classes.messageList}>
      {
        messagesArray.map((message, i) => (
          <>
            <div className={classes.myMessage}>
              <div className={classes.nameStyle}>{message.author}</div>
              <div key={i} className={classes.messageStyle}>{message.trimmedMessageText}</div>
            </div>
          </>
        ))
      }
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;