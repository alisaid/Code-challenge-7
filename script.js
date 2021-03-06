(function (){

    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
           console.log(i + ': ' + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        }
    }
    
    q1 = new Question('Who are you?', ['Ali', 'Veli', 'Huso'], 0);
    q2 = new Question('Is css bullshit?', ['yes', 'no', 'maybe'], 1);
    q3 = new Question('What is your profession?', ['teacher', 'designer', 'developer', 'police officer'], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    
    questions[n].checkAnswer(answer);
    
    })();