import React from 'react';
import quify from '../../quifi.svg';
import '../../App.css';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Cover() {
    return (
        <div className="App">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <header className="App-header">
                <img src={quify} className="App-logo-quifi" alt="logo" />
                <Box m={2}/>
                

                    <Button component={Link} to="/home" color="primary" variant="outlined" style={{border: "2px solid"}}>
                        Start
                    </Button>
               

            </header>
        </div>
    );
}

export default Cover;
