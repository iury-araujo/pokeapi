import {useEffect} from 'react'

export const InitialRequest = () => {
  const requestApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then(result => result.json())
    .then(data => {

      data.results.forEach((item: any, index: number) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        .then(result => result.json())
        .then(data => {
          // containerMain.innerHTML = ``
          console.log(data)
          
          document.querySelector('.main-container__elements')?.insertAdjacentHTML('afterbegin' ,`
          <div class="pokemon-item">
            <div class="pokemon-item__name">${item.name}</div>
            <img class="pokemon-item__image" src/>
            <div class="pokemon-item__specifications">
              <div class="pokemon-item__specifications-type">
                <h2 class="pokemon-item__specifications-type-title">Tipos:</h2>
                <div class="pokemon-item__specifications-type-items">
                  ${data.types.map((item: any ,index: number) => {
                    return `<div class=${index}>${item.type.name}</div>`
                  }).join('')}
                </div>
              </div>
              <div class="pokemon-item__specifications-abilities">
                <h2 class="pokemon-item__specifications-abilities-title">Habilidades:</h2>
                <div class="pokemon-item__specifications-abilities-items">
                  ${data.abilities.map((item: any ,index: number) => {
                    return `<div class=${index}>${item.ability.name}</div>`
                  }).join('')}
                </div>
              </div>
            </div>
          </div>
          `)
        })

      })
  
    })
  }

  requestApi()

  return (
    <>
    </>
  )
}
