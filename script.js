//"confirm box" showing user for palying Quiz Game

const userConfirmation = confirm("Do you want to play the quiz?");

//math questions
const mathQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const mathOneAnswer = "d";
const mathQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const mathTwoAnswer = "a";
const mathQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const mathThreeAnswer = "a";
//Science questions
const scienceQuestionOne =
  "Who is the father of Botany ? \n A. Aristotle \n B. Theophrastus \n C. Albert Einstein \n D. Alexyander";
const sciOneAnswer = "B";

const scienceQuestionTwo =
  "What is the freezing point of water as per the Fahrenheit scale? \n A. 0° \n B. 32° \n C. 100° \n D. 212°";
const sciTwoAnswer = "A";

const scienceQuestionThree =
  "Which of the following scientific discoveries was made by C.V Raman? \n A. Inelastic scattering of light by molecules \n B. Super Conductivity \n C. Controlled nuclear fission \n D. Cyclotron";
const sciThreeAnswer = "a";

//English questions
const englishQuestionOne = "Which of the following sentences uses correct subject-verb agreement? \n A. The cat sit on the mat. \n B. The cat sits on the mat. \n C. The cat sitting on the mat. \n D. The cat sitting.";
const englishAnswer = "B";

const englishQuestionTwo = "What is the capital of France? \n A. London \n B. Paris \n C. Rome \n D. Berlin";
const engtwoAnswer = "B";

const englishQuestionThree = "What is the chemical symbol for water? \n A. H2O \n B. CO2 \n C. NaCl \n D. O2";
const engthreeAnswer= "A";

//history questions
const historyQuestionOne = "Who was the first President of the United States? \n A. Thomas Jefferson \n B. Abraham Lincoln \n C. George Washington \n D. John Adams";
const histoneAnswer= "C";

const historyQuestionTwo = "In which year did World War II end? \n A. 1945 \n B. 1939 \n C. 1918 \n D. 1941";
const histtwoAnswer= "A";

const historyQuestionThree = "Who was the leader of the Soviet Union during the Cuban Missile Crisis? \n A. Joseph Stalin \n B. Vladimir Lenin \n C. Nikita Khrushchev \n D. Mikhail Gorbachev";
const histthreeAnswer= "C";

//gepgraphy questions
const geographyQuestionOne = "Which river is the longest in the world? \n A. Amazon \n B. Nile \n C. Mississippi \n D. Yangtze";
const geooneAnswer= "B";

const geographyQuestionTwo = "Which country is known as the Land of the Rising Sun? \n A. China \n B. Japan \n C. South Korea \n D. Thailand";
const geotwoAnswer= "B";

const geographyQuestionThree = "Which desert is the largest in the world? \n A. Sahara \n B. Gobi \n C. Arabian \n D. Kalahari";
const geothreeAnswer= "A";

//gk questions
const gkQuestionOne = "Who painted the Mona Lisa? \n A. Leonardo da Vinci \n B. Vincent van Gogh \n C. Pablo Picasso \n D. Michelangelo";
const gkoneAnswer= "A";

const gkQuestionTwo = "What is the chemical symbol for gold? \n A. Au \n B. Ag \n C. Fe \n D. Cu";
const gktwoAnswer= "A";

const gkQuestionThree = "What is the currency of Japan? \n A. Yen \n B. Euro \n C. Dollar \n D. Pound";
const gkthreeAnswer= "A";


//ask user to select a subject

if (userConfirmation) {
  //adding while loop here for itaration if user choose wrong option
  while (userConfirmation) {
    var userInput = prompt(
      "Please select a subject choosing A to F \n \n A. Mathmatics \n B. Science \n C. English \n D. History \n E. Geography \n F .GK \n"
    );
    {
      switch (
        userInput.toLowerCase() // here adding toLowerCase() method for lowercase
      ) {
        case "a":
          alert("You are choosing Mathematics");

          //question number 1 start (Mathematics)
          var userMathQuestionOne = prompt(mathQuestionOne);
          if (userMathQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
            correctAns +=1;
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (Mathematics)
          var userMathQuestionTwo = prompt(mathQuestionTwo);
          if (userMathQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (Mathematics)
          var userMathQuestionThree = prompt(mathQuestionThree);
          if (mathQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }
          userConfirmation = false;
          break;
          
        case "b":
          alert("You are choosing Science");
          //question number 1 start (Science)
          var userScienceQuestionOne = prompt(scienceQuestionOne);
          if (userScienceQuestionOne.toLowerCase() == "b") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (Science)
          var userScienceQuestionTwo = prompt(scienceQuestionTwo);
          if (userScienceQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (Science)
          var userScienceQuestionThree = prompt(scienceQuestionThree);
          if (userScienceQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }
          userConfirmation = false;
          break;
        case "c":
          alert("You are choosing English");

          //question number 1 start (English)
          var userenglishQuestionOne=prompt(englishQuestionOne);
          if (userenglishQuestionOne.toLowerCase() == "b") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (English)
          var userenglishQuestionTwo=prompt(englishQuestionTwo);
          if (userenglishQuestionTwo.toLowerCase() == "b") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (English)
          var userenglishQuestionThree=prompt(englishQuestionThree);
          if (userenglishQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "d":
          alert("You are choosing History");

          //question number 1 start (history)
          var userhistoryQuestionOne=prompt(historyQuestionOne);
          if (userhistoryQuestionOne.toLowerCase() == "c") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (history)
          var userhistoryQuestionTwo=prompt(historyQuestionTwo);
          if (userhistoryQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (history)
          var userhistoryQuestionThree= prompt(historyQuestionThree);
          if (userhistoryQuestionThree.toLowerCase() == "c") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "e":
          alert("You are choosing Geography");

          //question number 1 start (geography)
          var usergeographyQuestionOne=prompt(geographyQuestionOne);
          if (usergeographyQuestionOne.toLowerCase() == "b") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (geography)
          var usergeographyQuestionTwo=prompt(geographyQuestionTwo);
          if (usergeographyQuestionTwo.toLowerCase() == "b") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (geography)
          var usergeographyQuestionThree=prompt(geographyQuestionThree);
          if (usergeographyQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "f":
          alert("You are choosing GK");

          //question number 1 start (gk)
          var usergkQuestionOne=prompt(gkQuestionOne);
          if (usergkQuestionOne.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (gk)
          var usergkQuestionTwo=prompt(gkQuestionTwo);
          if (usergkQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (gk)
          var usergkQuestionThree=prompt(gkQuestionThree);
          if (usergkQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        default:
          alert("Please choose a correct option");
      }
    }
  }
} else {
  alert("No Problem See you on Next Time");
}
