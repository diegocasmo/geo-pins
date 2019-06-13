import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const Comments = ({ classes, comments }) => (
  <List className={classes.root}>
    {comments.map((c, i) => (
      <ListItem
        key={i}
        alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src={c.author.picture} alt={c.author.name}/>
        </ListItemAvatar>
        <ListItemText
          primary={c.text}
          secondary={
            <>
            <Typography
              className={classes.inline}
              component='span'
              color='textPrimary'>
              {c.author.name}
            </Typography>
            &nbsp;·&nbsp;{distanceInWordsToNow(Number(c.createdAt))} ago
            </>
          }/>
      </ListItem>
    ))}
  </List>
)

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

export default withStyles(styles)(Comments);
