/**
 * applyMiddleware 中间件, 摘自 redux 文档
 */
export function logger({ getState }) {
  return next => action => {
    console.log('####### will dispatch', action)

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)

    console.log('####### state after dispatch', getState())

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}