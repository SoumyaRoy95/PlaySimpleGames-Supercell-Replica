import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import supercell_logo from './supercell_logo.png'
import supercell_id_logo from './supercell_id_logo.png'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import GamesFragment from '../Fragments/gamesFragment'
import CareerFragment from '../Fragments/careerFragment'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [def, setDef] = React.useState("")
  

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}} iconElementLeft = {<img src='supercell_logo.png' alt="Logo" />}>
        <Toolbar>
          
          <img src={supercell_logo} alt="Supercell Logo" className={classes.logo} />
          
          <Typography className={classes.title} noWrap>
          <Grid item>
              <Grid container justify={"center"}>
                <Tabs
                  onChange={(e, v) => {setValue(v); 
                  if(v===0){
                    setDef("games")
                  }
                  else if(v===1){
                    setDef("career")
                  }else{
                    setDef("")
                  }
                  }}
                  value={value}
                  aria-label="Navigation Tabs"
                >
                  <Tab label={"Games"}   />
                  <Tab label={"Career"}  />
                  <Tab label={"Support"} />
                  <Tab label={"Safe & Fair Play"} />
                </Tabs>
                
              </Grid>
            </Grid>
          </Typography>
          <img src={supercell_id_logo} alt="Supercell ID Logo" className={classes.logo} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
        </Toolbar>
        
                  
      </AppBar>
      {value===0&&def==="games"? <GamesFragment /> : ""}
      {value===1&&def==="career"? <CareerFragment /> : ""}
    </div>
  );
}
