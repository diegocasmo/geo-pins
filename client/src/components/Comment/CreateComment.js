import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";

import { CREATE_COMMENT_MUTATION } from '../../graphql/mutations'
import { useClient } from '../../client'
import Context from '../../context'

const CreateComment = ({ classes }) => {
  const { state } = useContext(Context)
  const [text, setText] = useState('')
  const client = useClient()

  const handleSubmitComment = async () => {
    const variables = { pinId: state.currentPin._id, text }
    await client.request(CREATE_COMMENT_MUTATION, variables)
    setText('')
  }

  return (
    <>
      <form className={classes.form}>
        <IconButton
          className={classes.clearButton}
          disabled={!text.trim()}
          onClick={() => setText('')}>
          <ClearIcon/>
        </IconButton>
        <InputBase
          multiline
          className={classes.input}
          placeholder='Add Comment'
          value={text}
          onChange={e => setText(e.target.value)}/>
        <IconButton
          className={classes.sendButton}
          disabled={!text.trim()}
          onClick={handleSubmitComment}>
          <SendIcon/>
        </IconButton>
      </form>
      <Divider/>
    </>
  )
};

const styles = theme => ({
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: "red"
  },
  sendButton: {
    padding: 0,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(CreateComment);
