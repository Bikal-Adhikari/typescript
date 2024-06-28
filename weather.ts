interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

class WeatherAPI {
  private apiUrl: string = "https://api.weather.com/data";

  async getWeatherData(city: string) {
    const response = await fetch(`${this.apiUrl}/${city}`);
    const data: WeatherData = await response.json();
    return data;
  }
}

const weatherAPI = new WeatherAPI();
weatherAPI.getWeatherData("New York").then((data) => {
  console.log(data);
});
