module.exports = (sequelize, type) => {
  const Scripture = sequelize.define('Scripture', {
    volume: {
      type: type.STRING,
      allowNull: false
    },
    book: {
      type: type.STRING,
      allowNull: false
    },
    cjcVolume: {
      type: type.STRING,
      allowNull: false
    },
    cjcBook: {
      type: type.STRING,
      allowNull: false
    },
    chapter: {
      type: type.INTEGER,
      allowNull: false
    },
    verse: {
      type: type.INTEGER,
      allowNull: false
    },
    text: {
      type: type.TEXT,
      allowNull: false
    }
  },
    {
      timestamps: false,
    }
  )

  return Scripture;
}