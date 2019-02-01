<template>
  <div class="photo">
    <div class="photoTop">
      <Button>返回相册列表</Button>
      <Select
        v-model="photoSelect"
        clearable
        style="width:200px;margin-left: 20px"
        placeholder='照片分类'
      >
        <Option
          v-for="item in photoSort"
          :value="item.value"
          :key="item.value"
        >{{ item.label }}</Option>
      </Select>
    </div>
    <div class="photoBox">
      <div class="photoItem">
        <div class="photoWrap">
          <div class="imgWrap">
            <img
              :src="`${baseUrl}${images.groupCover}`"
              alt=""
            >
            <span>相册1</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <Page :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      images: {
        groupCover: 'images/timg.jpeg'
      },
      photoSort: [
        {
          value: '全部照片',
          label: '全部照片'
        },
        {
          value: '未审核',
          label: '未审核'
        },
        {
          value: '已通过',
          label: '已通过'
        },
        {
          value: '未通过',
          label: '未通过'
        }
      ],
      photoSelect: ''
    }
  }

}
</script>
<style scoped>
.photoBox {
  display: flex;
  flex-wrap: wrap;
}
.photoItem {
  width: 200px;
  margin-top: 10px;
  padding: 10px;
}
.photoWrap {
  min-height: 180px;
  border: 1px solid #ccc;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.photoTop {
  padding-left: 10px;
}
</style>
