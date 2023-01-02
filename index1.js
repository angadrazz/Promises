




















async function x() {
        try{
          await Promise.reject("Rejected!!")
        } catch(e) {
          console.log(e)
        }
      }

x();


function doATask(callback) {
        console.log("Task 1 done!")
        callback()
        }
        function yetAnotherTask() {
        console.log("Task 2 done!")
        }
        doATask(yetAnotherTask);


const promise = new Promise((resolve,reject) => {
                resolve(1)
                })
                