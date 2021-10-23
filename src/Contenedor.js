
const fs = require('fs');  // llamo al modulo para  usar archivos

class Contenedor {
    
    constructor(ruta) {
    this.ruta =ruta
}
  async save() {
        {  
            try
             {
                     const texto = await fs.promises.readFile('./Producto.txt', 'utf-8');  
                     return JSON.parse(texto) 
                     
                           
            }
             catch (error)
             {
                return ('algo salio mal , no se puede leer el archivo')
             }   
         
          }
    } 

    async getPro() {
        try
            {
        
              const array = await this.save()
              const array1 = Object.values(array)
               return array1
              
            } catch(error)

            {
              return ('algo salio mal , no se puede leer el archivo')
            }  
    }
    
} 
 

 //const dir = './Producto.txt';
  /* const con = new Contenedor(dir);

    const main=async()=>{
    console.log(await con.save())
    }
  
 const main2= async()=>{
  console.log(await con.getPro())
  }  
 */
  //main()
  //main2()


module.exports = Contenedor;
                                                   


                                                   
