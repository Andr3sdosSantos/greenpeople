import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Sale from '../app/models/Sale';

const connection = new Sequelize(dbConfig.development);

User.init(connection);
Sale.init(connection);

User.associate(connection.models);
Sale.associate(connection.models);

export default connection;
