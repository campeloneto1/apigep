import * as ProcessoRepositories from '../repositories/processo.repository';

export const index = async () => {
   return await ProcessoRepositories.index();
}

export const find = async (id:any) => {
    return await ProcessoRepositories.find(id);
}

export const create = async (data:any) => {
    const response:any = await ProcessoRepositories.create(data);
    return response;
}

export const update = async (id:any, data:any) => {
    const response:any =  await ProcessoRepositories.update(id, data)
    return response;
}

export const destroy = async (id:any) => {
    return await ProcessoRepositories.destroy(id);
}
