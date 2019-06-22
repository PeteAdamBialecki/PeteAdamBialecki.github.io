
const posts = [
    {
        title: 'Amazing new framework!!!',
        summary: 'Why you must start using Explode.js IMMEDIATELY!',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/any'
    },
    {
        title: 'Understanding the Event Loop',
        summary: 'This post will change your life.',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/nature'
    },
    {
        title: 'No seriously, what is a $%*# is a promise?',
        summary: 'Understanding callback heck and why you must avoid it.',
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/tech'
    },
];

new Vue({
    el: '#app',
    data: {
        posts: posts,
        title: '',
        summary: ''
    },
    methods: {
        increment: function (post) {
            post.votes += 1;
        },
        decrement: function (post) {
            post.votes -= 1;
        },
        createNew: function () {
            this.posts.push({
                title: this.title,
                summary: this.summary,
                votes: 0,
                thumbnail: 'https://i.imgur.com/1t466Om.jpg'
            });
            this.title = '';
            this.summary = '';
        }
    },
    computed: {
        orderedList: function () {
            return this.posts.sort((currentPost, nextPost) => {
                return nextPost.votes - currentPost.votes;
            })
        }
    }
});

// Addititional Funcitonality:
    // Prevent users from entering empty posts.
    // Reveal an entire article.
    // Display a larger photo when the user clicks on a picture.
    // Display the date and time of when the user posted.