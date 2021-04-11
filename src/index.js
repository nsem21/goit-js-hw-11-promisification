const ref = {
    navigation: document.querySelector('.nav'),
    firstBtn: document.querySelector('.first'),
    secondBtn: document.querySelector('.second'),
    thirdBtn: document.querySelector('.third')
}

ref.navigation.addEventListener('click', onClick);


function onClick(event) {


    if (event.target === ref.firstBtn) {
        task1();
        return;
    } else if (event.target === ref.secondBtn) {
        task2();
        return;
    } else if (event.target === ref.thirdBtn) {
        task3();
        return;
    }

}

function task1() {
    console.log("1st task");
    const delay = ms => {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        })
    };
    const logger = time => console.log(`Resolved after ${time}ms`);

    delay(2000).then(logger);
    delay(1000).then(logger);
    delay(1500).then(logger);
}


function task2() {
    console.log("2nd task");

    const users = [
        { name: 'Mango', active: true },
        { name: 'Poly', active: false },
        { name: 'Ajax', active: true },
        { name: 'Lux', active: false },
    ];

    const toggleUserState = (allUsers, userName) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? {...user, active: !user.active } : user,
        );

        return Promise.resolve(updatedUsers);
    };

    const logger2 = updatedUsers => console.table(updatedUsers);

    toggleUserState(users, 'Mango').then(logger2);
    toggleUserState(users, 'Lux').then(logger2);
};




function task3() {
    console.log("3 task");
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const makeTransaction = (transaction) => {
        const delay = randomIntegerFromInterval(200, 500);


        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const canProcess = Math.random() > 0.3;

                if (canProcess) {
                    resolve([transaction.id, delay]);
                } else {
                    reject(transaction.id);
                }
            }, delay);
        });

        return promise;
    };

    const logSuccess = ([id, time]) => {
        console.log(`Transaction ${id} processed in ${time}ms`);
    };

    const logError = id => {
        console.warn(`Error processing transaction ${id}. Please try again later.`);
    };
    /*
   * Работает так
 
  makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
  /*
   * Должно работать так
   */
    makeTransaction({ id: 70, amount: 150 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 71, amount: 230 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 72, amount: 75 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 73, amount: 100 })
        .then(logSuccess)
        .catch(logError);
};