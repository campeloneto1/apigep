import UserModel from '../models/user.model';

export const index = async () => {
    try{
        return await UserModel.findAll();
    }catch (error){
        return error;
    }
}

export const find = async (id:any) => {
    try{
        return await UserModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await UserModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var user:any = await UserModel.findByPk(id);
        if(user){
           // user = {...data};
           user.nome = data.nome;
           user.cpf = data.cpf;
           user.password = data.password;
           user.email = data.email;
           user.telefone = data.telefone;

            const result = await user.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await UserModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
