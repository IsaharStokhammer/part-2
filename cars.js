const carStore = {
    staff: {
      manager: {
        name: "Yossi Nissan",
        salary: 40000,
        phone: "+972-524-385-937",
      },
      workers: [
        {
          name: "Guy Peretz",
          salary: 4000,
          role: "Clerk",
        },
        {
          name: "Ronen Haim",
          salary: 9000,
          role: "Agent",
        },
        {
          name: "Idan Avinoam",
          salary: 7000,
          role: "Agent",
        },
        {
          name: "Ohad Rot",
          salary: 28500,
          role: "Agent",
        },
      ],
    },
    cars: [
      {
        type: "Lamborghini Diabolo VT 6.0",
        price: "1000000$",
        color: "Red",
      },
      {
        type: "Mercedes",
        price: "100000$",
        color: "Red",
      },
      {
        type: "Honda",
        price: "20000$",
        color: "black",
      },
      {
        type: "Honda",
        price: "21000$",
        color: "blue",
      },
    ],
  };
  
  // Create a function named 'getManagerDetails' that gets input of 'carStore'
  // and returns the manager details in this format: 'Name Salary Phone'
  const getManagerDetails = (carStore) => {
    return carStore.staff.manager.name + " " + carStore.staff.manager.salary + " " + carStore.staff.manager.phone    
  }
  console.log(getManagerDetails(carStore));
  // Create a function Named 'getAmountOfCars' that gets
  // input of 'carStore' and returns how many cars it has in the inventory
  const getAmountOfCars = (carStore) => {
    return carStore.cars.length
  }
  console.log(getAmountOfCars(carStore));
  
  // Create a function named 'getMostPayed' that gets input of 'carStore'
  // and returns the object of the worker that get payed the most
  function getMostPayed(carStore){
    let res = carStore.staff.workers[0];
    carStore.staff.workers.forEach((worker) => {
      if (worker.salary > res.salary) {
        res = worker;
      }
    })
    return res
  }
  console.log(getMostPayed(carStore));

  // Create a function named 'getMostExpensiveCar' that gets input of 'carStore'
  // and returns a string that contains the name of the most expansive car and its price
  // e.g: 'Toyota 9000$'
  function getMostExpensiveCar(carStore){
    let res = carStore.cars[0];
    
    carStore.cars.forEach((car) => {
      if (parseInt(car.price.slice(0, -1)) > (parseInt(res.price.slice(0, -1)))) {
        res = car;
      }
    })
    return res.type + " " + res.price
  }
  console.log(getMostExpensiveCar(carStore));
  
  // Create a function named 'getMostExpensiveCar' that gets input of 'cars' array
  // and return the amount of cars named honda. 
  // ** tip: you can use reduce array method **
  function getAmountOfHondas(carStore){
      return carStore.cars.filter((car) => car.type === "Honda").length
  }
  
  // Create a function named 'getTotalWorth' that gets input of 'cars' array
  // and returns the total sum of money all the cars in the store are worth
  