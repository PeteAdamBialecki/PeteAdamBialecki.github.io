const db = require('./db');
const { Movie } = db.models;

(async () => {
    await db.sequelize.sync({ force: true });

    try {
        const movie = await Movie.create({
            title: 'Samsara'
        });
        console.log(movie.toJSON());

        const movie2 = await Movie.create({
            title: '2001: A Space Odyssey'
        });
        console.log(movie2.toJSON());

    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();