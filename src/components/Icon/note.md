1. pass classname to container
```bash

function Icon(props) {
  let { name, ...other } = props
  let propsClass = ''
  if ('className' in other) {
    propsClass = other.className
    delete other.className
  }
  return (
    <i className={'fas fa-' + name + ' ' + propsClass} {...other}></i>
  )
}
```

2. how about use npm package to import fontawsome
