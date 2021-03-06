import React from 'react';
import Autocomplete from '../components/Autocomplete/index'
import Button from '../components/Button/index'
import Checkbox from '../components/Checkbox/index'
import Modal from '../components/Modal/index'
import Radio from '../components/Radio/index'

import { ThemeContext } from '../components/theme-context'
import 'assets/style/_preprocess.scss'
export default {
  title: 'Themify',
};

const themeColors = {
  'heng-fa-chuen': '#b51921',
  'tai-koo': '#b2103e',
  'kowloon-bay': '#c41832',
  'tseung-kwan-o': '#ef342a',
  'wui-kai-sha': '#a84d18',
  'po-lam': '#f68f26',
  'sai-wan-ho': '#faca07',
  'disneyland-resort': '#07594a',
  'skek-kip-mei': '#4ba946',
  'racecourse': '#5fc0a7',
  'tai-wai': '#0376c2',
  'central': '#c41832',
  'tsuen-wan': '#c41832',
  'mong-kok': '#be3223',
  'hung-hom': '#f45f7c',
  'kam-sheung-road': '#d16f20',
  'tai-wo': '#ffd00d',
  'chai-wan': '#076750',
  'fanling': '#7abf45',
  'lok-ma-chau': '#75c7b9',
  'choi-hung': '#077cb0',
  'shau-kei-wan': '#29409a',
  'tsuen-wan-west': '#ee1e4f',
  'lai-king': '#d2174a',
  'long-ping': '#f79d8b',
  'austin': '#ce7020',
  'sheung-shui': '#e9a519',
  'yau-tong': '#fddf55',
  'jordan': '#076a66',
  'ngau-tau-kok': '#a7c299',
  'mei-foo': '#098ec4',
  'kennedy-town': '#89d2e3',
  'tung-chung': '#7572a7',
  'sha-tin-wai': '#f7b1bf',
  'north-point': '#f67e2a',
  'lai-chi-kok': '#f57125',
  'fo-tan': '#fbaf37',
  'kwai-hing': '#fde14e',
  'kwai-fong': '#076c53',
  'tai-wo-hau': '#b2d68c',
  'tai-shui-hang': '#8fd1cd',
  'tuen-mun': '#0798c7',
  'sai-ying-pun': '#9597ca',
  'diamond-hill': '#69686d',
  'tin-hau': '#f47a25',
  'city-one': '#fcba5d',
  'sheung-wan': '#f8d29d',
  'shek-mun': '#ffe285',
  'quarry-bay': '#077e7a',
  'h-k-u': '#d0e4a9',
  'siu-hong': '#81cdc1',
  'lam-tin': '#22b6ed',
  'heng-on': '#b4d6f2',
  'sha-tin': '#c077af',
  'airport': '#bbbfc2',
  'che-kung-temple': '#fed7a6',
  'tin-shui-wai': '#fcae62',
  'tsim-sha-tsui': '#ffe901',
  'sham-shui-po': '#078e82',
  'tiu-keng-leng': '#d7df3f',
  'yuen-long': '#89d3de',
  'heng-hau': '#22b6ed',
  'tai-po-market': '#b295c5',
  'kowloon': '#c5c4c9',
  'sunny-bay': '#d1d5d8',
  // 'asia-world-expo': '#f2f1f6',
  'nam-cheong': '#efe946',
  'wong-tai-shin': '#fff455',
  'east-tsim-sha-tsui': '#ffe901',
  'lok-fu': '#4c7020',
  'tsing-yi': '#c4e0e1',
  'kowloon-tong': '#79bce7',
  'university': '#b7e1fa',
  'ma-on-shan': '#c7a7d2',
  // 'yau-ma-tei': '#e5e4e9',
  // 'hong-kong': '#f2f1f6',
  // 'kwun-tong': '#f2f2f6',
  'fortress-hill': '#1fb27f',
  'cheung-sha-wan': '#b5a87f',
  'mong-kok-east': '#07b195',
  'wan-chai': '#d7df3f',
  'olympic': '#6dade2',
  'admiralty': '#4dc7ec',
  'LOHAS-park': '#a8b7d8',
  'prince-edward': '#b8a1a9',
  'causeway-bay': '#f8c9cb',
  // 'lo-wu': '#f2f1f6'
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaValue: '',
      theme: 'central',
      isPopupOpen:false
    }
  }
  addEmoji(value) {
    let originalValue = this.state.textareaValue
    let newValue = originalValue + '|' + value
    this.setState({
      textareaValue: newValue,
    })
  }
  handleTheme(theme) {
    this.setState({
      theme
    })
  }
  openPopup(e) {
    e.preventDefault()
    this.setState({
      isPopupOpen: true
    })
  }

  closePopup() {
    this.setState({
      isPopupOpen: false
    })
  }
  render() {
    return (
      <>
        <h1>Themify</h1>
        <p>
          Please change the color
        </p>
        {
          Object.keys(themeColors).map(key => (
            <i style={{
              width: '36px',
              height: '36px',
              display: 'inline-block',
              // margin: '0 1px 1px 0',
              border: `2px solid ${this.state.theme === key ? 'black' : 'white'}`,
              cursor: 'pointer',
              background: themeColors[key]
            }}
            key={key}
            onClick={()=>this.handleTheme(key)}
          ></i>
          ))
        }
        <ThemeContext.Provider value={this.state.theme}>
          <div className="column">
            <Button level="primary"
                    disabled={false}
                    block={false}
                    ghost={false}
                    icon='shopping-cart'
                    href=''
            >
              Hello World
            </Button>
          </div>
          <div className="column">
            <Button level="primary"
                    ghost={true}
            >
              Hello World
            </Button>
          </div>
          <div className="column">
            <Autocomplete
              shouldMatchCase={false}
              options={['blue', 'yellow', 'red']}
              defaultValue={['blue']}
            />
          </div>
          <div className="column">
            <Checkbox
              label='checkbox'
              id='checkbox'
              checked={true}
            />
          </div>
          <div className="column">
            <Button
              level="primary"
              href="#"
              ghost
              onClick={(e)=>this.openPopup(e)}
            >
              Show Modal
            </Button>
            <Modal
              header='modal title'
              isOpen={this.state.isPopupOpen}
              content="this is a modal content"
              handleClose={()=>this.closePopup()}
            />
          </div>
          <div className="column">
            <Radio
              label='radio'
              id='radio'
              checked={true}
            />
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </ThemeContext.Provider>
      </>
    )
  }
}
export const themify = () => (
  <Demo />
)

