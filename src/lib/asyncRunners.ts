import {parallel, waterfall} from 'async';


const wTaskRunner = (tasks) => {

    waterfall(tasks, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
        }
    })

};

const pTaskRunner = (tasks) => {

    parallel(tasks, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
        }
    })

};


export function RunAsyncWaterfall(tasks) {

    wTaskRunner(tasks);

}

export function RunAsyncParallel(tasks) {

    pTaskRunner(tasks);

}