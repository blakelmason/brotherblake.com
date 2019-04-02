module.exports = (sequelize, type) => {
  const Volume = sequelize.define('Volume', {
    volume: {
      type: type.STRING,
      allowNull: false
    }
  },
    {
      timestamps: false,
    }
  )

  return Volume;
}