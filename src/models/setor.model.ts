import {DataTypes} from 'sequelize';
import connection from '../connection';
import User from './user.model';
import Orgao from './orgao.model';

const Setor = connection.define('Setor', {
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
    tableName: 'setores',
    timestamps: true,
    defaultScope: {
      include: ['orgao'],
      order: [['nome', 'ASC']]
    },
  });

  Setor.belongsTo(Orgao, {
    as: 'orgao',
    foreignKey: 'orgao_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Setor.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Setor.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

export default Setor;