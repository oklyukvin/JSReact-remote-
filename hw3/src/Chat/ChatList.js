import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    chatButton: {
        width: "155px",
    },
    chatLink: {
        textDecoration: "none",
        color: '#4caf50',
    },

}));

const ChatList = () => {
    const classes = useStyles();
    const [chatBlock, setChatBlock] = useState([
        { name: "first", id: "1" },
        { name: "second", id: "2" },
        { name: "third", id: "3" },
        { name: "fourth", id: "4" },
        { name: "fifth", id: "5" },
        { name: "sixth", id: "6" },
        { name: "seventh", id: "7" },
        { name: "eighth", id: "8" },
        { name: "ninth", id: "9" },
        { name: "tenth", id: "10" },
    ]);

    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                {chatBlock.map((e) => (
                    <ListItem key={e.id}>
                        {" "}
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.chatButton}
                        >
                            <Link className={classes.chatLink} to={"/chat/" + e.id}>
                                Chatroom #{e.id}
                            </Link>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ChatList;
