$(document).ready(function(){

	var currentQuestion =  0 ;//qna.indexOf(qna[0])
	var questionNumber = 1;
	var tOf= 1;
	var booleanAnswer;
	var answerNumber;
	var counter=0;
	
	 		  	
		$('#restartQuiz').click(function() {
				currentQuestion =0;
				questionNumber= 1;
				answerNumber=0;
				counter=0;
				$('.fistWrapper img').remove();
				$('#questionBar').text('Q '+ questionNumber + ': ' + qna[currentQuestion].question);
			for ( var i=1; i < 4; i++) {
				$('#ans'+ i).text(qna[currentQuestion].answers[i-1][0]);
			}	
		}); 

		for ( var i=1; i < 4; i++){
			$('#ans'+i).click(clickEventHandler);
		}

		$('#help').click(function(){
			$('#helpSheet').show(300);

		});

		$('#popupContinueButton').click(function(){
			$('#Popup').hide(300);
			$(this).removeClass(".rightAnswer");
			$(this).removeClass(".wrongAnswer");
			
		});	

		$('#helpContinueButton').click(function(){
			$('#helpSheet').hide(300);
		});
	
		
			

	function clickEventHandler() {
		
				answerNumber = $(this).attr('id');
				answerNumber=parseInt(answerNumber[3])
				console.log (answerNumber);
				counter+= 16.666;
				drawszlider(100,counter);
				
				if ( qna[currentQuestion].answers[answerNumber-1][tOf] == true ) {
						
					
						$('.responseImg').addClass("rightAnswer");
						$('.wrongTxt').hide();
						$('.rightTxt').show(300);
						$('#Popup').show(300);///css({"display":'inline-block'});
						$('.fistWrapper').append('<img src="http://i1378.photobucket.com/albums/ah112/Tormod_Smith/fist_zpsmhwxvwuk.jpg">');
						
				} else { 


						$('.responseImg').addClass("wrongAnswer");
						$('.rightTxt').hide();	
						$('.wrongTxt').show(300);
						$('#Popup').show(300);///css({"display":'inline-block'});
						
			
				};
					currentQuestion+=1;
					questionNumber+=1;
						$('#questionBar').text('Q '+ questionNumber + ': ' + qna[currentQuestion].question);
				
				for ( i=1; i<4; i++)	{
						$('#ans' + i).text(qna[currentQuestion].answers[i-1][0]);
				};	
	 	
	 }	


	function drawszlider(ossz, meik){
	    var szazalek=Math.round((meik*100)/ossz);
	    document.getElementById("szliderbar").style.width=szazalek+'%';
	    document.getElementById("szazalek").innerHTML=szazalek+'%';
	}	
	


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
},
{
 question :"Why does Chuck Norris' calendar go from March 31st to April 2nd?",
 answers : [['Chuck can\'t read a calendar',false],['he follows his own calendar',false],['No one fools Chuck Norris',true]]
}];