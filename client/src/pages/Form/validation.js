export const validation = (form) => {
    let errors = {}

    const durationRegex = /^(0[1-5]):[0-5][0-9]$/;

    const seasons = [
        'verano',
        'otoño',
        'invierno',
        'primavera'
    ]

    if (form.name.length > 30) {
        errors.name = 'Nombre de actividad muy extenso'
    }

    if (form.difficulty > 5 || form.difficulty < 1) {
        errors.difficulty = 'La dificultad debe ser entre mínimo 1 y máximo 5'
    }

    if (!durationRegex.test(form.duration)) {
        errors.duration = 'La actividad no puede durar mas de 5 horas.'
    }

    if (!seasons.includes(form.season.toLowerCase())) {
        errors.season = 'Esa estación no existe (Verano, Otoño, Invierno, Primavera)'
    }

    if (form.countries.length === 0) {
        errors.countries = 'Debe seleccionar un país'
    }

    return errors
}


