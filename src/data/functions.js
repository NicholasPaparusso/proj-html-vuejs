const getIntPrice = (item) => {
  return item.split('.').splice(0,1).join()
}

const getDecPrice = (item) => {
  return item.split('.').splice(1,1).join()
}

const getImage = (image) =>{
  return `/src/assets/img/${image}`
}

export {getIntPrice, getDecPrice, getImage}