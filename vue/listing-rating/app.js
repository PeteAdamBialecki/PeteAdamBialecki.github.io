const app = new Vue({
    el: '#app',
    data: {
        title: 'Cassie',
        summary: 'A golden retriever',
        thumbnail: 'https://wallpaperstock.net/wallpapers/thumbs1/46221hd.jpg',
        alt: 'golden retriever in the snow',
        votes: '0'
    },
    methods: {
        increment: function () {
            this.votes++;
        },
        decrement: function () {
            this.votes--;
        }
    }
});