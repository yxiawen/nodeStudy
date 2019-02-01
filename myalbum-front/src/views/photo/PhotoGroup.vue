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
      }
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

.imgWrap a {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.photoTop {
  padding-left: 10px;
}
</style>
