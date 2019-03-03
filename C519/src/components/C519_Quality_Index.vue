<template class="Zbox">
  <div class="C519_Quality_index">
    <div class="top">
      <div class="top_mid">
        <h3>C519质量看板</h3>
      </div>
      <div class="top_right">
      </div>
    </div>
    <div class="content">
      <div class="map_top">
        <div class="text_data">
          <span class="text_one_span">今日质量检查情况</span>
          <div class="text_div">
            <span>检查个数:<span class="inspectNum">{{inspectNum}}</span></span>
            <span>不良个数:<span class="inspectNum">{{badNum}}</span></span>
          </div>
        </div>
        <div id="pie_map"></div>
        <div id="badness_pil_map"></div>
      </div>
      <div class="cake_mid">
        <div id="pie_bad_map"></div>
        <div class="list_data">
          <el-table :data="thisDayBad" border style="width: 100%">
            <el-table-column align="center" prop="Name" label="名称" width=""></el-table-column>
            <el-table-column align="center" prop="CheckTheNumber" label="检验个数" width=""></el-table-column>
            <el-table-column align="center" prop="BadNumber" label="不良个数" width=""></el-table-column>
            <el-table-column align="center" prop="DefectiveRate" label="不良率" width=""></el-table-column>
          </el-table>
        </div>
        <!--<div class="list_data">
          <ul>
            <li class="list_data_oneLi">
              <span>名称</span>
              <span>检验个数</span>
              <span>不良个数</span>
              <span class="bj">不良率</span>
            </li>
            <li v-for="m in thisDayBad" class="list_data_twoLi">
              <span :title="m.Name">{{m.Name}}</span>
              <span>{{m.CheckTheNumber}}</span>
              <span>{{m.BadNumber}}</span>
              <span class="bj">{{m.DefectiveRate+'%'}}</span>
            </li>
          </ul>
        </div>-->
        <div id="badness_line_map"></div>
      </div>
      <div class="map_bot">
        <div id="quality_bot_left"></div>
        <div id="quality_bot_right"></div>
      </div>
      <div class="list_inspect">
        <h3>品质数据检查</h3>
        <div class="inputInfo">
          <el-date-picker v-model="Time" type="datetimerange"
                          range-separator="至" start-placeholder="开始日期"
                          end-placeholder="结束日期"></el-date-picker>
          <el-button class="serachBtn">搜索</el-button>
        </div>
        <div class="list_inspect_div">
          <el-table :data="searchInfo" border style="width: 100%">
            <el-table-column align="center" prop="" label="日期" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="编号" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="判定" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="轴承孔直径(上)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="轴承孔直径(中)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="轴承孔直径(下)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="真圆度(上)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="真圆度(中)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="真圆度(下)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="圆柱度" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="下球头直径" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="减震器厚度" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="球化率" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="声速值" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="外观(加工不良)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="外观(毛坯不良)" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="轴承压力" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="卡簧停止直径" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="HUB压力" width="180"></el-table-column>
            <el-table-column align="center" prop="" label="总成跳动" width="180"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../api/quality'
  import * as typs from '../common/js/common'
  export default {
    data() {
      return {
        Time: '',
        inspectNum: 2550,
        badNum: 50,
        thisDayBad: [
          {name: 'C301转向节前左',inspectNum:'868',badNum:'20',badPercent: '95%'},
        ],
        listTopDate: [
          {}
        ],
        searchInfo: [
          {cc:'2012-12-12 55:20',two:'25036-54',three:'yes',four:'302.5',five:'20.1',six:'0.5',seven:'20.3',eight:'21',
          nine:'Z45',ten:'M54',oneone:'98K',onetwo:'M1214',onethree:'Min4',onefour:'89',onefive:'AWM4-7',onesix:'M1614',oneseven:'45',
            oneeight:'PL',onenine:'L89',twoo:'MP5'}
          ]
      }
    },
    mounted() {
      this._Z()
      setInterval(() => {
        this._Z()
      },1000*60)
    },
    methods: {
      _Z(){
        this._badnessMaps() // 1
        this._nowDayQuality() // 2
        this._sevenMap() // 3
      },
      _badnessMaps(){
        types.badnessMaps().then(pos => {
          // console.log(pos)
          this._badnessLeftMap(pos.data.Data)
          this._badnessRightMap(pos.data.Data)
        }).catch(err => {
          console.log('不良推移图有错误'+err)
        })
      }, // 1
      _nowDayQuality(){
        types.nowDayQuality().then(pos => {
          this.inspectNum = pos.data.Data.NumberOfInspections
          this.badNum = pos.data.Data.BadNumber
        }).catch(err => {
          console.log('今日质量检验情况有错误'+err)
        })

        types.nowDayCondition().then(pos => {
          // console.log(pos)
          this._theNowLeftDay(pos.data.Data)
        }).catch(err => {
          console.log('今日检验情况有问题'+err)
        })

        types.nowClassBadness().then(pos => {
          this._theNowRightDay(pos.data.Data)
        }).catch(err => {
          console.log('当班不良有问题'+err)
        })

        types.nowClassBadnessList().then(pos => {
          this.thisDayBad = pos.data.Data.CurrentClassBadTableInfo
          this.thisDayBad.forEach(item => {
            for(let i in item){
              if(item[i] == ''){
                if(i != 'Name'){
                  if(i == 'DefectiveRate'){
                    item[i] = 0+'%'
                  }else {
                    item[i] = 0
                  }
                }else {
                  item[i] = '暂无'
                }
              }else {
                if(i == 'DefectiveRate'){
                  item[i] = item[i]+'%'
                }else {
                  item[i] = item[i]
                }
              }
            }
          })
        }).catch(err => {
          console.log('当班不良表格有错误'+err)
        })
      }, // 2
      _sevenMap(){
        types.sevenMap().then(pos => {
          this._qualityBitMap(pos.data.Data.Knuckle)
        }).catch(err => {
          console.log('七天所有产品合计柱状图有错误'+err)
        })
      }, // 3
      // 以下是canvas
      _badnessLeftMap(pos) {
        let badness_pil_map = this.$echarts.init(document.getElementById('badness_pil_map'))
        badness_pil_map.setOption({
          title: {
            text: '不良推移图',
            textStyle: {
              color: 'black'
            },
            top: 4,
            left: 25
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['检查个数', '不良个数'],
            textStyle: {
              color: 'black'
            },
            top: 5
          },
          grid: {
            left: '9%',
            right: '6%',
            bottom: '16%',
            top: '19%'
            // containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['转向节', '', '', ''], // '摆臂', '轮毂', '刹车盘'
              axisLine: {
                lineStyle: {
                  color: 'black'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: '{value}(个)',
              },
              axisLine: {
                lineStyle: {
                  color: 'black'
                }
              }
            }
          ],
          series: [
            {
              name: '检查个数',
              type: 'bar',
              data: [pos.NumberOfInspections, 0, 0, 0],
              label: {
                normal: {
                  show: true,
                  position: 'inside'
                }
              },
              barWidth: '30%',
              itemStyle: {
                color: '#139557'
              }
            },
            {
              name: '不良个数',
              type: 'bar',
              data: [pos.BadNumber, 0, 0, 0],
              label: {
                normal: {
                  show: true,
                  position: 'inside'
                }
              },
              barWidth: '30%',
              itemStyle: {
                color: '#2E4453'
              }
            },
          ]
        })
      }, // 1l
      _badnessRightMap(pos) {
        let badness_line_map = this.$echarts.init(document.getElementById('badness_line_map'))
        badness_line_map.setOption({
          title: {
            text: '不良推移图',
            textStyle: {
              color: 'black'
            },
            top: 4,
            left: 25
          },
          xAxis: {
            type: 'category',
            data: ['转向节', '', '', ''],
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },
          legend: {
            data: ['检查个数', '不良个数'],
            textStyle: {
              color: 'black'
            },
            top: 5
          },
          grid: {
            left: '9%',
            right: '6%',
            bottom: '16%',
            top: '19%'
            // containLabel: true
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}(个)',
            },
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            }
          },
          series: [
            {
              name: '检查个数',
              data: [pos.NumberOfInspections, 0, 0, 0],
              type: 'line',
              symbolSize: [10,10],
              itemStyle: {
                color: '#139557',
                // borderWidth:10
              },
              // lineStyle:{
              //   width:10
              // },
              emphasis:{

              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  // color:'#1FAA99',
                }
              },
            },
            {
              name: '不良个数',
              data: [pos.BadNumber, 0, 0, 0],
              type: 'line',
              symbolSize: [10,10],
              itemStyle: {
                color: '#2E4453',
                // borderWidth:10
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  // inside
                  // color:'#1FAA99',
                }
              },
            }
          ]
        })
      }, // 1r

      _theNowLeftDay(pos) {
        let pie_map = this.$echarts.init(document.getElementById('pie_map'))
        pie_map.setOption({
          color:
            ['#61A0A8','#C23531', '#61a0a8', '#d48265',
              '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
          title : {
            text: '今日检查情况',
            textStyle: {
              color: 'black'
            },
            // left: 140
            x: 'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 10,
          //   top: 10,
          //   data: ['合格数','不良数'],
          //   textStyle: {
          //     color: '#ffffff'
          //   },
          // },
          series : [
            {
              name: '检查情况',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c} ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    abg: {
                      backgroundColor: '#333',
                      width: '100%',
                      align: 'right',
                      height: 22,
                      borderRadius: [4, 4, 0, 0]
                    },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data:[
                {value:pos.Inspected, name:'合格数',textStyle: {color: '#abcdef'}},
                //pos.Inspected
                {value:pos.BadCount, name:'不良数'},
                //pos.BadCount
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }, // 2l
      _theNowRightDay(pos) {
        let pie_bad_map = this.$echarts.init(document.getElementById('pie_bad_map'))
        pie_bad_map.setOption({
          color:
            ['#61A0A8','#C23531', '#61a0a8', '#d48265',
              '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
          title : {
            text: '当班不良',
            x: 'center',
            textStyle: {
              color: '#ffffff'
            },
            // left: 270
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({d}%)",
          },
          legend: {
            orient: 'vertical',
            left: 10,
            top: 10,
            data: ['C301转向节前左'/*,'C301转向节后左','C301转向节前右','C301转向节后右'*/],
            textStyle: {
              color: '#ffffff'
            },
          },
          series : [
            {
              name: '当班情况',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              label: {
                normal: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：} {per|{d}%} ',
                  backgroundColor: '#eee',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#999',
                      lineHeight: 22,
                      align: 'center'
                    },
                    abg: {
                      backgroundColor: '#333',
                      width: '100%',
                      align: 'right',
                      height: 22,
                      borderRadius: [4, 4, 0, 0]
                    },
                    hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [1, 2],
                      borderRadius: 2
                    }
                  }
                }
              },
              data:[
                {value:100-pos.BadRate, name:'合格率'},
                {value:pos.BadRate, name:'不良率'},
                // {value:10, name:'C301转向节前右'},
                // {value:10, name:'C301转向节后右'},
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }, // 2r
      _qualityBitMap(pos){
        let quality_bot_left = this.$echarts.init(document.getElementById('quality_bot_left'))
        quality_bot_left.setOption({
          title:{
            text: '七天所有产品合计图',
            textStyle:{
              color: 'black'
            }
          },
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四','周五','周六','周日'],
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },
          legend: {
            data: ['转向节', '', '', ''],
            textStyle: {
              color: 'black'
            },
            top: 5
          },
          grid: {
            left: '9%',
            right: '6%',
            bottom: '16%',
            top: '19%'
            // containLabel: true
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}(个)',
            },
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            }
          },
          series: [
            // {
            //   name: '', //刹车盘
            //   data: [820, 200, 100, 320,450,820,520],
            //   type: 'line',
            //   symbolSize: [10,10],
            //   itemStyle: {
            //     color: '#139557'
            //   },
            //   label: {
            //     normal: {
            //       show: true,
            //       position: 'inside'
            //     }
            //   },
            // },
            {
              name: '转向节',
              data: [typeof typs.GetYVal(1,pos)=='undefined'?0:typs.GetYVal(1,pos),
                typeof typs.GetYVal(2,pos)=='undefined'?0:typs.GetYVal(2,pos),
                typeof typs.GetYVal(3,pos)=='undefined'?0:typs.GetYVal(3,pos),
                typeof typs.GetYVal(4,pos)=='undefined'?0:typs.GetYVal(4,pos),
                typeof typs.GetYVal(5,pos)=='undefined'?0:typs.GetYVal(5,pos),
                typeof typs.GetYVal(6,pos)=='undefined'?0:typs.GetYVal(6,pos),
                typeof typs.GetYVal(7,pos)=='undefined'?0:typs.GetYVal(7,pos)],
              type: 'line',
              symbolSize: [10,10],
              itemStyle: {
                color: '#FFCD40',
                fontSize:20
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  // color:'#262626',
                  // fontSize:20
                }
              },
            },
            // {
            //   name: '', // 摆臂
            //   data: [250/*, 50, 20, 30,200,125,789,151*/],
            //   type: 'line',
            //   symbolSize: [10,10],
            //   label: {
            //     normal: {
            //       show: true,
            //       position: 'inside'
            //     }
            //   },
            // },
            // {
            //   name: '', // 轮毂
            //   data: [650/*, 230, 0, 0,98,151,65,94*/],
            //   type: 'line',
            //   symbolSize: [10,10],
            //   itemStyle: {
            //     color: '#b66669',
            //   },
            //   label: {
            //     normal: {
            //       show: true,
            //       position: 'inside'
            //     }
            //   },
            // }
          ]
        })
        let quality_bot_right = this.$echarts.init(document.getElementById('quality_bot_right'))
        quality_bot_right.setOption({
          title: {
            text: '七天所有产品合计图',
            textStyle: {
              color: 'black'
            }
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['', '转向节','',''], // '转向节','摆臂','轮毂'
            textStyle: {
              color: 'black'
            }
          },
          grid: {
            left: '9%',
            right: '6%',
            bottom: '16%',
            top: '19%'
            // containLabel: true
          },
          xAxis:  {
            type: 'value',
            axisLabel: {
              formatter: '{value}(个)',
            },
            axisLine: {
              lineStyle:{
                color: 'black'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine: {
              lineStyle:{
                color: 'black'
              }
            }
          },
          series: [
            {
              name: '', // 刹车盘
              type: 'bar',
              stack: '总量',
              // barGap: '-100%',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight',
                  // color:'#262626',
                }
              },
              // data: [100, 20, 60, 0, 0, 0, 0]
            },
            {
              name: '转向节',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  // position: 'insideRight',
                  position: 'right',
                  // color:'#262626',
                }
              },
              itemStyle: {
                color: '#FFCD40',
              },
              data: [typeof typs.GetYVal(1,pos)=='undefined'?0:typs.GetYVal(1,pos),
                typeof typs.GetYVal(2,pos)=='undefined'?0:typs.GetYVal(2,pos),
                typeof typs.GetYVal(3,pos)=='undefined'?0:typs.GetYVal(3,pos),
                typeof typs.GetYVal(4,pos)=='undefined'?0:typs.GetYVal(4,pos),
                typeof typs.GetYVal(5,pos)=='undefined'?0:typs.GetYVal(5,pos),
                typeof typs.GetYVal(6,pos)=='undefined'?0:typs.GetYVal(6,pos),
                typeof typs.GetYVal(7,pos)=='undefined'?0:typs.GetYVal(7,pos)],
            },
            {
              name: '', // 摆臂
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              // data: [0, 0, 0, 0, 0, 0, 0]
            },
            {
              name: '', //轮毂
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              // data: [200, 50, 0, 90, 40, 0, 0]
            }
          ]
        })
      } // 3
    }
  }
</script>

<style lang="less" scoped>
  .Zbox{
    overflow: hidden;
  }
  .C519_Quality_index {
    width: 100%;
    .top {
      width: 100%;
      .top_mid {
        margin: 0 auto;
        width: 40vw;
        height: 10vh;
        font-weight: 400;
        color: black;
        text-align: center;
        border-radius: 0.2rem;
        h3 {
          font-size: 1.5rem;
          line-height: 10vh;
        }
      }
      .top_right {
        position: fixed;
        top: 2vh;
        left: 2vh;
        img {
          height: 6.5vh;
        }
      }
    }
    .content {
      width: 100%;
      .map_top {
        width: 100%;
        height: 30vh;
        display: flex;
        margin-top: 1.2%;
        justify-content: space-around;
        align-items: center;
        .text_data{
          margin-left: 1.2%;
          flex: 0.4;
          height:100%;
          background: #1FAA99;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .text_one_span{
            padding: 0.5rem 0;
          }
          .text_div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            span{
              padding: 0.5rem 0;
              .inspectNum{
                background: #333333;
                padding: 0.2rem 0.2rem;
                border-radius: 0.2rem;
                color: #FFFFFF;
              }
            }
          }
        }
        #pie_map{
          flex: 0.8;
          height:100%;
          background: #ffffff;
          margin-left: 1%;
        }
        #badness_pil_map {
          margin-right: 1.2%;
          width: 48%;
          height: 100%;
          background: #ffffff;
        }
      }
      .cake_mid{
        width:98%;
        /*width:110%;*/
        margin: 1.2% auto;
        height: 30vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        #pie_bad_map{
          flex: 1;
          height:100%;
          background: #ffffff;
          margin-left: 1%;
        }
        .list_data{
          flex: 1;
          height:100%;
          margin-left: 1%;
          ul{
            .list_data_oneLi{
              padding: 0.5rem 0rem;
              display: flex;
              justify-content: space-around;
              align-items: center;
              border-bottom:1px solid rgba(255, 255, 255, 0.1);
              background: #333333;
              color: #FFFFFF;
              span{
                flex: 1;
                text-align: center;
                text-align: center;
              }
              .bj{
                flex: 0.72;
              }
            }
            .list_data_twoLi{
              padding: 0.5rem 0.5rem;
              display: flex;
              border-bottom:1px solid rgba(255, 255, 255, 0.1);
              justify-content: space-around;
              align-items: center;
              background: #2E2E2E;
              color: #FFFFFF;
              span{
                flex: 1;
                text-align: center;
                max-width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
                padding: 0.4rem 0;
              }
              .bj{
                background: #F4F4F4;
                color: #0d0d0d;
                border-radius: 0.2rem;
                flex: 0.6;
              }
            }
          }
        }
        #badness_line_map {
          width: 48%;
          height: 100%;
          background: #ffffff;
        }
      }
      .map_bot{
        width:98%;
        height:30vh;
        margin: 1.2% auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        #quality_bot_left{
          width: 48%;
          height: 100%;
          background: #ffffff;
        }
        #quality_bot_right{
          width: 48%;
          height: 100%;
          background: #ffffff;
        }
      }
      .list_inspect{
        width:98%;
        margin: 1.2% auto;
        height:30vh;
        background: #ffffff;
        .inputInfo{
          margin: 1rem 0;
          .serachBtn{
            margin-left: 1.2%;
          }
        }
        h3{
          font-size: 1.5rem;
          font-weight: 600;
        }
        .list_inspect_div{
          width:100%;
          height:15vh;
          margin-bottom: 1%;
        }
        ul{
          width:100%;
          margin-top: 1.2%;
          li{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .list_ul_oneLi{
            background: #262626;
            font-size: 0.35rem;
            color: black;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            span{
              padding: 0.4rem 0.1rem;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .list_ul_twoLi{
            background: #2C2C2C;
            color: black;
            font-size: 0.35rem;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            span{
              padding: 0.4rem 0.1rem;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
  .ban{
    flex: 0.6;
  }
  .qi {
    flex: 0.7;
  }
  .ban {
    flex: 0.5;
  }
  .one {
    flex: 1;
  }
  .two {
    flex: 2;
  }
  .mid {
    flex: 1.5;
  }
  .twoBan{
    flex:2.5;
  }
  .three{
    flex:3;
  }
  .threeB{
    flex:3.4;
  }
</style>
