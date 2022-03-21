const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Remove o último.
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Remove o primeiro.
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode adicionar e remover elementos.

// Adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);

// Slice
const pilotos2 = pilotos.slice(2); // Cria novo array
console.log(pilotos2);

const pilotos3 = pilotos.slice(1, 4);
console.log(pilotos3)