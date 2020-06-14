# log rocket blog思路 Dogacan Bilgili
https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/
## 视觉分析组件, 确定HTML

## 实现样式

## functional or class
1. differs
functional fast
class support state and lifecycle hook

2. change parent component props from child component
we will also be using functions as props in order to control the parent state

## 确定state props
1. 确定完了之后写出接口
比如props有title list
state有listOpen和headerTitle
```bash
<Dropdown
  title="Select location"
  list={this.state.location}
/>

constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: this.props.title
  }
}
```

## 实现交互
handleClickOutside
  https://github.com/Pomax/react-onclickoutside
toggleList
## change parent component props in user interaction
selected 是由外围传进来(by passing item list)
交互改变的时候，要改 selected
```bash
<Dropdown
  title="Select location"
  list={this.state.location}
  toggleItem={this.toggleSelected}
/>
```
```bash
<li className="dd-list-item" key={item.title} onClick={() => toggleItem(item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
```
## 监听props, 改变组件状态
static getDerivedStateFromProps(nextProps, prevState)
(componentWillReceiveProps)

```bash
static getDerivedStateFromProps(nextProps){
    const count = nextProps.list.filter(function(a) { return a.selected; }).length;
    console.log(count)

if(count === 0){
      return {headerTitle: nextProps.title}
    }
    else if(count === 1){
      return {headerTitle: `${count}`}
    }
    else if(count > 1){
      return {headerTitle: `${count}`}
    }
  }
```
# 和组件无关 介绍一下log rocket
https://www2.logrocket.com/react-performance-monitoring
logRocket 就像app的录像，纪录app发生的一切，用来做性能分析（cpu负载，内存使用）
logRocket 用来做用户体验问题排查
logRocket redux 中间件显示所有redux状态和action

