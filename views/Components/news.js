Vue.component('news', {
    data: function () {
        return ({
            articles: []
        });
    },
    template: '<div><ul><li v-for="article in articles"><img width="20px" height="20px" v-bind:src="article.img" /><span class="article-title">{{ article.titre }}</span><p class="article-content">{{ article.description }}</p></li></ul></div>',
    created: function () {
        this.getNews();
        this.timer = setInterval(this.getNews, 600000);
    },
    methods: {
        getNews: function () {
            this.articles = [];
            fetch('/api/news')
                .then(response => response.json())
                .then(response => {
                    response.forEach(elem => {
                        this.articles.push({
                            titre: elem.title,
                            description: elem.description,
                            img: elem.img
                        });
                    });
                });
        }
    }
});