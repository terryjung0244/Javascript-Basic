//object: "key: value"

// product: object, name: property
const product = {
  name: 'dried Mango',
  type: 'fruit',
  ingrient: 'mango, sugar',
  country: 'florida',
  array: [52, 23, 23, 12],
  bark: function () {
    console.log(`${this.name}`)
  },
  
  sleep: () => {
    console.log(`${name}`)
  }
}

product.bark()
product.sleep()

// //Two ways of access
// console.log(product['name'])
// console.log(product['type'])
// console.log(product['ingrient'])

// console.log(product.name)
// console.log(product.type)
// console.log(product.country)
// console.log(product.array[0])

// const javascript = {
//   name: 'Self Study',
//   price: '18000',
//   publisher: 'hanbit'
// }

