import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';
import ProcessoSubtipo from './processo-subtipo.model';
import Status from './status.model';
import Setor from './setor.model';

const Processo = connection.define('Processo', {
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
    },
    descricao: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true
    },
    data_entrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_saida: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'processos',
    timestamps: true,
  });

  Processo.belongsTo(ProcessoSubtipo, {
    as: 'processo_subtipo',
    foreignKey: 'processo_subtipo_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Processo.belongsTo(Setor, {
    as: 'setor',
    foreignKey: 'setor_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Processo.belongsTo(Status, {
    as: 'status',
    foreignKey: 'status_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Processo.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Processo.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

export default Processo;