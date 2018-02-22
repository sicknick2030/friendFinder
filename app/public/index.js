var panel = $("#quiz-area");


var questions = [{
  question: "How often do you go on a hike?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you go to the movies?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you go shopping?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you play sports?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you play video games?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you cook?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you travel?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you go out to party?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you exercise?",
  answers: ["1", "2", "3", "4", "5"]
}, {
  question: "How often do you go to the beach?",
  answers: ["1", "2", "3", "4", "5"]
}, ];

var game = {


  start: function() {
    // timer = setInterval(game.countdown, 1000);

    // $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();



    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      
        panel.append("<select id=q" + i +"name='answers-" + i +"'> <option value=''>Select A Number</option> <option value='1'</option>1 (not at all)<option value='2'</option>2 (Only a little bit)<option value='3'</option>3 (Sometimes)<option value='4'</option>4 (Pretty often)<option value='5'</option>5 (All the time)</select>");
      
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    var userInput = {
      name:"",
      image:"",
      scores: [
       $("input[name='answers-0']:checked").val(),
       console.log($("input[name='answers-0']:checked").val()),
       $("input[name='question-0']:checked"),
       $("input[name='question-0']:checked"),
       $("input[name='question-0']:checked"),

      ]
    }
  } 
  // app.post("/api/new", function(req, res) {
  // // req.body hosts is equal to the JSON post sent from the user
  // // This works because of our body-parser middleware
  //   var newcharacter = req.body;
  //   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  //   console.log(newcharacter);

  //   characters.push(newcharacter);

  //   res.json(newcharacter);
  // }); 
  //   Make a post request to our back end
  //   Matching appropriate route
  //   Sending the user input
};

//   result: function() {

//     clearInterval(timer);

//     $("#sub-wrapper h2").remove();

//     panel.html("<h2>All Done!</h2>");
//     panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
//     panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
//     panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
//   }
// };

// CLICK EVENTS
$(document).ready(function(){

  $(document).on("click", "#start", function() {
    game.start();
  });


  $(document).on("click", "#done", function() {
    game.done();
  });
})