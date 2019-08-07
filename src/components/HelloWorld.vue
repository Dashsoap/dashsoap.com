<template>
  <div>
    <label>
      {{model}}
      <input v-model="model" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: ""
    };
  }
};
</script>
