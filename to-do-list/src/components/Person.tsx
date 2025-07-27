type Props = {
    name: string,
    age: number,
    gender?: string,
    height: number
}

export const Person = ({ name, age, height, gender }: Props) => {
    return (
        <>
            <h1>Nome: {name}</h1>
            <p>Idade: {age}</p>
            <p>Peso: {height}</p>

            {gender &&
                <p>Genero: {gender}</p>
            }
        </>
    )
}