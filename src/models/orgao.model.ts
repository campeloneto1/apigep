import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';

const Orgao = connection.define('Orgao', {
    id:{
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'orgaos',
    timestamps: true,
  });

  Orgao.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Orgao.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

export default Orgao;