const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
  ];
  
const transformarNombres = (personas) => {
    return personas.map(persona => persona.nombre.toUpperCase());
  };

const nombresMayus = transformarNombres(personas);
  
console.log(nombresMayus); 