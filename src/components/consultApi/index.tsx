interface propsPokemon {
  pokemon: string
}

export const RequestPokemon = (props: propsPokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
  .then(result => result.json())
  .then(data => {
    const containerMain = document.querySelector('.main-container__elements') as HTMLElement
    let saveHtml: HTMLElement = containerMain
    console.log(containerMain, saveHtml)
    
    if(props.pokemon == ""){
      containerMain.innerHTML = saveHtml.toString()
    }else{
      containerMain.innerHTML = ``
    }

    
    document.querySelector('.main-container__elements')?.insertAdjacentHTML('afterbegin' ,`
      <div class="pokemon-item">
        <div class="pokemon-item__name">${data.name}</div>
        <img class="pokemon-item__image" src=${data.sprites.back_default} />
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

  return (
    <>
    </>
  )
}
