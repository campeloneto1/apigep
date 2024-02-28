import {DataTypes} from 'sequelize';
import connection from '../connection';
import Perfil from './perfil.model';

const useBcrypt = require('sequelize-bcrypt');

const User = connection.define('User', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
     
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
      },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true
        }
      },
    telefone: {
      type: DataTypes.STRING(11),
      validate: {
        isNumeric: true
      }
    },
  }, {
    tableName: 'users',
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ['password'],
      },
      include: ['perfil'],
      order: [['nome', 'ASC']]
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ['password']
        }
      }
    }
  });

  const options = {
    field: 'password', // secret field to hash, default: 'password'
    rounds: 12, // used to generate bcrypt salt, default: 12
    compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
  }

  useBcrypt(User, options);

   User.belongsTo(Perfil, {
     as: 'perfil',
     foreignKey: 'perfil_id',
     onDelete: 'SET NULL',
     onUpdate: 'CASCADE'
   });

   User.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by'
  });

  User.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by'
  });

export default User;