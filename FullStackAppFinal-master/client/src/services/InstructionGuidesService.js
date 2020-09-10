import Api from '@/services/Api';

export default{
  // getAllInstructionGuides(){
  //   return Api().get('instructionguides');
  // },

  getInstructionGuides(search) {
    return Api().get('instructionGuides', { params: { search: search } })
},

   
  postInstructionGuide(instructionGuide){
    return Api().post('instructionguides',instructionGuide);
  },
  getInstructionGuideById(instructionGuideId){
    return Api().get(`instructionguide/${instructionGuideId}`);
  },
  putInstructionGuide(instructionGuideId,instructionGuide) {
    return Api().put(`instructionguide/${instructionGuideId}`, instructionGuide)
    }
}