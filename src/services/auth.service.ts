import * as AuthRepository from '../repositories/auth.repository';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (data:any) => {    
    if(!data.cpf || !data.password){
        return false;
    }
    const response = await AuthRepository.login(data);
    const json = {
        token: '',
        user: {}
    }
    if(response){
        //@ts-ignore
        response.password = '';
        json.user = response;
         //@ts-ignore
        var token = jwt.sign({ id: response.id }, JWT_SECRET, {
            expiresIn: 86400 // expira em 24 horas
          });
          json.token = token;
    }
    return json;
}

