<template>
  <div>
    <h1>the parent11</h1>
    <select name="province" v-model="select">
      <!-- :value这个取值很重要，不能省略 -->
      <option v-for="item in items" :value="item.child">{{item.name}}</option>
    </select>
    <p>select: {{ select }}</p>
    <h2>the sub</h2>
    <select name="cities" v-model="childselect">
      <option v-for="list in select" :value="list.child" select="">
        {{list.name}}
      </option>
    </select>
    <h3>the second sub</h3>
    <p>select: {{ childselect }}</p>
    <select name="areas">
      <option v-for="area in childselect">
        {{area.name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'selectCom',
  data () {
    return {
      items: [
        {
          'id': '',
          'val': '',
          'name': '请选择',
          'child': [
            {
              'id': '',
              'val': '',
              'name': '请选择',
              'child': [
                {
                  'id': '',
                  'val': '',
                  'name': '请选择'
                }
              ]
            }
          ]
        },
        {
          'id': '001',
          'val': 'guangdong',
          'name': '广东省',
          'child': [
            {
              'id': '',
              'val': '',
              'name': '请选择',
              'child': [
                {
                  'id': '',
                  'val': '',
                  'name': '请选择'
                }
              ]
            },
            {
              'id': '00101',
              'val': 'sz',
              'name': '深圳',
              'child': [
                {
                  'id': '0010101',
                  'val': 'ft',
                  'name': '福田区'
                },
                {
                  'id': '0010102',
                  'val': 'ns',
                  'name': '南山区'
                },
                {
                  'id': '0010103',
                  'val': 'lh',
                  'name': '龙华区'
                }
              ]
            },
            {
              'id': '00102',
              'val': 'zh',
              'name': '珠海',
              'child': [
                {
                  'id': '0010201',
                  'val': 'ft',
                  'name': '香洲区'
                },
                {
                  'id': '0010202',
                  'val': 'ns',
                  'name': '斗门区'
                },
                {
                  'id': '0010203',
                  'val': 'lh',
                  'name': '横琴区'
                }
              ]
            },
            {
              'id': '00103',
              'val': 'gz',
              'name': '广州',
              'child': [
                {
                  'id': '0010301',
                  'val': 'by',
                  'name': '白云区'
                },
                {
                  'id': '0010302',
                  'val': 'yx',
                  'name': '越秀区'
                },
                {
                  'id': '0010303',
                  'val': 'py',
                  'name': '番禺区'
                }
              ]
            }
          ]
        },
        {
          'id': '002',
          'val': 'hunansheng',
          'name': '湖南省',
          'child': [
            {
              'id': '',
              'val': '',
              'name': '请选择',
              'child': [
                {
                  'id': '',
                  'val': '',
                  'name': '请选择'
                }
              ]
            },
            {
              'id': '00201',
              'val': 'cs',
              'name': '长沙',
              'child': [
                {
                  'id': '0020101',
                  'val': 'yh',
                  'name': '雨花区'
                },
                {
                  'id': '0020102',
                  'val': 'fr',
                  'name': '芙蓉区'
                },
                {
                  'id': '0020103',
                  'val': 'yl',
                  'name': '岳麓区'
                }
              ]
            },
            {
              'id': '00202',
              'val': 'zz',
              'name': '株洲',
              'child': [
                {
                  'id': '0020201',
                  'val': 'll',
                  'name': '醴陵'
                },
                {
                  'id': '0020202',
                  'val': 'yx',
                  'name': '攸县'
                },
                {
                  'id': '0020203',
                  'val': 'cl',
                  'name': '茶陵'
                }
              ]
            }
          ]
        }
      ],
      select: [
        {
          'id': '',
          'val': '',
          'name': '请选择',
          'child': [
            {
              'id': '',
              'val': '',
              'name': '请选择'
            }
          ]
        }
      ],
      childselect: [
        {
          'id': '',
          'val': '',
          'name': '请选择'
        }
      ]
    }
  },
  watch: {
    select: function (val) {
      this.childselect = [
        {
          'id': '',
          'val': '',
          'name': '请选择'
        }
      ]
    }
  }
}
</script>
  