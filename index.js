function calculateStudentsResults(){
    const totalRows = document.querySelectorAll('tr').length - 2;
    let sum = 0
    
    for (let i = 0; i < totalRows; i++) {
      let scores = document.querySelectorAll(".scores");
      let total_score = document.querySelector(`#total-score${i}`);
  
      let total = 0;
      for (let [index, score] of scores.entries()) {
          let data = score.getAttribute("data-row");
            if (i == data) {
            total_score.innerText =
                Number(total_score.innerText) + Number(score.innerText);
            }
      }
    }
};
calculateStudentsResults();