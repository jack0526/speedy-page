import mock from 'mockjs'
const Random = mock.Random

export const getList = () => {
  const arr = new Array(200).fill('')
  return arr.map(v => {
    return {
      id: Random.id(),
      name: Random.cname(),
      age: Random.integer(29, 60),
      married: Random.boolean(),
      address: `${Random.province()}-${Random.city()}-${Random.country}`,
      birth: new Date(),
      email: Random.email('qq.com'),
      title: Random.ctitle(10, 15),
      paragraph: Random.paragraph(),
      sex: Random.integer(0, 1)
    }
  })
}
