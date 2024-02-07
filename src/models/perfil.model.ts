import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';

const Perfil = connection.define('Perfil', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    administrador: {
        type: DataTypes.BOOLEAN,
    },
    gestor: {
        type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'perfis',
    timestamps: true,
  });
  
    // Perfil.hasMany(connection.models.User, {
    //   as: 'users',
    //   foreignKey: 'perfil_id'
    // });

export default Perfil;