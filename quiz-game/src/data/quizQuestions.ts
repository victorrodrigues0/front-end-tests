export type QuestionType = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
};


export const questions: QuestionType[] = [
    {
        id: 1,
        question: "O que o hook useState faz em um componente React?",
        options: [
            "Renderiza um componente filho.",
            "Gerencia estado interno do componente.",
            "Executa código após o render.",
            "Cria rotas dinâmicas."
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Por que devemos usar uma arrow function ao passar um parâmetro para um evento, como onClick?",
        options: [
            "Porque o React não aceita funções nomeadas.",
            "Para impedir que a função seja executada imediatamente durante a renderização.",
            "Para melhorar a performance.",
            "Porque o useState exige."
        ],
        correctAnswer: 1
    },
    {
        id: 3,
        question: "Qual a forma correta de atualizar um item específico em uma lista no estado usando map?",
        options: [
            "Alterar diretamente a propriedade do item dentro do map.",
            "Filtrar o item e depois alterar.",
            "Retornar um novo array com o item modificado, usando map e spread operator.",
            "Usar push no array original."
        ],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "No JSX, por que é necessário usar a prop key ao renderizar listas?",
        options: [
            "Para aplicar estilos diferentes em cada item.",
            "Para melhorar o desempenho e ajudar o React a identificar cada item de forma única.",
            "Para que o map funcione corretamente.",
            "Porque sem ela o código não compila."
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "O que acontece se você alterar diretamente um objeto dentro de um array armazenado no estado do React?",
        options: [
            "O React atualiza normalmente sem problemas.",
            "A atualização funciona, mas gera warnings.",
            "O React pode não re-renderizar, pois não detecta a mudança corretamente.",
            "O React lança um erro fatal."
        ],
        correctAnswer: 2
    }
];
