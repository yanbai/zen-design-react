import React from 'react'
// normal component

// function Sample(props) {
//   return <PageLayout user={props.user} avatarSource={props.avatarSource} />
// }

// function PageLayout(props) {
//   return (
//     <NavigationBar user={props.user} avatarSource={props.avatarSource} />
//   )
// }

// function NavigationBar(props) {
//   return (
//     <Avatar user={props.user} avatarSource={props.avatarSource} />
//   )
// }

// function Avatar(props) {
//   return (
//     <div>
//       <p>{props.user.name}</p>
//       <p><img src={props.avatarSource} alt="" /></p>
//     </div>
//   )
// }

// component composition
// function PageLayout(props) {
//   return (
//     <NavigationBar avatar={props.avatar} />
//   )
// }

// function NavigationBar(props) {
//   return (
//     props.avatar
//   )
// }

// function Avatar(props) {
//   return (
//     <div>
//       <p>{props.user.name}</p>
//       <p><img src={props.avatarSource} alt="" /></p>
//     </div>
//   )
// }

// function Sample(props) {
//   let avatar = (
//     <Avatar user={props.user} avatarSource={props.avatarSource} />
//   )
//   return <PageLayout avatar={avatar} />
// }

// slot
function Avatar(props) {
  return (
    <div className="avatar">
      <p>{props.user.name}</p>
      <p><img src={props.avatarSource} alt="" /></p>
    </div>
  )
}

function NavigationBar(props) {
  return (
    <div className="nav-bar">
      {props.children}
    </div>
  )
}

function PageLayout(props) {
  return (
    <div className="page-layout">
      {props.topBar}
    </div>
  )
}

function Sample(props) {
  const topBar = (
    <NavigationBar>
      <Avatar user={props.user} avatarSource={props.avatarSource}></Avatar>
    </NavigationBar>
  )
  return (
    <>
      <PageLayout topBar={topBar} />
    </>
  )
}


// usage sample

// let user = {
//   name: 'wang'
// }

// ReactDOM.render(
//   <Sample user={user} avatarSource="https://lh3.googleusercontent.com/ogw/ADGmqu-e2nd8QEJneN14x46IullGohYAJrJjqBeCTUNA=s64-c-mo" />,
//   document.getElementById('root')
// )


export default Sample
