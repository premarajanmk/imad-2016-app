var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    articleOne : {
    title : 'article-one :Premraj',
    heading:'Article One',
    date :  'September 20th, 2016 ',
    content: `
    <p>
          
            This is the content for my first article 
            
            This is the content for my first article 
            
            This is the content for my first article 

        </p>
        <p>
            This is the content for my first article 
            This is the content for my first article 
            This is the content for my first article 
        </p>
        
        <p>
            This is the content for my first article 
            This is the content for my first article 

        </p>
    </div>    `
},
    articleTwo : {   title : 'article-two :Premraj',
    heading:'Article Two',
    date :  'September 21th, 2016 ',
    content: `
    <p>
          
            This is the content for my second article 
            
            This is the content for my second article 
            
            This is the content for my second article 

        </p>
        <p>
            This is the content for my second article 
            This is the content for my second article 
            This is the content for my second article 
        </p>
        
        <p>
            This is the content for my second article 
            This is the content for my second article 

        </p>
    </div>    `
},
    articleThree : {  title : 'article-one :Premraj',
    heading:'Article Three',
    date :  'September 22th, 2016 ',
    content: `
    <p>
          
            This is the content for my third article 
            
            This is the content for my third article 
            
            This is the content for my third article 

        </p>
        <p>
            This is the content for my third article 
            This is the content for my third article 
            This is the content for my third article 
        </p>
        
        <p>
            This is the content for my third article 
            This is the content for my third article 

        </p>
    </div>    `
},
 };

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate =
  `  
<html> 
<head>
   <title>
      ${title}
   </title> 
  <meta name="viewport" content="width-device-width, initial-scale-1"> 
  
          <link href="/ui/style.css" rel="stylesheet" />

  
</head>
  
<body>
    <div class ="container">
<div>
    <a href="/">Home</a>
 </div>    
    
  <hr/>
  
  <h3> 
       ${heading}
  
  </h3>
  <div>
        ${date}
  </div>
    
    <div>
        
        ${content}
    </div>
    
 </div>   
    
</body>



</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter', function(re,res){
    counter = counter+1;
    res.send(counter.toString());
});
app.get('/article-one', function(req,res){res.send(createTemplate(articleOne));}
);

app.get('/article-two', function(req,res){res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article.three', function(req,res){res.sendFile(path.join(__dirname,'article.three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names[];
app.get('/submit-name/:name', function(req,res)
{
    //get the name from the request
    var name;//T000
    names.push(name);
    //jason is java script object notation
    res.send(JSON, stringify(names));
    
}

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
