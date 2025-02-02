import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './Header';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  alert: {
    color: 'red',
    fontSize: 14
  }
});

class InviteFamily extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.props.onMount();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.props.onChange(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.props.family;
    if (email) {
      this.props.onInvite(email);
    }
  }

  render() {
    const { classes, me } = this.props;
    if (me.user.family_id) {
      return (
        <React.Fragment>
          <Header />
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography variant="headline">家族を招待済み</Typography>
            </Paper>
          </main>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography variant="headline">家族を招待しよう！</Typography>
              {this.props.error ?
                <p className={classes.alert}>ユーザ名またはパスワードが正しくありません。</p>
                : ''
              }
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">メールアドレス</InputLabel>
                  <Input id="email" name="email" autoFocus onChange={this.handleChange} />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  招待メールを送る
              </Button>
              </form>
            </Paper>
          </main>
        </React.Fragment>
      );
    }
  }
}
export default withStyles(styles)(InviteFamily);