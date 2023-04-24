// Calculo do IMC 



const botao = document.querySelector ('.botaoCalculo')

const resultado = document.querySelector ('.resultadoNumero');




// Ação do Botão
    
    botao.addEventListener ("click", () => {


         const Altura = parseFloat(document.getElementById ('altura').value);

         const Peso = parseFloat (document.getElementById ('peso').value);   
         
         if (!altura || !peso || !altura.value.includes('.') || !peso.value.includes('.')) {
          resultado.innerHTML = 'Por favor, insira um número válido com ponto decimal';
        }else {

         const IMC = Peso / (Altura * Altura);

         resultado.innerHTML = IMC.toFixed (2); 

          } 

         console.log (Altura,Peso)
         
    });



 





