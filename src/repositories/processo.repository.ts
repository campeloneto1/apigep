import ProcessoModel from '../models/processo.model';

export const index = async () => {
    try{
        return await ProcessoModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await ProcessoModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await ProcessoModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var processo:any = await ProcessoModel.findByPk(id);
        if(processo){
            processo.nome = data.nome;   
            processo.descricao = data.descricao;          
            processo.data_entrada = data.data_entrada;   
            processo.data_saida = data.data_saida;  
            processo.status_id = data.status_id;   
            processo.setor_id = data.setor_id;   
            processo.processo_subtipo_id = data.processo_subtipo_id;   
           
            const result = await processo.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await ProcessoModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
