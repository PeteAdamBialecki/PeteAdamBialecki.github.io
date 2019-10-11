const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db',
    logging: true  // disable logging
});

// Movie model
class Movie extends Sequelize.Model { }
Movie.init({
    title: Sequelize.STRING
}, { sequelize }); // same as { sequelize: sequelize }

// async IIFE
(async () => {
    // Sync 'Movies' table
    await sequelize.sync({ force: true });
    try {
        // non-Refactoered
        // const movie1 = await Movie.create({
        //     title: 'Samsara',
        // });
        // const movie2 = await Movie.create({
        //     title: '2001: A Space Odyssey',
        // });
        // console.log(movie2.toJSON());
        // Refactored
        const movieInstances = await Promise.all([
            Movie.create({
                title: 'Samsara',
            }),
            Movie.create({
                title: '2001: A Space Odyssey',
            }),
        ]);
        const moviesJSON = movieInstances.map(movie => movie.toJSON());
        console.log(moviesJSON);

        // ------------------
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();