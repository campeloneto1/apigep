import SetorModel from '../models/setor.model';

export const index = async () => {
    try{
        return await SetorModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await SetorModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await SetorModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var setor:any = await SetorModel.findByPk(id);
        if(setor){
           setor.orgao_id = data.orgao_id;
           setor.nome = data.nome;
           
            const result = await setor.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await SetorModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
