// model/index.js
import Sequelize from 'sequelize'

const sequelize = new Sequelize('railway', 'root', 'yALUS7JysoDXM1kemYwM', {
    host: 'containers-us-west-88.railway.app',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
//...

export default db