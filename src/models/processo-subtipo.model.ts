import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model'
import ProcessoTipo from './processo-tipo.model'

const ProcessoSubtipo = connection.define('ProcessoSubtipo', {
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
    tableName: 'processos_subtipos',
    timestamps: true,
  });

  ProcessoSubtipo.belongsTo(ProcessoTipo, {
    as: 'processo_tipo',
    foreignKey: 'processo_tipo_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  ProcessoSubtipo.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by'
  });

  ProcessoSubtipo.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by'
  });

export default ProcessoSubtipo;