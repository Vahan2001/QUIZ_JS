const questions = [
  {
    question: `What do you understand by HTML?`,
    answers: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of elements that helps the browser how to view the content",
      "All of the above",
    ],
    chishtP: 4,
  },
  {
    question: `Who is the father of HTML?`,
    answers: [
      "Rasmus Lerdorf",
      "Tim Berners-Lee",
      "Brendan Eich",
      "Sergey Brin",
    ],
    chishtP: 2,
  },
  {
    question: `HTML stands for ___`,
    answers: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText Marking Language",
      "HighText Marking Language",
    ],
    chishtP: 1,
  },
  {
    question: `Which is used to read an HTML page and render it?`,
    answers: ["Web server", "Web network", "Web browser", "Web matrix"],
    chishtP: 3,
  },
  {
    question: `Which tag is used for inserting the largest heading in HTML?`,
    answers: ["head", "h1", "h6", "heading"],
    chishtP: 2,
  },
  {
    question: `Which is used to create Web Pages ?`,
    answers: ["C++", "Java", "HTML", "JVM"],
    chishtP: 3,
  },
  {
    question: `Who is making the Web standards?`,
    answers: [
      "Microsoft",
      "The World Wibe Web Consortium",
      "Google",
      "Mozilla",
    ],
    chishtP: 2,
  },
];

const headerContainer = document.querySelector(`#header`);
const listContainer = document.querySelector(`#list`);
const submitBtn = document.querySelector(`#submitNext`);
const submitBtnReset = document.querySelector(`#submitReset`);
const questionNum = document.querySelector(".question-number");
let chishtPatCount = 0;
let questionIndex = 0;
let questionCount = 1;
clearPage();
showQuestion();
submitBtn.addEventListener(`click`, checkAnswer);

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}
function showQuestion() {
  const headerTemplate = `<h2 class="title">"Harc"</h2> 
                            <h4>1/10</h4>`
    .replace(`Harc`, questions[questionIndex][`question`])
    .replace(`1`, questionCount)
    .replace(`10`, questions.length);
  headerContainer.innerHTML = headerTemplate;
  let patasxanNum = 1;
  questionCount++;
  for (let patasxanText of questions[questionIndex][`answers`]) {
    const listTemplate = `
            <li>
                <label>
                    <input type="radio" value="patsxanNum" class="patasxan" name="patasxan"></input>
                    <span>Patasxan</span>
                </label>
            </li>`
      .replace(`Patasxan`, patasxanText)
      .replace(`patsxanNum`, patasxanNum);
    listContainer.innerHTML += listTemplate;
    patasxanNum++;
  }
}

function checkAnswer() {
  const checkedRadio = listContainer.querySelector(
    `input[type="radio"]:checked`
  );
  if (!checkedRadio) {
    return;
  }
  const userPatasxan = +checkedRadio.value;

  if (userPatasxan === questions[questionIndex][`chishtP`]) {
    chishtPatCount++;
  }
  if (questionIndex === questions.length - 1) {
    clearPage();
    showResults();
  } else {
    questionIndex++;
    clearPage();
    showQuestion();
  }
}

function showResults() {
  let result = `${chishtPatCount} / ${questions.length}`;
  headerContainer.innerHTML = result;
}

function reset() {
  submitBtnReset.addEventListener("click", () => {
    chishtPatCount = 0;
    questionIndex = 0;
    questionCount = 1;
    clearPage();
    showQuestion();
    checkAnswer();
  });
}
reset();
