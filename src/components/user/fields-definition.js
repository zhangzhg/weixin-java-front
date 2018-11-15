export default {
  tableFields: [
    {
      name: '-',
      title: '',
      dataClass: 'text-center',
      width: '4%',
      callback: function (value) {
        return '<div class="vuestic-icon"><span class="glyphicon glyphicon-star" style="font-size: 10px;color: green" aria-hidden="true"/></div>'
      }
    },
    {
      name: 'name',
      title: '用户名',
      sortField: 'name',
      width: '14%'
    },
    {
      name: 'account',
      title: '账户',
      sortField: 'account',
      width: '14%'
    },
    {
      name: 'status',
      title: '状态',
      width: '13%',
      callback (value) {
        return value === '1' ? '启用' : '失效'
      }
    },
    {
      name: 'phone',
      title: '手机号',
      width: '14%'
    },
    {
      name: 'wechatNo',
      title: '微信号',
      width: '14%'
    },
    {
      name: 'qq',
      title: 'QQ号',
      width: '14%'
    }, {
      name: '__slot:actions',
      title: '操作',
      width: '13%'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'email': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
