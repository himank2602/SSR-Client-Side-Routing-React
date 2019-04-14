import React, { Component } from 'react' 
class Grid extends Component {
  constructor(props) {
    super(props)

    let cities
    if (__isBrowser__) {
      cities = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      cities = this.props.staticContext.data
    }

    this.state = {
      cities,
      loading: cities ? false : true,
    }

    this.fetchCities = this.fetchCities.bind(this)
  }
  
  componentDidMount() {
    if (!this.state.cities) {
      this.fetchCities(this.props.match.params.id)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id)
    }
  }

  fetchCities(lang) {
    this.setState(() => ({
      loading: true
    }))
    this.props.fetchInitialData(lang)
      .then((cities) => this.setState(() => ({
        cities,
        loading: false,
      })))
  }
  render() {
    const { cities, loading } = this.state

    if (loading === true) {
      return <p>LOADING</p>
    }
    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>

        {cities.map(city => (
          <ul key={city.name} style={{ margin: 30 }} >


            {city.name}



          </ul>
        ))}

      </ul>
    )
  }
}

export default Grid