const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const InstructionGuideController  = require('./controllers/InstructionGuideController')


module.exports = (app) => {

    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register);

    app.post('/login',
        AuthenticationController.login);

    app.get('/instructionGuides',
    InstructionGuideController.getInstructionGuides);   
    
    app.get('/instructionguide/:instructionGuideId',
    InstructionGuideController.getInstructionGuideById);
    
    app.put('/instructionguide/:instructionGuideId',
    InstructionGuideController.putInstructionGuideById);

    app.post('/instructionGuide',
    InstructionGuideController.postInstructionGuides); 


}