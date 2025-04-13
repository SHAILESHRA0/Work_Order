import { verify } from "jsonwebtoken";

export function getDataFromJWT(req){
    const token = req.headers['authorization'];
    if (!token) {
        return null;
    }
    
    const tokenData = verify(token, process.env.JWT_SECRET);
    
    if(tokenData.exp < Date.now()){
        return null;
    }
    
    return tokenData;
}