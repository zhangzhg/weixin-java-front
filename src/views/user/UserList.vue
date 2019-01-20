<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <vuestic-data-table
            :apiUrl="apiUrl"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :apiMode="apiMode"
            :paginationPath="paginationPath"
            :queryParams="queryParams"
            :filterQuery="filterQuery"
          >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
            <template slot="outer" scope="props">
              <div>
                <button class="btn btn-primary btn-sm1"  @click="onDelete(props.data.rowData)">
                  删除
                </button>
              </div>
            </template>
            <template slot="additionalTableControl">
              <div>
                <button class="btn btn-primary btn-micro"  @click="onAddRow()">
                  新增
                </button>
              </div>
            </template>
          </vuestic-data-table>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import FieldsDef from './fields-definition'
import ItemsPerPageDef from '../common/items-per-page-definition'
import QueryParams from './query-params'
import { SpringSpinner } from 'epic-spinners'
import Confirm from '../model/Confirm'
import { delUser } from '../../api/api'

export default {
  name: 'UserList',
  components: {
    SpringSpinner
  },
  data () {
    return {
      apiUrl: 'http://localhost:8080/api/users/list', // 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 9,
      queryParams: QueryParams,
      filterQuery: 'name'
    }
  },
  methods: {
    onDelete (row) {
      Confirm({
        title: '提示：',
        content: '确定要删除？',
        success: function () {
          let params = { id: row.id }
          delUser(params).then((res) => {
            console.log(res)
          })
        }
      })
    },
    onAddRow (e) {
      this.$router.push({ path: '/sys/user-form' })
    },
    iconRender () {
      return '<div class="vuestic-icon"><span class="glyphicon glyphicon-star" style="font-size: 10px;color: green" aria-hidden="true"/></div>'
    }
  }
}
</script>

<style lang="scss">
  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }

  .btn-sm1 {
    padding: 0.225rem 0.6rem;
    font-size: 11px;
    font-weight: 300;
  }
</style>
