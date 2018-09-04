import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/weather-chart';
import GoogleMap from '../components/google-map';
import Alert from '../components/alert';


class WeatherList extends Component {
    renderWeather(cityData) {
        const { name } = cityData.city;
        const temp = cityData.list.map(obj => Math.round(obj.main.temp - 273));
        const pressure = cityData.list.map(obj => obj.main.pressure);
        const humidity = cityData.list.map(obj => obj.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return <tr key={name}>
            <td><GoogleMap lat={lat} lon={lon} /></td>
            <td><Chart data={temp} color={'green'} units="C"/></td>
            <td><Chart data={pressure} color={'red'} units="hPA"/></td>
            <td><Chart data={humidity} color={'blue'} units="%"/></td>
        </tr>;
    }

    render() {
        return (
            <div>
                { this.props.error.weatherError && <Alert message={this.props.error.weatherError}/> }
                <table className="table table-hover table-bordered">
                    <caption>Weather Information</caption>
                    <thead>
                        <tr>
                            <th style={{ width: '13%' }}>City</th>
                            <th style={{ width: '29%' }}>Temperature (C)</th>
                            <th style={{ width: '29%' }}>Pressure (hPa)</th>
                            <th style={{ width: '29%' }}>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps({ weather, error }) {
    console.log({ weather, error });
    return { weather, error };
}

export default connect(mapStateToProps)(WeatherList);
