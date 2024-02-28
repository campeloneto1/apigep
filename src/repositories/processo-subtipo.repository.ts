import ProcessoSubtipoModel from '../models/processo-subtipo.model';

export const index = async () => {
    try{
        return await ProcessoSubtipoModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await ProcessoSubtipoModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await ProcessoSubtipoModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var processosubtipo:any = await ProcessoSubtipoModel.findByPk(id);
        if(processosubtipo){
            processosubtipo.processo_tipo_id = data.processo_tipo_id;  
            processosubtipo.nome = data.nome;          
           
            const result = await processosubtipo.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await ProcessoSubtipoModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
