let quotations = [
    {
     quote: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
     source: "William Shakespeare",
     year: 2020 
    },
    {
     quote: "Self-pity is our worst enemy and if we yield to it, we can never do anything wise in this world.",
     source: "Helen Keller",
     year: 2000 
    },
    {
     quote: "Wise men speak because they have something to say; Fools because they have to say something.",
     source: "Plato",
     year: 200 
    },
    {
     quote: "The wise man does at once what the fool does finally.",
     source: "Niccolo Machiavelli",
     year: 210 
    }
  ]
  
  let quoted = [];
  let newList=[];
  //let lists = '';
  
  //function to write message to screen
  function print(message){
    let outputToScreen = document.getElementById('quoteGoesHere');
    outputToScreen.innerHTML = message;
  }
  
  
  
  let list = 0;
  var quote;
  
  
    
  function randomNumber(quote){
    return quote[Math.floor(Math.random()*quote.length)];
  }
  
  //console.log(randomNumber(quotations))
  
  
  function randomQuote(quote){
    let randomList = [];
    for (let i = 0; i < quote.length; i ++){
      list = `<p>"${quote[i].quote}"</p> <p><em>${quote[i].source}</em> ${quote[i].year}</p>`
      randomList.push(list);
    }return randomNumber(randomList);
  }
  print(randomQuote(quotations));
  console.log(randomQuote(quotations));
  
  
  
  
  