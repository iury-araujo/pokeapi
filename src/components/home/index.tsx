import './style.scss'

export const pokemonItemConstruction = (data: {results: [Array]}) => {
  console.log(data.results[0]?.name)

  return(
    <>
      {
        data.results.map((item, index) => {
          return (
            <>
              <div className="pokemon-item">
                <div className="pokemon-item__name">{item.name}</div>
                <img className="pokemon-item__image" src={item.sprites.back_default} />
                <div className="pokemon-item__specifications">
                  <div className="pokemon-item__specifications-type">
                    <h2 className="pokemon-item__specifications-type-title">Tipos:</h2>
                    <div className="pokemon-item__specifications-type-items">
                      {data.types.map((item: any ,index: number) => {
                        return `<div className=${index}>${item.type.name}</div>`
                      }).join('')}
                    </div>
                  </div>
                  <div className="pokemon-item__specifications-abilities">
                    <h2 className="pokemon-item__specifications-abilities-title">Habilidades:</h2>
                    <div className="pokemon-item__specifications-abilities-items">
                      {data.abilities.map((item: any ,index: number) => {
                        return `<div className=${index}>${item.ability.name}</div>`
                      }).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

const Home = () => {

  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(result => result.json())
  .then(data => {
    // console.log(data)

    return (
      <>
        <main className="main-container">
          <section className="main-container__elements">
            {pokemonItemConstruction(data)}
          </section>
        </main>
      </>
    )
  })

  return(
    <>
        <main className="main-container">
          <section className="main-container__elements">
          </section>
        </main>
    </>
  )

}

export default Home