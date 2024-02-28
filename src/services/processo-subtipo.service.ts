import * as ProcessoSubtipoRepositories from '../repositories/processo-subtipo.repository';

export const index = async () => {
   return await ProcessoSubtipoRepositories.index();
}

export const find = async (id:any) => {
    return await ProcessoSubtipoRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await ProcessoSubtipoRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await ProcessoSubtipoRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await ProcessoSubtipoRepositories.destroy(id);
}
