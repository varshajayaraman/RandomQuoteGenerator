quoteLib=[{
    'id':0,
	'quote':"An apple a day keeps the doctor away",
   'author':"Unknown"},
 {
    'id':1,
	'quote':"A stitch in time saves nine",
  'author':"Unknown"},
 {
    'id':2,
	'quote':"Make hay while the sun shines",
  'author':"Unknown"},
 {
    'id':3,
	'quote':"Awake, arise and stop not till your goal is reached",
  'author':"Swami Vivekananda"},
 {
    'id':4,
	'quote':"Strike the iron when it is hot",
   'author':"Unknown"}	];


$("document").ready(function(){
  $("#newQuote").click(function(){
     var id = Math.floor(Math.random()*5);
     $("#quotetext").html("<h1><em>"+quoteLib[id].quote+"</em></h1><br><em>-"+quoteLib[id].author+"</em>");
      
    
  });
});