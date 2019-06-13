import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionNumber = 2;
  questionText = "How can you add a single line comment in a JavaScript?";
  questionChoices = [ 
                      {text: "one", value:1 },
                      {text: "two", value:2 },
                      {text: "three", value:3 },
                      {text: "Four", value:4 } ];
  selectedChoice = null;
  correctChoice = 1;
  showResult = false;
  explanations = ["this is explanation. and this could be too long", "this is second paragraph"]
  constructor() { }

  ngOnInit() {
    // var loading = $('#loadbar').hide();
    // $(document)
    // .ajaxStart(function () {
    //     loading.show();
    // }).ajaxStop(function () {
    // 	loading.hide();
    // });
  }

  choiceSelected(choice, e){
if(this.selectedChoice){
  return;
}
    this.showResult = true;
    this.selectedChoice = choice.value;
    let elem;
    if(e && e.target){
      elem = $(e.target).parent()[0];
    }

    if(this.selectedChoice == this.correctChoice){
       this.markAnwerCorrect(elem, choice);
    }
    else{
      this.markAnwerWrong(elem, choice);
    }

    this.disableAll();
  }
  disableAll() {
    $('.labelHover').removeClass('labelHover');
    $('.checkHover').removeClass('checkHover');
    $('ul li label').css('cursor','not-allowed');
  }
  markAnwerCorrect(elem: HTMLElement, choice: any) {
    if(elem){
      
      var checkDiv = $(elem).find('.check')[0];
      checkDiv.style.border = "5px solid #00FF00";
      checkDiv.style.background = "#00FF00";

      var label = $(elem).find('label')[0];
      label.style.color = '#00FF00';
    }

    if(choice){
      choice.result = "Your answer is correct!";
      $('#resultSet').css('color', '#00FF00');
    }
  }

  markAnwerWrong(elem: any, choice: any) {
    if(elem){
      
      var checkDiv = $(elem).find('.check')[0];
      checkDiv.style.border = "5px solid red";
      checkDiv.style.background = "red";

      var label = $(elem).find('.labelHover')[0];
      label.style.color = 'red';

    }

    if(choice){
      choice.result = "Wrong answer!";
      $('#resultSet').css('color', 'red');
    }
  }

}
