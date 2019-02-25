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
      <div class="photoItem" v-for="item in images" :key="item.index">
        <div class="photoWrap">
          <div class="imgWrap">
            <img
              :src="item.url"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="photoItem">
        <div class="photoWrap uploadBox">
          <Upload
            :action="`${this.domain}/upload`"
            :format="['jpg','jpeg','png']"
            :show-upload-list="false"
            :on-success="uploadSuccess"
          >
            <Button icon="ios-cloud-upload-outline">上传文件</Button>
          </Upload>
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
      images: [],
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
  },
  methods: {
    uploadSuccess(res, file) {
      console.log(res)
      let imgItem = {}
      imgItem.url = `${this.domain}/${res.filename}`
      this.images.push(imgItem)
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
.uploadBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
