//object: "key: value"

// product: object, name: property
// const product = {
//   name: 'dried Mango',
//   type: 'fruit',
//   ingrient: 'mango, sugar',
//   country: 'florida',
//   array: [52, 23, 23, 12],
//   bark: function () {
//     console.log(`${this.name}`)
//   },
  
//   sleep: () => {
//     console.log(`${name}`)
//   }
// }

// product.bark()
// product.sleep()

// // //Two ways of access
// // console.log(product['name'])
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

const pet = {
  name: '구름', 
  age: 8
}

pet.color = 'brown'

console.log(pet);

delete pet.color;

console.log(pet)

const book = {
  name: 'javascript',
  price: 10000,
  publisher: 'hanbit'
}

const object = {
  en: 'bread',
  fr: 'pain',
  es: 'pan',
  lang: {
    ko: '한국어',
    en: '영어',
    ja: '일본어',
    fr: '프랑스어',
    es: '스페인어'
  },
  print: function (lang = 'es') {
    console.log(`${object.lang.fr}`)
  }
}

object.print('es')
