process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const Connection            = require('../config/database');
const SurveyModel           = require('../models/survey.model');


describe("Survey Model", function(){

    it('Should return expected data when no survey is found.', async function(){
       
        let surveyModel = new SurveyModel();
        let data = await surveyModel.getSurvey();

        /* Check and expected data.status is equal to true */
        expect(data.status).to.equal(false);

        /* Check and expected data.result.email is equal to email */
        expect(data.message).to.equal("No survey found");
    });

    after(function(){
        /* close DB connection */ 
        Connection.end();
    });
});
// Write your test cases here. Make sure you write the test first, before writing any code.