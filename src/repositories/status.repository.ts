import StatusModel from '../models/status.model';

export const index = async () => {
    try{
        return await StatusModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await StatusModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await StatusModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var status:any = await StatusModel.findByPk(id);
        if(status){
           status.nome = data.nome;
           status.em_andamento = data.em_andamento;
           status.encaminhado = data.encaminhado;
           status.finalizado = data.finalizado;
           
            const result = await status.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await StatusModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
