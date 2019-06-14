const helloWorld = new Vue ({
    el: '#helloVue',
    data: {
        title: "HEY THERE!!!",
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
            src: 'https://tau0.files.wordpress.com/2014/03/west_texas_cloudy_sun_bw.jpg',
            alt: 'Gloomy Landscape'
        }
    }
})
