<template>
<div>
<panel title="View Instruction Guide" v-if="instructionGuide">
<div class="row">
<div class="col-md-4">
<img :src="instructionGuide.image" :alt="instructionGuide.title" class="img-fluid rounded shadow">
<h3 class="mt-2">{{instructionGuide.title}}</h3>
<b>Author: </b>{{instructionGuide.author}}<br>
<b>Category: </b>{{instructionGuide.category}}<br>
<b>Equipment: </b>{{instructionGuide.equipment}}
<router-link :to="'/browse/'+ instructionGuide.id + '/edit'" class="btn btn-success"> Edit
</router-link>
</div>
<div class="col-md-8">
<div class="iframe-container">
<iframe class="w-100 rounded" :src='`https://www.youtube.com/embed/${instructionGuide.youtubeId}`' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<p class="mt-2"><b>Instructions: </b> {{instructionGuide.instructions}} </p>
</div>
</div>
</panel>
</div>
</template>

<script>

import IstructionGuidesService from '@/services/InstructionGuidesService'
import Panel from '@/components/Panel'

export default {
name: 'ViewInstructionGuide',
components: {
Panel
},
data () {
return {
// Returned Instruction Guide Data
instructionGuide: null
}
},
async mounted () {
// We want to get a instructionGuideId ID out of the route param and then use it to load the correct data using the ID
// Every time the route is changed on the client vue keeps track of this.
// This is done by the import {sync} from 'vuex-router-sync' in main.js
// Vuex stores the route at this.$store.state.route eg. '/browse/:instructionGuideId'
// To access a the params we say this.$store.state.route.params.instructionGuideId
const instructionGuideId = this.$store.state.route.params.instructionGuideId
this.instructionGuide = (await IstructionGuidesService.getInstructionGuideById(instructionGuideId)).data
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iframe-container{
position: relative;
width: 100%;
padding-bottom: 56.25%;
height: 0;
}
.iframe-container iframe{
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
}
</style>