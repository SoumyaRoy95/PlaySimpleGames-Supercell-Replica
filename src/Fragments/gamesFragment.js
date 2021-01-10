import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';


export class gamesFragment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:0
        }
    }
    
    handleChange = (event, newValue) => {
        this.setState({value:newValue})
      };

    render() {
        return (
            <div >
            <Container maxWidth='md'>
              <AppBar position="static" color="LightGray">
                <Tabs
                  value={this.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Hay Day"/>
                  <Tab label="Clash Of Clans"/>
                  <Tab label="Boom Beach"/>
                  <Tab label="Clash Royale"/>
                  <Tab label="Brawl Stars"/>
                </Tabs>
              </AppBar>
            </Container>  
            </div>
        )
    }
}

export default gamesFragment


