import axios from 'axios'
// 今日完成率 最左上
export function GetThisDayPercent() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/TheAssignment'
  let url = 'http://localhost:8081/C519/API/Production/TheAssignment'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 今日完成情况  situation 情况 2行的left
export function GetThisDaySituation() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/TodayAssignment'
  let url = 'http://localhost:8081/C519/API/Production/TodayAssignment'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 当日工单信息 2行的right
export function GetThisDayWorkInfo() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/CurrentDayWorkOrder'
  let url = 'http://localhost:8081/C519/API/Production/CurrentDayWorkOrder'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 当周产量 output产量 暂时有问题  1行的left
export function GetWeekOutput() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/TheWeekProduction'
  let url = 'http://localhost:8081/C519/API/Production/TheWeekProduction'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 上周产量 暂时不弄  1行的rig
export function GetUpWeekOutput() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/LastWeekProduction'
  let url = 'http://localhost:8081/C519/API/Production/LastWeekProduction'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 设备信息 就是左边的 equipment设备  3行的left
export function GetEquipmentInfo() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/EquipmentInfo'
  let url = 'http://localhost:8081/C519/API/Production/EquipmentInfo'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
// 机加设备信息 右边的  3行的right
export function GetToolInfo() {
  // let url = 'http://192.168.0.7:8020/C519/API/Production/MachiningInfo'
  let url = 'http://localhost:8081/C519/API/Production/MachiningInfo'
  return new Promise((resolve, reject) => {
    axios(url).then(pos => {
      resolve(pos)
    }).catch(err => {
      reject(err)
    })
  })
}
