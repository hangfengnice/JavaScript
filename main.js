<template>
  <div class="cost">
    <div class="cost-inner">
      <!-- <Caption caption="基础信息" />
      <el-descriptions border class="margin-top" :column="2">
        <el-descriptions-item :span="2">
          <template slot="label">
            <span>采购项目</span>
          </template>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <span class="required">项目编号</span>
          </template>
          <div>PJ2098877</div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <span>预算金额（元）</span>
          </template>
          <div>2899990999</div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <span>所在城市</span>
          </template>
          <div>浙江省 杭州市</div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <span class="required">所属行业</span>
          </template>
          <div>软件开发</div>
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <span>所属岗位</span>
          </template>
          <el-select v-model="job" class="job-select" placeholder="请选择">
            <el-option
              v-for="item in jobs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <span></span>
          </template>
          <el-select style="opacity: 0"></el-select>
        </el-descriptions-item>
      </el-descriptions> -->
    </div>
  </div>
</template>

<script>
  const job = '项目经理、产品经理、后端工程师、前端工程师、UI设计师、测试工程师'
  export default {
    name: 'Cost',
    data() {
      return {
        jobs: [
          {
            label: job,
            value: job,
          },
        ],
        job,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cost {
    padding: 8px;
    .cost-inner {
      border-radius: 4px;
      padding: 8px;
      box-sizing: border-box;
      background: #fff;
    }
  }
  .job-select {
    width: 100%;
  }
  ::v-deep .el-descriptions-item__label.is-bordered-label.is-bordered-label {
    width: 120px;
  }
</style>
