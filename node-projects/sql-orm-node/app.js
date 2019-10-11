const db = require('./db');
const { Movie } = db.models;

(async () => {
    await db.sequelize.sync({ force: true });

    try {
        const movie = await Movie.create({
            title: 'Samsara',
            runtime: 99,
            releaseDate: '2011-09-11',
            isAvailableOnVHS: false,
        });
        console.log(movie.toJSON());

        const movie2 = await Movie.create({
            title: '2001: A Space Odyssey',
            runtime: 142,
            releaseDate: '1968-04-03',
            isAvailableOnVHS: true,
        });
        console.log(movie2.toJSON());

    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();