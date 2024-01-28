function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;

      const flipCoinAndCheck = () => {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);

          if (result === "heads") {
              headsCount++;

              if (headsCount === 5) {
                  resolve(`It took ${attempts} tries to flip five "heads"`);
              } else if (attempts > 100) {
                  reject("Oops! It took more than 100 attempts. Giving up.");
              } else {
                  flipCoinAndCheck();
              }
          } else {
              headsCount = 0;
              flipCoinAndCheck();
          }
      };

      flipCoinAndCheck();
  });
}

fiveHeads()
  .then((res) => {console.log(res);})
  .catch((err) => {console.log(err);});
console.log("When does this run now?");
