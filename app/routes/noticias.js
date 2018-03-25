module.exports = function(app){
    
    app.get('/noticias',function(req,res){

        var mysql = require('mysql');
    
        var connection = mysql.createConnection({
            host : '18.218.132.80',
            user: 'root',
            password: 'Wa180279',
            database: 'portal_noticias'
        })

        connection.query('Select * from noticias', function(error, result){
            res.render("noticias/noticias", {noticias : result})
        });
    })
};