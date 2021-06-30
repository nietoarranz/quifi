import { AppBar } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CallEndOutlined } from '@material-ui/icons'
import axios from 'axios'
import { text } from 'dom-helpers'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
//import countries from '../../../redux/slices/EuropeCapitals'
import GetEuropeCountries from './Hooks/GetEuropeCountries'

const EuropeCapitals = () => {

    const [countries, setCountries] = React.useState(null);

    useEffect(() => {

        //var url = "http://localhost:8010/proxy/v3/region/europe";
        var url = "https://restcountries.com/v3/region/europe";
        axios.get(url)
            .then(function (response) {
                // handle success
                //console.log(response);
                //setCountries(response.data);

                var countriesInd = [];

                for (const country of response.data) {
                    if (country.independent) {
                        countriesInd.push(country);
                    }
                }

                setCountries(countriesInd);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }, []);

    

    //console.log(countries);
    
    
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

        return [htmlElRef, setFocus]
    }

    const inputRef = React.useRef();


    const [currentCountryName, setCurrentCountryName] = React.useState("Click in the button to start");
    const [currentCountry, setCurrentCountry] = React.useState(null);
    const [currentCapital, setCurrentCapital] = React.useState("");
    const [textButton, setTextButton] = React.useState("Get country");

    const [textResult, setTextResult] = React.useState("You will see here the results");
    const [streak, setStreak] = React.useState(0);

    function loadCountry() {

        if (textButton === "Answer") {

            // @ts-ignore
            inputRef.current.focus();

            if (currentCapital!== "" && currentCapital[0].toUpperCase() === currentCountry.capital[0].toUpperCase()){
                console.log("Correct");
                setTextResult("Correct");
                setStreak(streak + 1);
            }else{
                console.log("Incorrect");
                setTextResult("Incorrect, the correct answer was: " + currentCountry.capital[0]);
                setStreak(0);
            }
            console.log(currentCapital);

            setCurrentCapital("");
        } else {
            setTextButton("Answer");
        }

        var item = countries[Math.floor(Math.random() * countries.length)];
        console.log(item); 
        setCurrentCountryName(item.name.common);
        setCurrentCountry(item);
        
    }

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Typography variant="h6">
                        European Capitals
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h4"></Typography>
            <Box m={1} />

            <Box m={2}>

                <Typography variant="h6">
                    {currentCountryName}
                </Typography>
                <Box m={2} />

                <TextField 
                    label="Capital" 
                    variant="outlined" 
                    fullWidth
                    disabled={textButton === "Get country"}
                    value={currentCapital}
                    onChange={e => {
                        setCurrentCapital(e.target.value)
                    }}
                    
                    inputRef={inputRef}
                    />

                <Box m={3} />

                <Button variant="contained" color="primary" fullWidth onClick={loadCountry}>
                    {textButton}
                </Button>

                <Box m={3} />

                <Typography variant="body1">
                    {textResult}
                </Typography>

                <Typography variant="h6">
                    Streak: {streak}
                </Typography>


            </Box>

            
            
        </div>
    )

}

export default EuropeCapitals
