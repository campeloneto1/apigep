import OrgaoModel from '../models/orgao.model';

export const index = async () => {
    try{
        return await OrgaoModel.findAll();
    }catch (error){
        return error;
    }
   
}

export const find = async (id:any) => {
    try{
        return await OrgaoModel.findByPk(id);
    }catch (error){
        return error;
    }
}

export const create = async (data:any) => {
    try{
        return await OrgaoModel.create({...data});
    }catch (error){
        return error;
    }
}

export const update = async (id:any, data:any) => {
    try{
        var orgao:any = await OrgaoModel.findByPk(id);
        if(orgao){
           orgao.nome = data.nome;
           
            const result = await orgao.save();
            return result;
        }
    }catch (error){
        return error;
    }
}

export const destroy = async (id:any) => {
    try{
        const user = await OrgaoModel.findByPk(id);
        if(user){
            const response = user.destroy();
            return response;
        }
    }catch (error){
        return error;
    }
}
