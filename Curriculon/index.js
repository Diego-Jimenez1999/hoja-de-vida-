const functionOneLine = ()=>{


    
    var boots = [1,2,3,4, 'hola',{'hola': 1, 'mundo': 2}]
    console.log(boots[5])
    console.log(boots[0])


    console.log("array for \n")
    for(var i=0; i< boots.length; i++){
          
        console.log(boots[i])
    

    }
    
    console.log("array while \n")

    var i=0
    while(i < boots.length){
        
        console.log(boots[i])
        i++
    }

    var i=0
    console.log("array forEach \n")
    boots.forEach(function(boots,i){

        console.log(boots[boots])
        console.log(boots[i])
        i++

    })

    let personas = {nombre: 'valeria Arce',  edad: 1, ciudad: 'bogota', sexo: 'H'}

    for(let clave in personas ){
        console.log(clave + " : " +personas[clave])
    }

      

    

   /* let camp = {'hola': 1, 'mundo': 2}

  
    console.log(boots, camp, bootscoats)
    console.log(boots[0])
    console.log(camp.mundo)


    const bootscoats =() => {
        return "hola este es mi valor"
    }
 */

}

const notas =()=>{

  var nombre = ['Diego', 'Camilo', 'Lina', 'Andres']
  var edad = [25, 21, 40, 37]
  var grado = ['primero', 'segundo', 'tercero', 'cuarto']
  var nota1 = [1.5 , 5.0, 7.0, 4.5]
  var nota2 = [2.5 , 3.0, 6.0, 2.5]
  

  for(var i=0; i < nombre.length; i++){
    var promedio = nota1[i] + nota2[i] / 2
    console.log("nombre estudiante " + nombre[i]+ " Edad "+ edad[i] + "grado" + grado[i] + "promedio " + promedio)


  }

 


  

}

const nota =()=>{
     
    var information = [ {nombre: 'peres', edad: 22, grado: 'quinto', nota1: 33, nota2: 21 } ,
    {nombre: 'rodrigo', edad: 60, grado: 'decimo', nota1: 5.0, nota2: 1.0} ,
    {nombre: 'sandra', edad: 60, grado: 'quinto', nota1: 6.1, nota2: 4.9} ]

    for(let info of information){

       var promedio = info.nota1 + info.nota2 / 2
       var n = "NOMNRE: " + info.nombre + "GRADO: " + info.grado + "EDAD: " + info.edad + "promedio: " + promedio + "\n"

       console.log(n)
    
    }
}


const biblioteca =()=>{
     
    var boots = [ {libro: 'bliblia de los caidos', año: 2022 } ,
    {libro: 'la camaña', año: 2024} ,
    {nombre: 'caballo de troya', año: 1999} ]

   
   

}


const PROYECT =()=>{


    //EJERCICIO 1

    let numeros = [5, 10, 15, 20, 25];

    //Mostrar el array original
    console.log('Array original:', numeros);

    //Agregar un número al final del array
    let newnum = 30; 
    numeros.push(newnum);

    // Muestra el array después de agregar el número
    console.log('Array después de agregar el número:', numeros);

    //Elimina el primer número del array
    numeros.shift();

    // Mostrar el array después de eliminar el primer número
    console.log('Array después de eliminar el primer número:', numeros);

    //EJERCICIO 2

    // Array de números original
    let numero = [5, 10, 15, 20, 25];

    // Valor por el que multiplicar
    let x = 3; 

    // Crear un nuevo array con los números multiplicados por x
    let numerosMultiplicados = numero.map(numero => numero * x);

// Mostrar el nuevo array
console.log('Array de números multiplicados por', x, ':', numerosMultiplicados);


    //EJERCIIO 3
      
    let frutas = ['Manzana ', 'Plátano ', 'Cereza', 'Mango ', 'Cítricos ', 'Fresa ', 'Ciruela '];

    // Ordenar el array alfabéticamente
    console.log( "orden del array: "+frutas.sort()+ "\n");

    let frutasConC = frutas.filter(fruta => fruta.startsWith('C'));

    // Mostrar las frutas que comienzan con 'C'
    console.log('Frutas que comienzan con C:', frutasConC);

    // Agregar una nueva fruta 
    frutas.push('mora');

    // Filtrar el array para que solo muestre la nueva fruta
    let nuevaFruta = frutas.filter(fruta => fruta === 'mora');

    // Mostrar la nueva fruta agregada
    console.log('Nueva fruta agregada:', frutas + '\n');
     
}