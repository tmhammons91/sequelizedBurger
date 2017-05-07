module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define ("Burger", {
        burger_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1, 40]
            }
        }, 
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        }, 
        createdAt: {
            type: DataTypes.DATE, 
            allowNull: true
        }, 
        updatedAt: {
            type: DataTypes.DATE, 
            allowNull: true
        }
    }); 
    return Burger; 

}; 

