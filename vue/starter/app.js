const helloWorld = new Vue ({
    el: '#helloVue',
    data: {
        title: "HEY THERE!!!!",
        message: "This is my first Vue project."
    }
})

const example = new Vue ({
    el: '#example',
    data: {
        title: "Hello",
        message: "Just sending out a signal, from one human to another",
        name: "friend",
        img: {
            src: 'http://66.media.tumblr.com/tumblr_me01k2IJkF1r3wk1zo2_1280.jpg',
            alt: 'Gloomy Landscape'
        }
    }
})

const book = new Vue({
    el: '#book',
    data: {
        title: 'The Sirens of Titan',
        author: 'Kurt Vonnegut',
        summary: 'This is a summary of the Sirens of TItan',
        showDetail: false
    },
    methods: {
        toggleDetails: function(){
            this.showDetail = !this.showDetail;
        }
    }
});

const colorsOfTheRainbow = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet"];

new Vue({
    el: '#colors',
    data: {
        rainbow: colorsOfTheRainbow
    }
})