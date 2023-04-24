// Calculo do IMC 

const Altura = parseFloat(document.querySelector ('#altura').value);

const Peso = parseFloat (document.querySelector ('#peso').value);

const botao = document.querySelector ('.botaoCalculo')

const resultado = document.querySelector ('.resultadoNumero');


console.log (Peso,Altura);

// Ação do Botão
    
    botao.addEventListener ("click", () => {
           
         const IMC = Peso / (Altura * Altura);

         resultado.innerHTML = IMC; 
         
    });
 





