




















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


                const promise1 = new Promise((resolve,reject) => { setTimeout(() => { resolve('a') }) })

                const promise2 = new Promise((resolve,reject) => { resolve('b') })
                
                const promise3 = new Promise((resolve,reject) => { setTimeout(() => { resolve('c') },10) })
                
                Promise.all([promise1,promise2,promise3]) .then((msg) => { console.log(msg) })
                
                