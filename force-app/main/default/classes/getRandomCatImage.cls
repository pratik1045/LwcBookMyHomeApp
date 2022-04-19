public with sharing class getRandomCatImage {
    
    @AuraEnabled(cacheable= true)
    public static string getRandomCat(){
        Http http= new Http();
        HttpRequest req= new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://api.thecatapi.com/v1/images/search');
        HttpResponse res= http.send(req);
        return res.getBody();
       
    }
}
