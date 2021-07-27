import mock from 'mockjs'
const Random = mock.Random

export const getList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const arr = new Array(200).fill('')
      const a = arr.map(v => {
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
      resolve(a)
    }, 3000)
  })
}

export const getPageList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const arr = new Array(200).fill('')
      const a = arr.map(v => {
        return {
          id: Random.id(),
          name: Random.cname(),
          sex: Random.integer(0, 1),
          sex2: Random.integer(0, 1),
          didian: Random.city(),
          age: Random.integer(10, 50),
          addressName: Random.city(10, 50),
          kaiguan: Random.boolean(),
          huakuai: Random.boolean(0, 100),
          time: new Date(),
          timerange: [new Date('2021-07-21'), new Date()],
          date: new Date(),
          daterange: [new Date('2021-07-21'), new Date()],
          datetime: new Date(),
          pingfen: Random.integer(0, 5)
        }
      })
      resolve(a)
    }, 3000)
  })
}
