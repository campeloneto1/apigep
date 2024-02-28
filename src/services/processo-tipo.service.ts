import * as ProcessoTipoRepositories from '../repositories/processo-tipo.repository';

export const index = async () => {
   return await ProcessoTipoRepositories.index();
}

export const find = async (id:any) => {
    return await ProcessoTipoRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await ProcessoTipoRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await ProcessoTipoRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await ProcessoTipoRepositories.destroy(id);
}
