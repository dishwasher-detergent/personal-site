<template>
  <div ref="wrap">
      <NuxtLink :to="to" id="btn" class="h-full w-full">
        <div class="one" ref="one">
          <span v-for="letter in text" :key="letter.id">
            {{ letter }}
          </span>
        </div>
        <div class="two">
          <span
            v-for="letter in text"
            :key="letter.id"
          >
            {{ letter }}
          </span>
        </div>
      </NuxtLink>
  </div>
</template>
<script>
export default {
    props: ['text','to'],
    mounted(){
        this.$refs.wrap.style.width = this.$refs.one.offsetWidth + 'px'
    }
}
</script>
<style lang="scss" scoped>
#btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  border: none;
  div {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    span {
      display: inline-block;
      transition: transform 500ms, opacity 400ms;
    }
    @for $i from 1 through 15 {
      span:nth-child(#{$i}) {
        transition-delay: $i * 50ms, $i * 50ms;
      }
    }
  }
  div.one {
    span {
      transform: translateY(0px);
    }
  }
  div.two {
    span {
      transform: translateY(16px);
      opacity: 0;
    }
  }
}

#btn:hover {
  div.one {
    span {
      transform: translateY(-16px);
      opacity: 0;
    }
  }
  div.two {
    span {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @for $i from 1 through 15 {
    span:nth-child(#{$i}) {
      transition-delay: $i * 50ms, $i * 50ms;
    }
  }
}
</style>