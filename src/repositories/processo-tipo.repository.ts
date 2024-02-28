import ProcessoTipoModel from '../models/processo-tipo.model';

export const index = async () => {
    try{
        return await ProcessoTipoModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await ProcessoTipoModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await ProcessoTipoModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var processotipo:any = await ProcessoTipoModel.findByPk(id);
        if(processotipo){
            processotipo.nome = data.nome;          
           
            const result = await processotipo.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await ProcessoTipoModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
