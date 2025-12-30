module.exports = (sequelize, Datatypes) => {
    const Venue = sequelize.define("venues", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        external_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            unique: true
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        city: {
            type: Datatypes.STRING,
            allowNull: false
        },
        capacity: Datatypes.INTEGER,
        image_url: Datatypes.STRING
    }, { timestamps: false });
    return Venue;
};