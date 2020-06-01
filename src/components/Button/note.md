1. primary and ghost
2. how to write dynamic className
```bash
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```
```bash
let Button = props => {
  const {type, ...other} = props
  const className = type==='primary' ? 'primary-button' : 'secondary-button'
  return <button className={className} {...other} />
}
```
3. icon font practise
https://fontawesome.com/

https://medium.com/@kevinyckim33/copy-and-paste-these-lines-of-code-to-get-sass-and-fontawesome-up-and-running-on-your-create-react-95e6c626e73b#:~:text=Go%20to%20the%20index.,%2Fcss%2Ffont%2Dawesome.

https://stackoverflow.com/questions/41676054/how-to-add-fonts-to-create-react-app-based-projects

https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css
