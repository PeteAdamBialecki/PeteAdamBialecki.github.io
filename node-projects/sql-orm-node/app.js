const db = require('./db');
const { Movie, Person } = db.models;

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

        const movie3 = await Movie.create({
            title: 'Shawshank Redemption',
            runtime: 142,
            releaseDate: '1994-09-25',
            isAvailableOnVHS: true,
        });
        console.log(movie3.toJSON());

        const person = await Person.create({
            firstName: 'Butch',
            lastName: 'Cassidy',
        });
        console.log(person.toJSON());

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})();