Vue.component('weather', {
    data: function () {
        return ({
            description: '',
            info: '../images/sun.png',
            temp: 0,
        })
    },
    template: '<div><span class="weather-img"><img width="64" height="64" v-bind:src="info"/></span><span class="hour">{{ temp }}°C</span><p class="weather-desc">{{ description }}</p></div>',
    created: function () {
        this.getWeather();
        this.timer = setInterval(this.getWeather, 600000);
    },
    methods: {
        getWeather: function () {
            let weather = ['cloud', 'flash', 'rain', 'snowflake', 'sun'];

            fetch('/api/weather')
                .then(response => response.json())
                .then(response => {
                    if (response.info == 'Thunderstorm') {
                        this.info = '../images/flash.png';
                    } else if (response.info == 'Drizzle' || response.info == 'Rain') {
                        this.info = '../images/rain.png';
                    } else if (response.info == 'Snow') {
                        this.info = '../images/snowflake.png';
                    } else if (response.info == 'Atmosphere' || response.info == 'Clair') {
                        this.info = '../images/sun.png';
                    } else {
                        this.info = '../images/cloud.png';
                    }
                    this.description = response.description;
                    this.temp = Math.round(response.temp);
                });
        }
    }
});