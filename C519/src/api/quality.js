import axios from 'axios'
// 不良推移图 1 left right
export function badnessMaps() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/BadTransitionDiagram'
  let url = 'http://localhost:8081/C519/API/Quality/BadTransitionDiagram'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 今日质量检验情况 2left left
export function nowDayQuality() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/QualityCompletionToday'
  let url = 'http://localhost:8081/C519/API/Quality/QualityCompletionToday'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 今日检验情况 2left right  condition情况
export function nowDayCondition() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/CompletionToday'
  let url = 'http://localhost:8081/C519/API/Quality/CompletionToday'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 当班不良 2right left
export function nowClassBadness() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/CurrentClassBad'
  let url = 'http://localhost:8081/C519/API/Quality/CurrentClassBad'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 当班不良表格 2right right
export function nowClassBadnessList() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/CurrentClassBadTable'
  let url = 'http://localhost:8081/C519/API/Quality/CurrentClassBadTable'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 七天所有产品合计柱状图
export function sevenMap() {
  // let url = 'http://192.168.0.7:8020/C519/API/Quality/AllProductsInSevenDadys'
  let url = 'http://localhost:8081/C519/API/Quality/AllProductsInSevenDadys'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
