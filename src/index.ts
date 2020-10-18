    console.log('hello');

export const add = (a: number, b: number) => {
  return a + b
}

console.log(add("1", 2))

type Human = {
  name: string
  age: number
  favorites: string[]
}

const greet = ({ name, age, favorites }: Human): void => {
  console.log(`Hello ${name},${age},${favorites}}`)
}

greet({
  name: "taro",
  age: 1,
  favorites: ["apple", "orange"],
})
