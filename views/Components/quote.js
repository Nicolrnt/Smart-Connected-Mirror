Vue.component('quote', {
    data: function () {
        return ({
            timer: '',
            text: 'I look so fabulous today !',
            author: 'Myself'
        })
    },
    template: '<div><p class="quote">{{ text }}</p><p class="author">- {{ author }}</p></div>',
    created: function () {
        this.getQuote();
        this.timer = setInterval(this.getQuote, 3600000);
    },
    methods: {
        getQuote: function () {
            fetch('/api/quote')
                .then(response => response.json())
                .then(response => {
                    this.text = response.text;
                    this.author = response.author;
                });
        }
    }
});