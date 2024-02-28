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
  });

  Setor.belongsTo(Orgao, {
    as: 'orgao',
    foreignKey: 'orgao_id'
  });

  Setor.belongsTo(User, {
    as: 'createdBy',
    foreignKey: 'created_by'
  });

  Setor.belongsTo(User, {
    as: 'updatedBy',
    foreignKey: 'updated_by'
  });

export default Setor;