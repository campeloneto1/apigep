import {Request, Response} from 'express';
import * as ProcessoTipoServices from '../services/processo-tipo.service';

export const index = async (_req: Request, res: Response) => {
    const response:any = await ProcessoTipoServices.index();
    res.status(200).json(response);
}

export const find = async (req: Request, res: Response) => {
    const { id } =  req.params ;
    const response = await ProcessoTipoServices.find(id);
    res.status(200).json(response);
}

export const create = async (req: Request, res: Response) => {
    const data = req.body;
    const response = await ProcessoTipoServices.create(data);
    if(response.errors){
        res.status(400).json(response.errors);
    }else{
        res.status(201).json(response);
    }
}

export const update = async (req: Request, res: Response) => {
    const data = req.body;
    const { id } =  req.params;
    const response = await ProcessoTipoServices.update(id, data);
    if(response.errors){
        res.status(400).json(response.errors);
    }else{
        res.status(200).json(response);
    }
}

export const destroy = async (req: Request, res: Response) => {
    const { id } =  req.params ;
    const response = await ProcessoTipoServices.destroy(id);
    res.status(200).json(response);
}