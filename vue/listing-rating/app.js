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
        increment: function () {},
        decrement: function () {}
    }
});


// 5. On the Vue instance, create a method called "increment" that adds 1 vote to the "votes" property 

// 6. On the Vue instance, create a method called "decrement" that substracts 1 vote from the "votes" property 

// 7. On the #voteCounter span elements, use v-on directive to call the increment or decrement methods
// so that the vote count goes up and down each time the + or - symbols are clicked. 



