const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
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
        // Instance of the Movie class represents a database row
        const movie = await Movie.create({
            title: 'Samsara',
        });
        console.log(movie.toJSON());
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();