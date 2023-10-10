import React, { useEffect } from "react"
import { useState } from "react"
import { validation } from "./validation"
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../../redux/actions"
import axios from "axios"
import style from './Form.module.css'

const Form = () => {
  const dispatch = useDispatch();

  let allCountries = useSelector(state => state.countriesCopy);

  allCountries = allCountries.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const [form, setForm] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: ''
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    if (property !== ' ') {
      setForm({
        ...form,
        [property]: value
      });
  
      setErrors(validation({
        ...form,
        [property]: value
      }));
    }
  }

  const disableHandler = () => {
    let disabled;

    if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
      disabled = true;
    } else {
      disabled = false;
    }

    return disabled;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.difficulty || !form.duration || !form.season || !form.countries) {
      alert('Campos incompletos')
      return
    }

    axios.post('http://localhost:3001/activities', form)
    .then(alert('Actividad Creada'))

  }

  return (
    <div className={style.backForm}>

      <div className={style.formContainer}>

        <h2>Crear Actividad Turística</h2>

        <form onSubmit={handleSubmit} className={style.formBox} >

          <div className={style.nombreForm}>
            <p className={style.formProps}>Nombre</p>
            <input type="text" placeholder="Tipo de actividad" onChange={handleChange} name='name' value={form.name} />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className={style.diffForm}>
            <p className={style.formProps}>Dificultad</p>
            <input type="number" placeholder="1 a 5" onChange={handleChange} name='difficulty' value={form.difficulty} />
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>

          <div className={style.durForm}>
            <p className={style.formProps}>Duración</p>
            <input type="time" onChange={handleChange} name='duration' value={form.duration} />
            {errors.duration && <p>{errors.duration}</p>}
          </div>

          <div className={style.tempForm}>
            <p className={style.formProps}>Temporada</p>
            <input type="text" onChange={handleChange} name='season' value={form.season} />
            {errors.season && <p>{errors.season}</p>}
          </div>

          <div className={style.selectsForm}>

            <div className={style.countryForm}>
              <p>Pais</p>
              <select className={style.selectForm} onChange={handleChange} value={form.countries} name='countries'>
                <option disabled={true}>Seleccione (A - Z)</option>
                <option value=' '> </option>
                {allCountries.map(country => {
                  return (
                    <option
                      key={country.id}
                    >{country.name}</option>
                  )
                })}
              </select>
              {errors.countries && <p>{errors.countries}</p>}
            </div>

            <div className={style.formButton}>
              <button className={style.onlyButton} disabled={disableHandler()} type="submit" >Subir actividad</button>
            </div>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Form