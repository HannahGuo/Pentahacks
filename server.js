const express = require('express');

var app = express(); // create an express application - a server application.

app.listen(8080, () => {
    console.log('Server is now live.');
});

var ans1 = "No because they have insufficient funds.";
var RMresponse1 = "Client uses the land property as mortgage to get 20 million loan approval. With the interest rate of 7.8%, the interest is 1.56 million. Therefore, the client has the sufficient fund for project investment.";

var keyword_extractor = require("keyword-extractor");

var extraction_resultRM = keyword_extractor.extract(ans1, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false
});

var extraction_resultPro = keyword_extractor.extract(RMresponse1, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false
});

var termUseScore = (extraction_resultRM.length / extraction_resultPro.length ) * 100
