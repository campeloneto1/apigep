import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';

const Status = connection.define('Status', {
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
    em_andamento: {
        type: DataTypes.BOOLEAN,
    },
    encaminhado: {
        type: DataTypes.BOOLEAN,
    },
    finalizado: {
        type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'status',
    timestamps: true,
  });

  Status.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Status.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });
export default Status;