export const validation = (form) => {
    let errors = {}

    const durationRegex = /^(0[0-4]:[0-5][0-9]|05:00)$/;
    const strictNameRegex = /^[a-zA-Z\s]*$/;

    const seasons = [
        'verano',
        'otoño',
        'invierno',
        'primavera'
    ]
    if (!strictNameRegex.test(form.name)) {
        errors.name = 'El nombre de la actividad no puede contener tildes ni carácteres especiales'
    }
    if (form.name.length > 30 || form.name.length < 2) {
        errors.name = 'El nombre de la actividad debe tener entre 2 y 30 carácteres'
    }

    if (form.difficulty > 5 || form.difficulty < 1) {
        errors.difficulty = 'La dificultad debe ser entre mínimo 1 y máximo 5'
    }

    if (!durationRegex.test(form.duration)) {
        errors.duration = 'La actividad no puede durar mas de 5 horas.'
    }

    if (!seasons.includes(form.season.toLowerCase())) {
        errors.season = 'Debe introducir una estación válida (Verano, Otoño, Invierno, Primavera)'
    }

    if (form.countries === ' ' || form.countries.length === 0) {
        errors.countries = 'Debe seleccionar un país'
    }

    return errors
}


