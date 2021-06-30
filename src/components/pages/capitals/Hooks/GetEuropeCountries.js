import axios from "axios";
import { useEffect } from "react";
//import { useDispatch } from "react-redux";
import { setCountries } from '../../../../redux/slices/EuropeCapitals'


const GetEuropeCountries = () => {

    useEffect(() => {


        axios.get('https://restcountries.eu/rest/v2/region/europe')
            .then(function (response) {
                // handle success
                console.log(response);
                setCountries(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }, []);
};
export default GetEuropeCountries;