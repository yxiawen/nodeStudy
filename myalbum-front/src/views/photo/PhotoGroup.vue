<template>
  <div class="photo">
    <div class="photoTop">
      <Button>多选</Button>
    </div>
    <div class="photoBox">
      <div class="photoItem">
        <div class="photoWrap">
          <div class="imgWrap">
            <router-link :to="{
            name: 'photos',
            params: {
              id: 1
            }
          }"><img
                :src="`${baseUrl}${images.groupCover}`"
                alt=""
              >
              <span>相册1</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="photoItem">
        <div class="photoWrap">
          <div class="imgWrap">
            <router-link :to="{
            name: 'photos',
            params: {
              id: 2
            }
          }"><img
                :src="`${baseUrl}${images.groupCover}`"
                alt=""
              >
              <span>相册2</span>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="photoItem addItem"
        @click="addGroup"
      >
        <div class="photoWrap">
          <div class="imgWrap">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <Page :total="100" />
    </div>
    <Modal
      v-model="showAddModel"
      title="添加相册"
      @on-ok="saveGroup"
      @on-cancel="cancleGroup"
    >
      <div>
        相册名称：<Input
          v-model="addGroupName"
          placeholder="输入相册名称！"
          style="width: 300px"
        />
      </div>
      <div
        class="coverImgBox"
        v-if='false'
      >
        <div class="selectdefaultCover">
          <Button @click="selectdefaultCover">选择默认封面图</Button></div>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline">上传相册封面图</Button>
        </Upload>
      </div>
      <div
        class="defaultCoverBox"
        v-if="defaultCoverShow"
      >
        <div class="defaulImgBox">
          <div class="imgItem">
            <div class="imgWrap">
              <img
                :src="`${baseUrl}${images.groupCover}`"
                alt=""
              >
            </div>
          </div>
          <div class="imgItem">
            <div class="imgWrap">
              <img
                :src="`${baseUrl}${images.groupCover}`"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      addGroupName: '',
      showAddModel: false,
      defaultCoverShow: false,
      images: {
        groupCover: 'images/timg.jpeg'
      }
    }
  },
  methods: {
    addGroup() {
      this.showAddModel = true
    },
    saveGroup() {
      this.showAddModel = false
      this.$http.post(`${this.domain}/photogroup/create`, {
        albumname: this.addGroupName
      }).then(res => {
        console.log(res.data)
      }).catch()
    },
    cancleGroup() {
      this.showAddModel = false
    },
    selectdefaultCover() {
      if (this.defaultCoverShow) {
        this.defaultCoverShow = false
      } else {
        this.defaultCoverShow = true
      }
    }
  },
  created() {
    this.$http.get(`${this.domain}/photogroup/getAlbum`).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
  height: 200px;
}
.photoWrap {
  height: 100%;
  border: 1px solid #ccc;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.imgWrap {
  height: 100%;
}
.imgWrap a {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.photoTop {
  padding-left: 10px;
}
.coverImgBox {
  display: flex;
  margin-top: 20px;
}
.selectdefaultCover {
  margin-right: 20px;
}
.defaulImgBox {
  display: flex;
}
.defaultCoverBox .imgItem {
  width: 100px;
  padding: 10px;
  cursor: pointer;
}
</style>
