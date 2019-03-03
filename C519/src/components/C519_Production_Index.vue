<template>
  <div class="C519_index">
    <div class="top">
      <div class="top_mid">
        <h3>C519生产看板</h3>
      </div>
      <!--<div class="top_right">
        <i class="iconfont top_right_G">&#xe62f;</i>
        <span>正常运行</span>
        <i class="iconfont top_right_R">&#xe62f;</i>
        <span>停机</span>
      </div>-->
    </div>
    <div class="content">
      <div class="line_show">
        <div class="top_left">
          <!--<img src="../common/img/ICA图标_活动倒计时.png">-->
          <p>今日作业完成情况 </p>
          <div>
            <span>完成率</span>
            <p>{{ThisDayPercent}}</p>
          </div>
        </div>
        <div id="cake_info"></div>
        <div id="line_info"></div>
      </div>
      <div class="cake_list">
        <!--<ul class="nowWorkNumber">
          <li class="title_li" v-for="m in midListOne">
            <span class="one">{{m.id}}</span>
            <span class="two">{{m.workNumber}}</span>
            <span class="mid">{{m.PN}}</span>
            <span class="one">{{m.product}}</span>
            <span class="two">{{m.workUpTime}}</span>
            <span class="one">{{m.planNum}}</span>
            <span class="one">{{m.proNum}}</span>
            <span class="one">{{m.isOk}}</span>
            <span class="one">{{m.percent}}</span>
            <span class="two">{{m.stateTime}}</span>
            <span class="two">{{m.endTime}}</span>
          </li>
          <li v-for="m in midListTwo" class="content_li">
            <span class="one bj">{{m.Number==''?'无':m.Number}}</span>
            <span class="two" :title="m.WorkOrderNumber">{{m.WorkOrderNumber==''?'无':m.WorkOrderNumber}}</span>
            <span class="mid" :title="m.PartNumber">{{m.PartNumber==''?'无':m.PartNumber}}</span>
            <span class="one">{{m.Product==''?'无':m.Product}}</span>
            <span class="two" :title="m.WorkOrderDeliveryTime">{{m.WorkOrderDeliveryTime==''?'无':m.WorkOrderDeliveryTime}}</span>
            <span class="one">{{m.PlanCount==''?'0':m.PlanCount}}</span>
            <span class="one">{{m.OutPut==''?'0':m.OutPut}}</span>
            <span class="one">{{m.IsComplete==''?'无':m.IsComplete}}</span>
            <span class="one">{{m.FPY==''?0+'%':m.FPY+'%'}}</span>
            <span class="two" :title="m.PracticalDateTime">{{m.PracticalDateTime==''?'无':m.PracticalDateTime}}</span>
            <span class="two" :title="m.TheoryDateTime">{{m.TheoryDateTime==''?'无':m.TheoryDateTime}}</span>
          </li>
          <li class="nowWorkNumber_threeLi"></li>
        </ul>-->
        <div class="el_faDiv">
          <el-table :data="midListTwo"  stripe border style="width: 100%"
                    :row-class-name="tableRowClassName">
            <el-table-column align='center' prop="Number" label="编号" width=""></el-table-column>
            <el-table-column align='center' prop="WorkOrderNumber" label="工单号" width=""></el-table-column>
            <el-table-column align='center' prop="PartNumber" label="零件料号" width=""></el-table-column>
            <el-table-column align='center' prop="Product" label="产品" width=""></el-table-column>
            <el-table-column align='center' prop="WorkOrderDeliveryTime" label="工单下发日期" width=""></el-table-column>
            <el-table-column align='center' prop="PlanCount" label="计划量" width=""></el-table-column>
            <el-table-column align='center' prop="OutPut" label="产量" width=""></el-table-column>
            <el-table-column align='center' prop="IsComplete" label="是否完成" width=""></el-table-column>
            <el-table-column align='center' prop="FPY" label="良率" width=""></el-table-column>
            <el-table-column align='center' prop="PracticalDateTime" label="实际节拍时间" width=""></el-table-column>
            <el-table-column align='center' prop="TheoryDateTime" label="理论节拍时间" width=""></el-table-column>
          </el-table>
        </div>
        <div id="line_info_two"></div>
      </div>
      <div class="lists">
        <div class="top_right">
        <i class="iconfont top_right_G">&#xe62f;</i>
        <span>正常运行</span>
        <i class="iconfont top_right_R">&#xe62f;</i>
        <span>停机</span>
      </div>
        <div class="lists_content">
          <!--<div class="content_content">-->
            <div class="content_box" v-for="item in botLeftListTwo">
              <div class="use_flex">
                <div class="box_left">
                  <i class="iconfont top_right_G" :class="item.State=='0'?'green':'red'">&#xe62f;</i>
                  <h3>{{item.Name}}</h3>
                </div>
                <div class="box_right">
                  <div class="box_right_one">
                    <span>机台编号：{{item.Number}}</span>
                    <span>IP：{{item.IP}}</span>
                    <span>工序号：{{item.ProcessNo}}</span>
                    <span>操作工ID：{{item.UserNumber}}</span>
                    <span>产量：{{item.Out}}</span>
                    <span>产率：{{item.GoodRate}}</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="content_box_two" v-for="item in botRightListTwo">
              <div class="use_flex">
                <div class="box_left">
                  <i class="iconfont top_right_G" :class="item.State=='0'?'green':'red'">&#xe62f;</i>
                  <h3>{{item.Name}}</h3>
                </div>
                <div class="box_right">
                  <div class="box_right_one">
                    <span>机台编号：{{item.Number}}</span>
                    <span>IP：{{item.IP}}</span>
                    <span>工序号：{{item.ProcessNo}}</span>
                    <span>操作工ID：{{item.UserNumber}}</span>
                    <span>产量：{{item.Out}}</span>
                    <span>产率：{{item.GoodRate}}</span>
                  </div>
                  <div class="box_right_two">
                    <span>主轴转速：{{item.Speed}}</span>
                    <span>给进：{{item.Feed}}</span>
                    <span>倍率：{{item.Ratio}}</span>
                    <span>生产计数：{{item.ProductionCount}}</span>
                    <span>刀具尺寸：{{item.CutterSize}}</span>
                    <span>刀具寿命：{{item.CutterLife}}</span>
                    <span>可生产数：{{item.NumberOfProduction}}</span>
                    <span>已生产数：{{item.HasProducedSeveral}}</span>
                  </div>
                </div>
              </div>

            </div>
          <!--</div>-->
          <!--<div class="bot_left_listInfo">
            <ul class="bot_left_ul">
              <li v-for="m in botLeftListOne" class="bot_title_li">
                <span class="three">{{m.machineName}}</span>&lt;!&ndash;名字&ndash;&gt;
                <span class="one">{{m.state}}</span>&lt;!&ndash;灯&ndash;&gt;
                <span class="two">{{m.machineNum}}</span> &lt;!&ndash;机台编号&ndash;&gt;
                <span class="twoBan">{{m.IP}}</span> &lt;!&ndash;IP&ndash;&gt;
                <span class="three">{{m.workNum}}</span> &lt;!&ndash;工序号&ndash;&gt;
                <span class="mid">{{m.operationManID}}</span> &lt;!&ndash;操作工ID&ndash;&gt;
                <span class="one">{{m.product}}</span> &lt;!&ndash;产量&ndash;&gt;
                <span class="mid">{{m.percent}}</span> &lt;!&ndash;产率&ndash;&gt;
              </li>
              <li v-for="m in botLeftListTwo" class="bot_content_li">
                <span class="three bj" :title="m.Name">{{m.Name==''?'无':m.Name}} </span>
                <span class="one stateCake" :title="m.State"><i class="iconfont iCake"
                                                                :class="m.State=='0'?'green':'red'">&#xe62f;</i></span>
                <span class="two">{{m.Number==''?'无':m.Number}}</span>
                <span class="twoBan" :title="m.IP">{{m.IP==''?'无':m.IP}}</span>
                <span class="three">{{m.ProcessNo==''?'无':m.ProcessNo}}</span>
                <span class="mid">{{m.UserNumber==''?'无':m.UserNumber}}</span>
                <span class="one">{{m.Out==''?'0':m.Out}}</span>
                <span class="mid" :title="m.GoodRate+'%'">{{m.GoodRate==''?0+'%':m.GoodRate+'%'}}</span>
              </li>
            </ul>
          </div>-->
          <!--<div class="bot_right_listInfo">
            <ul class="bot_right_ul">
              <li v-for="m in botRightListOne" class="bot_title_li">
                <span class="mid">{{m.machineName}}</span>
                <span class="one">{{m.state}}</span>
                <span class="one">{{m.machineNum}}</span>
                <span class="twoBan">{{m.IP}}</span>
                <span class="mid">{{m.workNum}}</span>
                <span class="one">{{m.operationManID}}</span>
                <span class="qi">{{m.product}}</span>
                <span class="qi">{{m.percent}}</span>
                <span class="one">{{m.axleSpeed}}</span>
                <span class="qi">{{m.feed}}</span>
                <span class="qi">{{m.doublePercent}}</span>
                <span class="one">{{m.productCountNum}}</span>
                <span class="one">{{m.toolSize}}</span>
                <span class="one">{{m.toolLife}}</span>
                <span class="one">{{m.canProductNum}}</span>
                <span class="one">{{m.alreadyProductNum}}</span>
              </li>
              <li class="bot_content_li" v-for="m in botRightListTwo">
                <span class="mid bj" :title="m.Name">{{m.Name==''?'无':m.Name}}</span>
                <span class="one stateCake">
                <i class="iconfont iCake" :class="m.State=='0'?'green':'red'">&#xe62f;</i>
              </span>
                <span class="one">{{m.Number==''?'无':m.Number}}</span>
                <span class="twoBan" :title="m.IP">{{m.IP==''?'无':m.IP}}</span>
                <span class="mid" :title="m.ProcessNo">{{m.ProcessNo==''?'无':m.ProcessNo}}</span>
                <span class="one" :title="m.UserNumber">{{m.UserNumber==''?'0':m.UserNumber}}</span>
                <span class="qi" :title="m.Out">{{m.Out==''?'0':m.Out}}</span>
                <span class="qi" :title="m.GoodRate*100+'%'">{{m.GoodRate==''?0+'%':m.GoodRate*100+'%'}}</span>
                <span class="one">{{m.Speed==''?'0':m.Speed}}</span> &lt;!&ndash;&ndash;&gt;
                <span class="qi">{{m.Feed==''?'0':m.Feed}}</span>
                <span class="qi">{{m.Ratio==''?'0':m.Ratio}}</span>
                <span class="one">{{m.ProductionCount==''?'0':m.ProductionCount}}</span>
                <span class="one">{{m.CutterSize==''?'0':m.CutterSize}}</span>
                <span class="one">{{m.CutterLife==''?'0':m.CutterLife}}</span>
                <span class="one">{{m.NumberOfProduction==''?'0':m.NumberOfProduction}}</span>
                <span class="one" :title="m.HasProducedSeveral">{{m.HasProducedSeveral==''?'0':m.HasProducedSeveral}}</span>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../api/production'
  import * as typs from '../common/js/common'

  export default {
    data() {
      return {
        ThisDayPercent: null,
        midListOne: [{
          id: '编号', workNumber: '工单号', PN: '零件料号', product: '产品', workUpTime: '工单下发日期',
          planNum: '计划量', proNum: '产量', isOk: '是否完成', percent: '良率', stateTime: '实际节拍时间',
          endTime: '理论节拍时间'
        }],
        midListTwo: [
          {
            id: '1',
            workNumber: 'Z001001001',
            PN: 'ZX001001001',
            product: '转向节',
            workUpTime: '2017-12-12 9:00',
            planNum: '1000',
            proNum: '500',
            isOk: '是',
            percent: '98%',
            stateTime: '2018-12-12 18:00',
            endTime: '2018-12-12 20:00'
          },
          {
            id: '1',
            workNumber: 'Z001001001',
            PN: 'ZX001001001',
            product: '转向节',
            workUpTime: '2017-12-12 9:00',
            planNum: '1000',
            proNum: '500',
            isOk: '是',
            percent: '98%',
            stateTime: '2018-12-12 18:00',
            endTime: '2018-12-12 20:00'
          },
          {
            id: '1',
            workNumber: 'Z001001001',
            PN: 'ZX001001001',
            product: '转向节',
            workUpTime: '2017-12-12 9:00',
            planNum: '1000',
            proNum: '500',
            isOk: '是',
            percent: '98%',
            stateTime: '2018-12-12 18:00',
            endTime: '2018-12-12 20:00'
          }
        ],
        botLeftListOne: [{
          machineName: '机台名', state: '状态', machineNum: '机台编号', IP: 'IP', workNum: '工序号',
          operationManID: '操作工ID', product: '产量', percent: '产率'
        }],
        botLeftListTwo: [
          {
            machineName: '西部大森林机', state: '生产中', machineNum: 'WDS00101', IP: '192.168.1.245',
            workNum: '103102234', operationManID: '500231456', product: '1000', percent: '95%'
          },
          {
            machineName: '西部大森林机', state: '异常', machineNum: 'WDS00101', IP: '192.168.1.245',
            workNum: '103102234', operationManID: '500231456', product: '1000', percent: '95%'
          },
          {
            machineName: '西部大森林机', state: '停工', machineNum: 'WDS00101', IP: '192.168.1.245',
            workNum: '103102234', operationManID: '500231456', product: '1000', percent: '95%'
          }
        ],
        botRightListOne: [{
          machineName: '机台名', state: '状态', machineNum: '机台编号', IP: 'IP', workNum: '工序号',
          operationManID: '操作工ID', product: '产量', percent: '产率', axleSpeed: '主轴转速', feed: '给进'
          , doublePercent: '倍率', productCountNum: '生产计数', toolSize: '刀具尺寸', toolLife: '刀具寿命',
          canProductNum: '可生产数', alreadyProductNum: '已生产数'
        }],
        botRightListTwo: [
          {
            machineName: '机加设备1', state: '生产中', machineNum: 'WDS00101', IP: '192.168.1.254', workNum: '103102234',
            operationManID: '500231425', product: '1000', percent: '98%', axleSpeed: '7300转/分', feed: '100'
            , doublePercent: '20', productCountNum: '200', toolSize: '35', toolLife: '200',
            canProductNum: '100', alreadyProductNum: '10'
          },
          {
            machineName: '机加设备1', state: '异常', machineNum: 'WDS00101', IP: '192.168.1.254', workNum: '103102234',
            operationManID: '500231425', product: '1000', percent: '98%', axleSpeed: '7300转/分', feed: '100'
            , doublePercent: '20', productCountNum: '200', toolSize: '35', toolLife: '200',
            canProductNum: '100', alreadyProductNum: '10'
          },
          {
            machineName: '机加设备1', state: '停工', machineNum: 'WDS00101', IP: '192.168.1.254', workNum: '103102234',
            operationManID: '500231425', product: '1000', percent: '98%', axleSpeed: '7300转/分', feed: '100'
            , doublePercent: '20', productCountNum: '200', toolSize: '35', toolLife: '200',
            canProductNum: '100', alreadyProductNum: '10'
          }
        ]
      }
    },
    created() {

    },
    mounted() {
      this._Z()
      setInterval(() => {
        this._Z()
      }, 1000*60)
    },
    methods: {
      tableRowClassName(row, rowIndex){
        console.log(rowIndex)
        if(rowIndex == 0){
          return 'even'
        }else {
          return 'odd'
        }
        return ''
      },
      _Z() {
        this._GetThisDayPercent()
        this._GetWeekOutput() // 1l
        this._GetUpWeekOutput() // 1r
        this._GetThisDaySituation() // 2l
        this._GetThisDayWorkInfo() // 2r
        this._GetEquipmentInfo() // 3l
        this._GetToolInfo() // 3r
      },
      _GetThisDayPercent() {
        types.GetThisDayPercent().then(pos => {
          let count = pos.data.Data.Rate
          this.ThisDayPercent = count * 100 + '%'
        }).catch(err => {
          console.log('今日完成率有错误' + err)
        })
      },
      _GetWeekOutput() {
        types.GetWeekOutput().then(pos => {
          this._topLeftMap(pos.data.Data.BrakeDisc)
        }).catch(err => {
          console.log('当周产量有错误' + err)
        })
      }, // 1l
      _GetUpWeekOutput() {
        types.GetUpWeekOutput().then(pos => {
          this._topRightMap(pos.data.Data.BrakeDisc)
        }).catch(err => {
          console.log('上周产量有错误' + err)
        })
      }, // 1r
      _GetThisDaySituation() {
        types.GetThisDaySituation().then(pos => {
          this._midLeft(pos.data.Data)
        }).catch(err => {
          console.log('今日完成情况有错' + err)
        })
      }, // 2l
      _GetThisDayWorkInfo() {
        types.GetThisDayWorkInfo().then(pos => {
          this.midListTwo = pos.data.Data.CurrentDayWorkOrderInfo
          this.midListTwo.forEach(item => {
            for(let i in item){
              if(item[i] == ''){
                if(i == 'PlanCount' || i == 'OutPut'){
                  item[i] = 0
                }else if(i == 'FPY'){
                  item[i] = 0 + '%'
                }else {
                  item[i] = '暂无'
                }
              }else {
                if(i == 'FPY'){
                  item[i] = item[i] + '%'
                }else {
                  item[i] = item[i]
                }
              }
            }
          })
          console.log(this.midListTwo)
        }).catch(err => {
          console.log('当日工单信息错误' + err)
        })
      }, // 2r
      _GetEquipmentInfo() {
        types.GetEquipmentInfo().then(pos => {
          this.botLeftListTwo = pos.data.Data.equipmentinfo // 一个数组
          this.botLeftListTwo.forEach(item => {
            for(let i in item){
              if(item[i] == ''){
                if(i == 'Out'){
                  item[i] = 0
                }else if(i == 'GoodRate'){
                  item[i] = 0+'%'
                }else {
                  item[i] = '暂无'
                }
              }else {
                if(i == 'GoodRate'){
                  item[i] = item[i]+'%'
                }else {
                  item[i] = item[i]
                }
              }
            }
          })
          // console.log(this.botLeftListTwo)
        }).catch(err => {
          console.log('(左)设备信息有错误' + err)
        })
      }, // 3l
      _GetToolInfo() {
        types.GetToolInfo().then(pos => {
          // console.log(pos.data.Data.MachiningInfo.GoodRate)
          this.botRightListTwo = pos.data.Data.MachiningInfo
          this.botRightListTwo.forEach(item => {
            for(let i in item){
              if(item[i] == ''){
                if(i == 'GoodRate'){
                  item[i] = 0+'%'
                }else {
                  item[i] = 0
                }
              }else {
                if(i == 'GoodRate'){
                  item[i] = Number(item[i]) * 100 + '%'
                }else {
                  item[i] = item[i]
                }
              }
            }
          })
        }).catch(err => {
          console.log('(右)机加设备信息' + err)
        })
      },
      // 下面是图canvas
      _topLeftMap(pos) {
        let week = []
        let output = []
        for (let r in pos) {
          week.push(typs.GetWeek(pos[r].Week))
          output.push(pos[r].OutPut)
        }
        let topLeft = this.$echarts.init(document.getElementById('line_info'))
        topLeft.setOption({
          color:
            ['#c23531', '#F8AF2F', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
          title: {
            text: '当周产量折线图',
            textStyle: {
              color: 'black'
            },
            left: 18,
            top: 10
          },
          grid: {
            left: '11%',
            right: '7%',
            bottom: '15%',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['', '转向节', ''],//刹车盘  摆臂
            textStyle: {
              color: 'black'
            },
            top: 10,
            left: 345
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            // ['星期一','']week
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
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
            },
          },
          series: [
            {
              name: '刹车盘',
              type: 'line',
              // data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              areaStyle: {}, // 区域块
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '转向节',
              type: 'line',
              data: [typeof typs.GetYVal(1,pos)=='undefined'?0:typs.GetYVal(1,pos),
                typeof typs.GetYVal(2,pos)=='undefined'?0:typs.GetYVal(2,pos),
                typeof typs.GetYVal(3,pos)=='undefined'?0:typs.GetYVal(3,pos),
                typeof typs.GetYVal(4,pos)=='undefined'?0:typs.GetYVal(4,pos),
                typeof typs.GetYVal(5,pos)=='undefined'?0:typs.GetYVal(5,pos),
                typeof typs.GetYVal(6,pos)=='undefined'?0:typs.GetYVal(6,pos),
                typeof typs.GetYVal(7,pos)=='undefined'?0:typs.GetYVal(7,pos)],
              // data: [10,20,30,50,60,90,99999],
              // output
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              areaStyle: {},
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '摆臂',
              type: 'line',
              areaStyle: {},
              // data:[11, 17, 15, 13, 11, 20, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
          ]
        })
      },
      _topRightMap(pos) {
        let week = []
        let output = []
        for (let r in pos) {
          week.push(typs.GetWeek(pos[r].Week))
          output.push(pos[r].OutPut)
        }
        let topRight = this.$echarts.init(document.getElementById('line_info_two'))
        topRight.setOption({
          color:
            ['#c23531', '#F8AF2F', '#61a0a8', '#d48265',
              '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
          title: {
            text: '上周产量折线图',
            textStyle: {
              color: 'black'
            },
            left: 18,
            top: 10
          },
          grid: {
            left: '11%',
            right: '7%',
            bottom: '15%',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['', '转向节', ''],//刹车盘  摆臂
            textStyle: {
              color: 'black'
            },
            top: 10,
            left: 345
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            // ['周一','周二','周三','周四','周五','周六','周日']
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
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
            },
          },
          series: [
            {
              name: '刹车盘',
              type: 'line',
              // data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              areaStyle: {},
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '转向节',
              type: 'line',
              data: [typeof typs.GetYVal(1,pos)=='undefined'?0:typs.GetYVal(1,pos),
                typeof typs.GetYVal(2,pos)=='undefined'?0:typs.GetYVal(2,pos),
                typeof typs.GetYVal(3,pos)=='undefined'?0:typs.GetYVal(3,pos),
                typeof typs.GetYVal(4,pos)=='undefined'?0:typs.GetYVal(4,pos),
                typeof typs.GetYVal(5,pos)=='undefined'?0:typs.GetYVal(5,pos),
                typeof typs.GetYVal(6,pos)=='undefined'?0:typs.GetYVal(6,pos),
                typeof typs.GetYVal(7,pos)=='undefined'?0:typs.GetYVal(7,pos)],
              // [1, -2, 2, 1, 3, 2, 0] output
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              areaStyle: {},
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '摆臂',
              type: 'line',
              areaStyle: {},
              // data:[11, 17, 15, 13, 11, 20, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
          ]
        })
      },
      _midLeft(pos) {
        let midCake = this.$echarts.init(document.getElementById('cake_info'))
        midCake.setOption({
          color:
            ['#61A0A8', '#09A9A5', '#F43237', '#d48265',
              '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
          title: {
            text: '今日完成情况',
            textStyle: {
              color: 'black',
              fontSize: 20
            },
            // left: 150
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 10,
          //   top: 10,
          //   data: ['已完成', '未完成'],
          //   textStyle: {
          //     color: '#ffffff'
          //   },
          // },
          series: [
            {
              name: '今日情况',
              type: 'pie',
              radius: '55%',
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
                      borderRadius: 2,
                      align: 'center',
                    }
                  }
                }
              },
              data: [
                /*{value: pos.Completed, name: '已完成', textStyle: {color: '#abcdef'}},
                {value: pos.Unfinished, name: '未完成'},*/
                {value: Number(pos.Unfinished)+Number(pos.Completed), name: '已发放',
                },
                {value: pos.Completed, name: '已完成',  /*textStyle: {color: '#ffffff'}*/},
                  {value: pos.Unfinished, name: '未完成', /*textStyle: {color: '#C23531'}*/},
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
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../common/css/font.css";

  .C519_index {
    width: 100%;
    .top {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .top_mid {
        position: relative;
        width: 40vw;
        height: 10vh;
        font-weight: 400;
        color: black;
        text-align: center;
        h3 {
          font-size: 1.8rem;
          line-height: 10vh;
        }
      }
    }
    .content {
      width: 100%;
      .line_show {
        width: 100%;
        height: 30vh;
        margin-top: 1.2%;
        display: flex;
        justify-content: space-between;
        #cake_info {
          background: #ffffff;
          width: 28%;
          height: 100%;
        }
        .top_left {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: left;
          img {
            width: 2vw;
          }
          span {
            margin-left: 1%;
          }
          color: black;
          font-weight: 600;
          font-size: 1.2rem;
          background: #09A9A5;
          /*height: 6vh;*/
          width: 15vw;
          border-radius: 0.2rem;
          text-align: center;
          margin-left: 2%;
        }
        #line_info {
          background: #ffffff;
          margin-right: 1.2%;
          height: 100%;
          width: 48%;
        }
      }
      .cake_list {
        margin: 1.2% 0;
        width: 98%;
        height: 30vh;
        /*25vh*/
        display: flex;
        justify-content: space-between;
        .el_faDiv{
          margin-left: 1.2%;
          width: 48%;
        }
        .nowWorkNumber {
          margin-left: 1.2%;
          width: 70%;
          height: 100%;
          .title_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.35rem;
            background: #262626;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              color: #FFFFFF;
              text-align: center;
              padding: 0.5rem 0.1rem;
            }
          }
          .content_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            background: #2D2D2D;
            font-size: 0.35rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              color: #FFFFFF;
              margin: 0.5rem 0.1rem;
              text-align: center;
              max-width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .bj {
              background: #FFFFFF;
              color: #0d0d0d;
              border-radius: 0.2rem;
            }
          }
        }
        #line_info_two {
          background: #ffffff;
          height: 100%;
          width: 48%;
        }
      }
    }
    .lists { // 为了上下排列
      width: 98%;
      /*height: 27vh;*/
      margin: 1.2% auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .lists_content{
        width: 100%;
        /*background: #ee9900;*/
        .content_box, .content_box_two{
          display: inline-block;
          margin: 0.5rem 1rem;
          .use_flex{
            display: flex;
            font-size: 0.2rem;
            span{
              margin: 0.5rem 0.2rem;
            }
            .box_left{
              margin-right: 1rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              h3{
                padding: 0.5rem 0.2rem;
                margin-top: 0.5rem;
                background: #1FAA99;
                border-radius: 0.2rem;
              }
            }
            .box_right{
              display: flex;
              .box_right_one, .box_right_two{
                display: flex;
                flex-direction: column;
              }
              .box_right_two{
                margin-left: 1rem;
              }
            }
          }
        }
        .content_box{
          margin-bottom: 2rem;
        }
        .content_box_two{
          width: 30vw;
          margin: 0;
          .use_flex{
            display: flex;
            justify-content: space-around;
            padding: 0;
            h3{
              padding: 1rem 1rem;
            }
          }
        }
      }
      .top_right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .top_right_G{
          color:#00CC00;
        }
        .top_right_R{
          color: #f43237;
        }
        span{
          color:black;
        }
        border-radius: 0.2rem;
        width: 15vw;
        height: 7vh;
        margin-right: 2%;
      }
      .bot_left_listInfo {
        width: 39%;
        height: 100%;
        .bot_left_ul {
          width: 100%;
          height: 100%;
          .bot_title_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            font-size: 0.35rem;
            justify-content: space-between;
            align-items: center;
            background: #262626;
            padding: 0.1rem 0;
            span {
              text-align: center;
              padding: 0.5rem 0;
              color: #FFFFFF;
            }
          }
          .bot_content_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            font-size: 0.35rem;
            justify-content: space-between;
            align-items: center;
            background: #2D2D2D;
            span {
              color: #FFFFFF;
              text-align: center;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin: 0.5rem 0.1rem;
            }
            .bj {
              background: #FFFFFF;
              color: #0d0d0d;
              border-radius: 0.2rem;
              margin-left: 1%;
              padding: 0.1rem 0;
            }
          }
        }
      }
      .bot_right_listInfo {
        width: 60%;
        height: 100%;
        .bot_right_ul {
          width: 100%;
          height: 100%;
          .bot_title_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            font-size: 0.35rem;
            justify-content: space-between;
            align-items: center;
            background: #262626;
            padding: 0.1rem 0;
            span {
              text-align: center;
              padding: 0.5rem 0;
              color: #FFFFFF;
            }
          }
          .bot_content_li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            font-size: 0.35rem;
            justify-content: space-between;
            align-items: center;
            background: #2D2D2D;
            span {
              color: #FFFFFF;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin: 0.5rem 0.1rem;
              text-align: center;
            }
            .bj {
              background: #FFFFFF;
              border-radius: 0.2rem;
              color: #0d0d0d;
              padding: 0.1rem 0;
              margin-left: 0.5%;
            }
          }
        }
      }
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
    .twoBan {
      flex: 2.5;
    }
    .three {
      flex: 3;
    }
    .red {
      color: #f43237;
    }
    .yellow {
      color: yellow;
    }
    .green {
      color: #00CC00
    }
    .stateCake {
      padding: 0.2rem 0;
      .iCake {
        font-size: 0.5rem;
      }
    }
  }
  .el-table .odd { // 基数
    background: #00FE00;
  }

  .el-table .even { // 偶数
    background: #FFCC00;
  }
  .asf{
    width: 4vw;
    .asf_box{
      display: inline-block;
      background: #ee9900;
    }
  }
</style>
