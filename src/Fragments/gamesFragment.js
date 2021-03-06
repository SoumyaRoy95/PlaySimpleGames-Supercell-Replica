import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log('inside game')
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Hay Day" onClick={() => window.open('https://supercell.com/en/games/hayday/', '_blank')}/>
        <Tab label="Clash of Clans" onClick={() => window.open('https://supercell.com/en/games/clashofclans/', '_blank')}/>
        <Tab label="Boom Beach" onClick={() => window.open('https://supercell.com/en/games/boombeach/', '_blank')}/>
        <Tab label="Clash Royale" onClick={() => window.open('https://supercell.com/en/games/clashroyale/', '_blank')}/>
        <Tab label="Brawl Stars" onClick={() => window.open('https://supercell.com/en/games/brawlstars/', '_blank')}/>
      </Tabs>
    </Paper>
  );
}