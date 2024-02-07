import PerfilModel from '../models/perfil.model';

export const index = async () => {
    try{
        return await PerfilModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await PerfilModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await PerfilModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var perfil:any = await PerfilModel.findByPk(id);
        if(perfil){
           // perfil = {...data};
           perfil.nome = data.nome;
           perfil.administrador = data.administrador;
           perfil.gestor = data.gestor;
         
            const result = await perfil.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await PerfilModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
