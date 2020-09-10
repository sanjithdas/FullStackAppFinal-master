<template>
<div>
  
<!--Panel Card-->
<b-card class="text-left shadow-lg bg-light border-0 rounded-0">
<h4 slot="header" class="text-primary m-0 border-0 rounded-0">{{title}}</h4>
<slot>
<!--Slot can be used to pass html into this section or slot. eg. <panel>slot cotent</panel>-->
</slot>
</b-card>
<!-- /Panel Card-->
</div>
</template>

<script>
export default {
name: "Panel",
props: ["title"],
methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>