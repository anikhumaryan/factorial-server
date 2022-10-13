const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors({
}))

const port = 8080

app.get('/:n', function(req, res){
    const n = req.params.n
    
    function factorial(p){
        if (p<0){
            return "undefined";
        }
        if(p == 0 || p == 1){
            return 1;
        }
        else{
            return p * factorial(p-1);
        }
    }
    var a = factorial(n)
    res.send(a.toString())
    res.end()
});

app.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on portt' + port)
    }
})