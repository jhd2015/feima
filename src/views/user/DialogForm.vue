<script setup lang="ts">
import { ref, reactive } from "vue";
import { uesTabTable } from "./uesTabTable";
import { useModel } from "vue";
import dayjs from "dayjs";
const dialogVisible = defineModel<boolean>();
function handleClose() {
  dialogVisible.value = false;
}
const today = dayjs();
const ruleForm = ref({
  name: "",
  textarea: "",
  switch: false,
  num: 200,
  date: [
    today.startOf("day").format("yyyy-MM-dd"),
    today.add(1, "year").startOf("day").format("yyyy-MM-dd")
  ]
});

const rules = reactive({
  name: [{ required: true, message: "不可以为空" }]
});
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="新增手抄报"
    width="500"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="是否开会员" prop="switch">
        <el-switch v-model="ruleForm.switch" />
      </el-form-item>
      <el-form-item v-if="ruleForm.switch" label="会员时间" prop="switch">
        <el-date-picker
          v-model="ruleForm.date"
          type="daterange"
          range-separator="至"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
      <el-form-item label="星币" prop="name">
        <el-input-number
          v-model="ruleForm.num"
          :min="0"
          controls-position="right"
        />
      </el-form-item>
    </el-form>
    <!-- <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template> -->
  </el-dialog>
</template>
