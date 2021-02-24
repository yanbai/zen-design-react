function logRenderCount() {
  let that = this
  if (!this.renderCount) this.renderCount = {}

  return function(inst) {
    let name = inst.__proto__.constructor.name
    if (typeof that.renderCount[name] === "undefined")
      that.renderCount[name] = 0
    let count = that.renderCount[name]++
    console.log(`${name} is rendered ${count} times`)
    return inst
  }
}

export default new logRenderCount()
