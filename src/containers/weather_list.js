import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap  from '../components/google_map';

class WeatherList extends Component {

    renderWeater(cityData){

        const {id, name} = cityData.city;
        const {lon, lat} = cityData.city.coord;
        const temp = _.map(cityData.list.map(cityWeatherData => cityWeatherData.main.temp), (temp) => Math.round(temp -273.15));
        const press = cityData.list.map(cityWeatherData => cityWeatherData.main.pressure);
        const humid = cityData.list.map(cityWeatherData => cityWeatherData.main.humidity);

        return (
            <tr key={id}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temp} color={"green"} units="°C"/>
                </td>
                <td>
                    <Chart data={press} color={"orange"} units="hPa"/>
                </td>
                <td>
                    <Chart data={humid} color={"blue"} units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (°C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeater)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
