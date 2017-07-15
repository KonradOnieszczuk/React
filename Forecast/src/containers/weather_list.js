import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
    renderWeather (cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressure = cityData.list.map(pressure => pressure.main.pressure);
        const humidites = cityData.list.map(humidity => humidity.main.humidity);
        const {lat, lon} = cityData.city.coord;

        return (
        <tr key = {name}>
            <td><GoogleMap lat={lat} lon={lon}/></td>
            <td>
                <Chart data={temps} color="orange" units="K"/>
            </td>
            <td>
                <Chart data={pressure} color="red" units="hPa"/>
            </td>
            <td>
                <Chart data={humidites} color="green" units="%" />
            </td>
        </tr>
        )
    }

    render (){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        )
    }
}

function mapStateToProps ({ weather }){
    // { weather } = const weather = state.weather; !!
    return { weather }; // { weather } === { weather: weather }
}

export default connect (mapStateToProps) (WeatherList);
