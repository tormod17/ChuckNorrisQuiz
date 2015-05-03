$(document).ready(function(){

var currentQuestion =  0 ;//qna.indexOf(qna[0])
var questionNumber = 1;
var tOf= 1;
var booleanAnswer=false;
	
	 		  	
	$('#restartQuiz').click(function() {
			currentQuestion =0;
			questionNumber= 1;
			$('.fistWrapper img').remove();
			
			$('#questionBar').text('Q '+ questionNumber + ': ' + qna[currentQuestion].question);
			for ( var i=1; i < 4; i++) {
				$('#ans'+ i).text(qna[currentQuestion].answers[i-1][0]);
			};		
    }); 


	$('#ans1').click(function() {
		
			var booleanAnswer = qna[currentQuestion].answers[0][tOf];  
			alert(booleanAnswer);	
			if (booleanAnswer == true ) {
				$('.fistWrapper').append('<img src="http://i1378.photobucket.com/albums/ah112/Tormod_Smith/fist_zpsmhwxvwuk.jpg">')
			}
			//booleanChecker();
			nextQuestion();
	});
	$('#ans2').click(function() {
			var booleanAnswer = qna[currentQuestion].answers[1][tOf];  
			alert(booleanAnswer);
			if (booleanAnswer == true ) {
				$('.fistWrapper').append('<img src="http://i1378.photobucket.com/albums/ah112/Tormod_Smith/fist_zpsmhwxvwuk.jpg">')
			}
			//booleanChecker();
			nextQuestion();
	});
	$('#ans3').click(function() {
			var booleanAnswer = qna[currentQuestion].answers[2][tOf];  	
			alert(booleanAnswer);
			if (booleanAnswer == true ) {
				$('.fistWrapper').append('<img src="http://i1378.photobucket.com/albums/ah112/Tormod_Smith/fist_zpsmhwxvwuk.jpg">')
			}
			//booleanChecker();
			nextQuestion();
	});

	function nextQuestion () {
	currentQuestion+=1;
	questionNumber+=1;
			$('#questionBar').text('Q '+ questionNumber + ': ' + qna[currentQuestion].question);
			for (i=1; i<4;i++){
			$('#ans'+ i).text(qna[currentQuestion].answers[i-1][0]);
		}
	}
	/*function booleanChecker(){
		if (booleanAnswer == true ) {
			$('.fistWrapper').append('<img src="http://i1378.photobucket.com/albums/ah112/Tormod_Smith/fist_zpsmhwxvwuk.jpg">')
		}
	};*/
			
					
					
					
});



var qna = [ { 
question: 'What does Chuck Norris call everything around him?',
answers: [['My space',true], ['Air', false], ['Your belongings',false]]
},
{
question: 'How many times did Chuck Norris count to infinity ?',
answers : [['never',false],['he didn\'t',false],['twice',true]]
},
{
question :'Chuck Norris once ordered a steak in a restaurant. What happened next?',
answers: [['The waiter cried',false],['The steak did what it was told',true],['He got served chicken',false]]
},
{
question: 'If Chuck Norris was a Spartan in the movie 300, what would the movie be called?',
answers: [['The One',true], ['The 300 and Chuck',false],['The Invincibles',false]]	
},
{
question: 'When Chuck Norris turned 18, what did his parents do?',
answers: [['Buy him a car',false],['force him to get a job',false],['They moved out',true]]
}
];



/*

	 		  	
	$('#restartQuiz').click(function() {
				
			$('#questionBar').text(q1.qnumber + ' '+ q1.questions);
            for(var i=0;i<3;i++){		
                $('#ans'+i).text(questions[currentQuestion].answers[i][0]);	
                $('#ans'+i).attr('ordinal',i);
                $('#ans'+i).click(clickEventHandler);
            }
        
			$('#ans2').text(q1.answers[1][0]);	
            $('#ans2').attr('ordinal',1);
			$('#ans3').text(q1.answers[2][0]);						 			
            $('#ans3').attr('ordinal',2);
	});
        var clickEventHandler=function(){
            var o=$(this).attr('ordinal');
            var obj=answers[0];
            if(obj[1])
            
        };
*/