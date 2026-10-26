# Exercícios de lógica de programação em JavaScript

Repositório de estudos com exercícios introdutórios de JavaScript, voltados à prática de variáveis, operações matemáticas e exibição de resultados no terminal.

## Exercícios

| Arquivo | Conteúdo |
| --- | --- |
| [Atividade.js](./Atividade.js) | Conversão de reais para dólares com taxa fixa de exemplo, conversão de Celsius para Fahrenheit e cálculo de IMC. |
| [aula.js](./aula.js) | Cálculo da média de três notas e interpolação de texto. |

## Como executar

Com o Node.js instalado, clone o repositório e execute:

```bash
git clone https://github.com/pedrolucasavila/coding-1.git
cd coding-1
node Atividade.js
node aula.js
```

Os exercícios usam apenas recursos nativos de JavaScript; não é necessário instalar dependências.

### Resultados esperados

- Conversão de R$ 20.000,00 pela taxa de exemplo de R$ 5,47 por dólar: US$ 3656.31.
- Conversão de 40 °C: 104.0 °F.
- IMC para 74 kg e 1,74 m: 24.44.
- Média das notas 7, 6 e 10: 7.67.

## Conceitos praticados

- Declaração de variáveis e constantes.
- Operações aritméticas e ordem das operações.
- Interpolação com template literals.
- Formatação de casas decimais com `toFixed()`.
- Saída de dados com `console.log()`.

A cotação é fixa e ilustrativa. O conversor não consulta taxas de câmbio em tempo real.
