1. O papel do JavaScript: Que diferença há entre o que o HTML, o CSS e o JavaScript fazem numa página? Deem um exemplo de algo que só o JavaScript consegue fazer. 
Resposta: O HTML dá a estrutura e o conteúdo da página, o CSS trata do aspeto visual e o JavaScript cuida do comportamento e interatividade. Por exemplo, calcular o total do bilhete e mostrá-lo na página.

2. let, const e var: Quando é que usam let e quando usam const? Porque é que não usamos var?
Resposta: Usamos const para valores que não mudam, e let para os que mudam. Não usamos var porque ignora os blocos { } e deixa redeclarar a mesma variável, o que provoca erros difíceis de detetar.

3. Tipos de dados: Qual é a diferença entre 3500 e "3500"? E entre undefined e null? 
Resposta: 3500 é um número e "3500" é texto (string). undefined quer dizer que a variável ainda não recebeu nenhum valor e null quer dizer que lhe demos de propósito o valor "vazio".

4. A armadilha do +: Porque é que "10" + 5 dá "105", mas "10" * 5 dá 50? Como se corrige a soma?
Resposta: Quando um dos lados é texto, o + junta os dois em vez de somar, e por isso dá "105". O * só funciona com números, por isso converte o "10" e dá 50. Para corrigir a soma, converte-se o texto primeiro: Number("10") + 5 dá 15.

5. Ler erros: No detetive de erros, qual foi o erro mais difícil de encontrar e porquê? 
Resposta: Nenhum foi difícil de encontrar. As mensagens de erro diziam o problema e a linha onde estava, por isso bastou lê-las com atenção.
