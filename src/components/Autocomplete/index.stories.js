import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs"
import Autocomplete from './index'
import md from './index.md'

export default {
  title: 'Autocomplete',
  decorators: [withKnobs]
}

const standardOptions = [
	"Matthias Sammer",
	"Ronaldo",
	"Alan Shearer",
	"Predrag Mijatović",
	"Zinedine Zidane",
	"Davor Šuker",
	"Rivaldo",
	"David Beckham",
	"Andriy Shevchenko",
	"Luís Figo",
	"Michael Owen",
	"Raúl",
	"Oliver Kahn",
	"Roberto Carlos",
	"Pavel Nedvěd",
	"Thierry Henry",
	"Paolo Maldini",
	"Deco",
	"Ronaldinho",
	"Frank Lampard",
	"Steven Gerrard",
  "Fabio Cannavaro",
  "Gianluigi Buffon",
  "Cristiano Ronaldo",
  "Lionel Messi",
  "Fernando Torres",
  "Xavi",
  "Andrés Iniesta",
  "Franck Ribéry",
  "Manuel Neuer",
  "Neymar",
  "Antoine Griezmann",
  "Luka Modrić",
  "Virgil van Dijk",
  "Marcelo",
  "Alisson",
  "Sergio Ramos",
  "Matthijs de Ligt",
  "Eden Hazard",
  "Frenkie de Jong",
  "Kylian Mbappé"
];

// const englandPlayer = [
// 	"Alan Shearer",
// 	"David Beckham",
// 	"Michael Owen",
// 	"Frank Lampard",
// 	"Steven Gerrard"
// ]

// const brazilPlayer = [
//   "Ronaldo",
//   "Rivaldo",
//   "Roberto Carlos",
//   "Ronaldinho",
//   "Neymar",
// ]

// const frenchPlayer = [
//   "Zinedine Zidane",
//   "Thierry Henry",
//   "Franck Ribéry",
//   "Antoine Griezmann"
// ]

// const spainishPlayer = [
//   "Raúl",
//   "Fernando Torres",
//   "Xavi",
//   "Andrés Iniesta",
// ]

// const germanyPlayer = [
//   "Matthias Sammer",
//   "Oliver Kahn",
//   "Manuel Neuer",
// ]

// const italianPlayer = [
//   "Paolo Maldini",
//   "Fabio Cannavaro",
//   "Gianluigi Buffon",
// ]

// const potugalPlayer = [
//   "Luís Figo",
//   "Deco",
//   "Cristiano Ronaldo",
// ]

const defaultValue = [
  "Luís Figo",
  "Cristiano Ronaldo",
  "Fabio Cannavaro",
  "Steven Gerrard"
]

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: defaultValue || []
    }
  }
  dataChanged(v) {
    this.setState({
      data: v
    })
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <>
        <h1>Autocomplete</h1>
        <h3>Demo</h3>
        <p>
          Please change props with knobs
        </p>
        <div className="column">
          <Autocomplete
            shouldMatchCase={boolean("ShouldMatchCase", false)}
            options={['blue', 'yellow', 'red']}
            defaultValue={['blue']}
          />
        </div>
        <h3>Small Game</h3>
        <p className="primary-text column">Below is the 2019 FIFPro World XI list, please use "Autocomplete" to output the list in right order</p>
        <p className="primary-text column">Alisson, Marcelo, Sergio Ramos, Virgil van Dijk, Matthijs de Ligt, Eden Hazard, Frenkie de Jong, Luka Modrić, Cristiano Ronaldo, Kylian Mbappé, Lionel Messi</p>

        <div className="column">
          <Autocomplete
            shouldMatchCase={boolean("ShouldMatchCase", false)}
            options={standardOptions}
            defaultValue={defaultValue}
            handleValueChanged={(v) => this.dataChanged(v)}
          />
        </div>
        <h6>Value output:</h6>
        {this.state.data.join('|')}
      </>
    )
  }
}

export const autocomplete = () => (
  <Demo />
)

autocomplete.story = {
  parameters: {
    notes: {
      md
    }
  }
}
