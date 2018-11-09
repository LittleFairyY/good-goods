export const cartAction=(data)=>{
  return {
    data,
    type: 'ADD_CART'
  }
}
export const detailAction = (data) => {
  return {
    data,
    type: 'CHANGE_DETAIL'
  }
}
export const countAction = () => {
  return {
    type: 'ALL_COUNT'
  }
}
export const addCount = (id) => {
  return {
    type: 'ADD_COUNT',
    id
  }
}
export const reduceCount = (id) => {
  return {
    type: 'REDUCE_COUNT',
    id
  }
}
export const deleteCart = (id) => {
  return {
    type: 'DELETE',
    id
  }
}
export const changeChecked = (id) => {
  return {
    type: 'CHANGE',
    id
  }
}
export const allCheckChange = (allChecked) => {
  return {
    type: 'ALLCHANGE',
    allChecked
  }
}
export const toBuy = (data) => {
  return {
    data,
    type: 'BUY'
  }
}