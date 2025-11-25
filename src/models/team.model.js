module.exports = (sequelize, Datatypes) => {
    const Team = sequelize.define("Team", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true
        },
        name: Datatypes.STRING,
        short_name: Datatypes.STRING,
        logo_url: Datatypes.STRING
    }, { timestamps: false });
    return Team;
};