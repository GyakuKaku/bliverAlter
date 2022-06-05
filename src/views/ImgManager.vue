<template>
  <div>
    <h3>图片替换文字</h3>
    <el-card shadow="never">
      <el-row :gutter="20">
        <el-button size="mini" type="primary" @click="handleCreate">新增</el-button>
        <el-button size="mini" type="danger" @click="resetImgTransformer">重置</el-button>
      </el-row>
      <el-row :gutter="20">
        <el-table :data="imgTransformList"
            style="width: 100%">
          <el-table-column
              label="被替换文字"
              width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.from }}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="图片路径"
              width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.target }}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="图片预览"
              width="180">
            <template slot-scope="scope">
              <el-image :src="'/static/img/memes/' + scope.row.target" style="height: 64px;"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>

    <el-dialog title="配置信息" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-row :gutter="20">
          <el-form-item label="被替换文字" prop="from">
            <el-input v-model="form.from"></el-input>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-form-item label="图片名(带后缀)" prop="target">
            <el-input v-model="form.target"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const DEFAULT_IMG_TRANSFORMER = '[]'

export default {
  name: 'ImgManager',
  data() {
    return {
      handleIndex : -1,
      form: {},
      dialogVisible: false,
      imgTransformList: [],
      rules: {
        from: [
          {
            required: true,
            message: '被替换文字是必须输入项目',
            trigger: 'change'
          }, {
            validator: this.checkFrom,
            message: '被替换文字不能重复',
            trigger: 'change'
          }
        ],
        target: [
          {
            required: true,
            message: '图片名是必须输入项目',
            trigger: 'change'
          }
        ]
      }
    }
  },
  mounted() {
    this.getTransformList()
  },
  methods: {
    getTransformList() {
      const list = []
      try {
        const transformerStr = window.localStorage.imgTransformerV2 == null ? DEFAULT_IMG_TRANSFORMER : window.localStorage.imgTransformerV2
        const transformer = JSON.parse(transformerStr)
        transformer.forEach(target => {
          list.push(target)
        })
      } catch (e) {
        this.imgTransformList = []
      }
      this.imgTransformList = Object.assign([], list)
    },
    resetImgTransformer() {
      window.localStorage.imgTransformerV2 = DEFAULT_IMG_TRANSFORMER
      location.reload()
    },
    saveImgTransformer() {
      window.localStorage.imgTransformerV2 = JSON.stringify(this.imgTransformList)
      location.reload()
    },
    handleCreate() {
      this.form = {}
      this.handleIndex = -1
      this.$nextTick(() => {
        this.dialogVisible = true
      })
    },
    handleSave() {
      if (this.handleIndex === -1) {
        const data = Object.assign({}, this.form)
        this.form = {}
        this.imgTransformList.push(data)
      } else {
        this.imgTransformList[this.handleIndex] = Object.assign({}, this.form)
        this.form = {}
      }
      this.saveImgTransformer()
      this.dialogVisible = false
    },
    handleEdit(index, row) {
      this.form = Object.assign({}, row)
      this.handleIndex = index
      this.$nextTick(() => {
        this.dialogVisible = true
      })
    },
    handleDelete(index) {
      const neoList = []
      for (let i = 0; i < this.imgTransformList.length; i++) {
        if (i !== index) {
          neoList.push(this.imgTransformList[i])
        }
      }
      this.imgTransformList = Object.assign(neoList)
      this.saveImgTransformer()
    },
    checkFrom(rule, key, callback) {
      for (let i = 0; i < this.imgTransformList.length; i++) {
        if (this.imgTransformList[i].from === key && i !== this.handleIndex) {
          callback(new Error('替换文字不能重复'))
        }
      }
      callback()
    }
  }
}
</script>

<style scoped>
.img-container {
  text-align: center;
}
</style>
