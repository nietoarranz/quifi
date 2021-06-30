import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import FlagIcon from '@material-ui/icons/Flag';
import { Box } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Link } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: "white"}}>
                    <Toolbar>
                        <Typography variant="h6">
                            Select a quizz
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography variant="h4"></Typography>
                <Box m={1} />
                
                <List>
                    <ListItem component={Link} to="/europecapitals">
                        <ListItemAvatar>
                            <Avatar>
                                <EuroSymbolIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="European capitals" secondary="Capitals from european countries" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PublicIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="World capitals" secondary="Capitals from all countries" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FlagIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Flags" secondary="Random flags from all countries" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Home
