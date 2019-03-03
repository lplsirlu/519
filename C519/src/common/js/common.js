export function GetWeek(count) {
  if(count){
    if(count === 1){
      return '星期一'
    }
    if(count === 2){
      return '星期二'
    }
    if(count === 3) {
      return '星期三'
    }
    if(count === 4) {
      return '星期四'
    }
    if(count === 5){
      return '星期五'
    }
    if(count === 6){
      return '星期六'
    }
    if(count === 7){
      return '星期日'
    }
  }else {
    return 0
  }
}
export function GetYVal(y, arr) {
  for(let i in arr){
    if(y === 1 && arr[i].Week === 1){
      return arr[i].OutPut
    }
    if(y === 2&&arr[i].Week ===2){
      return arr[i].OutPut
    }
    if(y === 3&&arr[i].Week ===3){
      return arr[i].OutPut
    }
    if(y === 4&&arr[i].Week ===4){
      return arr[i].OutPut
    }
    if(y === 5&&arr[i].Week ===5){
      return arr[i].OutPut
    }
    if(y === 6&&arr[i].Week ===6){
      return arr[i].OutPut
    }
    if(y === 7&&arr[i].Week ===7){
      return arr[i].OutPut
    }
  }
}
