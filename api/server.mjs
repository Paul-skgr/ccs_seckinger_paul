import Fastify from 'fastify' 
import { featureStore } from './featureStore.mjs'

export function createServer(){
    const fastify = Fastify({
        logger:true
    })    
    fastify.get("/feature/:code", async function(req, res){
        const code =req.params.code
        const enable= await featureStore.isEnabled(code);
        res.send({"code":code, "enabled": enable});  
    })
    return fastify;
}