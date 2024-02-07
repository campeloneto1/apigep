import * as PerfilRepositories from '../repositories/perfil.repository';

export const index = async () => {
   return await PerfilRepositories.index();
}

export const find = async (id:any) => {
    return await PerfilRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await PerfilRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await PerfilRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await PerfilRepositories.destroy(id);
}
