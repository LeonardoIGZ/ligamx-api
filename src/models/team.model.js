module.exports = (sequelize, Datatypes) => {
    const Team = sequelize.define("teams", {
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
        name: Datatypes.STRING,
        short_name: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        logo_url: Datatypes.STRING
    }, { timestamps: false });
    return Team;
};