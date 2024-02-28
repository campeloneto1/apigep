import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';

const ProcessoTipo = connection.define('ProcessoTipo', {
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
    tableName: 'processos_tipos',
    timestamps: true,
  });

  ProcessoTipo.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by'
  });

  ProcessoTipo.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by'
  });

export default ProcessoTipo;