import React from 'react'
import './index.scss'
const images = [
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
];
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: 0
    }
  }
  componentDidMount() {
    // setInterval(() => this.nextPic(), 3000)
    // this.nextPic()
  }
  nextPic() {
    let curentPos = this.state.pos
    let nextPos = (this.state.pos + 1)%images.length
    let current = document.querySelectorAll('.carousel-item')[curentPos]
    let next = document.querySelectorAll('.carousel-item')[nextPos]

    current.style.transition = 'none'
    next.style.transition = 'none'
    current.style.transform = `translateX(${-320*this.state.pos})`
    next.style.transform = `translateX(${320-320*this.state.pos})`

    setTimeout(() => {
      current.style.transition = 'ease 0.3s'
      next.style.transition = 'ease 0.3s'

      current.style.transform = `translateX(${-320-320*this.state.pos}px)`
      next.style.transform = `translateX(${-320*this.state.pos}px)`
    }, 16)
    this.setState({
      // pos: (pos+1)%images.length
      pos: nextPos
    })
    setTimeout(() => this.nextPic(), 3000)
  }
  render() {
    return (
      <div className="carousel-container">
        {this.state.pos}
        {
          images.map((item, index) => (
            <div key={index} className="carousel-item">
              <img alt='img' src={item} />
            </div>
          ))
        }
      </div>
    )
  }
}

// this.root.addEventListener("mousedown", event => {
//   let startX = event.clientX, startY = event.clientY;

//   let move = event => {
//       console.log(event.clientX - startX, event.clientX - startY);
//   };
//   let up = event => {
//       document.removeEventListener("mousemove", move);
//       document.removeEventListener("mouseup", up);
//   };
//   document.addEventListener("mousemove", move);
//   document.addEventListener("mouseup", up);
// })
export default Carousel
