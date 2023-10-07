

const Activity = ({name, difficulty, duration, season}) => {
    return (
        <div>
            <h4>Nombre: {name}</h4>
            <p>Dificultad: {difficulty}</p>
            <p>Estación: {season}</p>
            <p>Duración: {duration}</p>
        </div>
    )
}

export default Activity