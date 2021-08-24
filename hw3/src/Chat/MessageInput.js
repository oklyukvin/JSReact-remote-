// import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "0px 10px",
    width: "70%",
  },

  button: {
    margin: "0px 10px",
  },

  inputWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const MessageInput = ({ inputMessage, setInputMessage, onSendMessage }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <TextField
        className={classes.input}
        placeholder='Введите сообщение'
        value={inputMessage}
        autoFocus
        multiline
        onChange={e => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            onSendMessage();
          }
        }}
        classes={{
          root: classes.input,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onSendMessage}
        classes={{
          root: classes.button,
        }}
      >
        Отправить
      </Button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;