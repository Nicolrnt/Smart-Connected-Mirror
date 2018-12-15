Vue.component('date', {
    data: function () {
        return ({
            hours: '',
            dayString: '',
            day: '',
            timer: '',
            check: true
        })
    },
    template: '<div><span class="hour">{{ hours }}</span><p class="day">{{ dayString }}</p><p class="day">{{ day }}</p></div>',
    created: function () {
        this.getTime();
        this.timer = setInterval(this.getTime, 500);
    },
    methods: {
        getTime: function () {
            let date = new Date();
            this.hours = ('' + date.getHours()).padStart(2, '0') + (this.check ? ':' : ' ') + ('' + date.getMinutes()).padStart(2, '0');
            let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            this.dayString = days[date.getDay()];
            this.day = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
            this.check = !this.check;
        }
    }
});