import Fastify from 'fastify' 


export function createServer(){
    const fastify = Fastify({
        logger:true
    })    
    fastify.get("/feature/:code", function(req, res){
        const code =req.params.code
        res.send({"code":code,"enabled": true});
    })
    return fastify;
}