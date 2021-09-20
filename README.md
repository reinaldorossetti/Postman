# Postman
Treinamentos ou Artigos.


// pegando os dados e variáveis para validação
const bodyResponse = pm.response.json();
const state = pm.iterationData.get("State")
const country = pm.iterationData.get("CountryCode")

pm.test("Validando o status code igual a 200", function () {  
   pm.response.to.have.status(200);  
});  

pm.test("Validando o body do response contem a string weather", function () {  
   pm.expect(pm.response.text()).to.include("weather");  
});  

pm.test("Validando dados da resposta da requisicao", function () {  
   console.log(bodyResponse.sys.country + "=" + country)  
   pm.expect(bodyResponse.sys.country).to.equal(country)    
   pm.expect(bodyResponse.name).to.equal(state)  
   pm.expect(bodyResponse.cod).to.be.equal(200)  
});  

const schema = {  
    "type": "object",  
    "properties": {  
    "name": { "type": "string" },  
    "id": { "type": "integer" },  
    "temp": {"type": "float"},  
    "temp_min": {"type": "float"},  
    "temp_max": {"type": "float"},  
}};  

pm.test('Validando o json Schema', function () {  
   pm.expect(tv4.validate(bodyResponse, schema)).to.be.true;  
});  
