console.log("A simple mutation demo.");

const manufacturingLine = {
  // this function creates basic frame of a car.
  createFrame: (carsName) => ({
    carsName,
    frameMaterial: "aluminium",
    length: "10ft",
    breadth: "5ft",
    numberPlateColor: "white",
  }),

  addSeats: (carBase) => {
    if (!carBase || !carBase.frameMaterial)
      throw new Error("Did you want me to hang the seat ? ");

    carBase["driverSeatType"] = "sports";
    carBase["noOfSeats"] = 4;

    return carBase;
  },

  addDashboad: (carBase) => {
    carBase["soundSystem"] = "beats";
    carBase["dashBoardMaterial"] = "carbon fiber";

    return carBase;
  },
  addEveryThingElse: (carBase) => {
    carBase["noOfGears"] = 1;
    carBase["engine"] = "electric";
    carBase["noOfAirBags"] = 6;
    carBase["topSpeed"] = 400;
    carBase["wheels"] = "alloy";
    carBase["tyreRimColor"] = "vanta black";

    return carBase;
  },

  addColor: (carBase, { frameColor, tyreRimColor, numberPlateColor }) => {
    frameColor ? (carBase["frameColor"] = frameColor) : undefined;

    tyreRimColor ? (carBase["tyreRimColor"] = tyreRimColor) : undefined;

    numberPlateColor
      ? (carBase["numberPlateColor"] = numberPlateColor)
      : undefined;

    return carBase;
  },
};

const createMyDreamCar = () => {
  // I will be using the methods from manufacturingLine object.

  const { createFrame, addSeats, addDashboad, addEveryThingElse, addColor } =
    manufacturingLine;

  console.log("Creating frame.");

  const carFrame = createFrame("shishir's car");

  console.log(carFrame);
  console.log("-- basic car structure is ready.");

  console.log("Adding seats.");

  const carWithSeats = addSeats(carFrame);

  console.log(carWithSeats);
  console.log("-- car after adding seats.");

  console.log("Adding dashboard.");

  const carWithDashBoard = addDashboad(carWithSeats);

  console.log(carWithDashBoard);
  console.log("-- car after adding dashboard.");

  console.log("Adding everything else.");

  const almostCompleteCar = addEveryThingElse(carWithSeats);

  console.log(almostCompleteCar);

  console.log("-- car after adding everything else.");

  console.log(
    "######### from below this line I will only TRY different color on the car. NOTE no changes should happen to my car that is almost ready as it is only trial ############"
  );

  // now we ONLY want to first see how the car would look when we create different colors but not actually paint it YET.
  // now here is the twist PAY ATTENTION!

  console.log("Trying red frame color and white wheel rim color.");

  testingColorInMyCar = addColor(almostCompleteCar, {
    frameColor: "red",
    tyreRimColor: "white",
  });

  console.log(testingColorInMyCar);
  console.log(
    "-- checking red frame color and white rim color on my dream car"
  );

  // nah red does not look good, huh lets try blue

  console.log(
    "Trying blue frame color, yellow rim color and dark red to number plate ."
  );

  testingColorInMyCar = addColor(almostCompleteCar, {
    frameColor: "blue",
    numberPlateColor: "dark red",
  });

  console.log(testingColorInMyCar);
  console.log(
    "-- checking blue frame color, yellow rim color and dark red number plate color on my dream car"
  );

  // cool, blue frame looks good with ONLY green number plate and NOT painting my car wheel rims.
  // Car wheel rims  is good by default (vanta black ) and that is what i am going to paint my car with .
  console.log("  ");

  console.log("######### ");
  console.log("color trial has finished.");
  console.log(
    "Now I am going to color my car with blue and number plate as green "
  );
  console.log("######### ");

  const myCompleteCar = addColor(almostCompleteCar, {
    frameColor: "blue",
    numberPlateColor: "green",
  });

  //   finally after coloring my carWorkInProgress , my car is complete

  console.log("  ");
  console.log(
    "Awesome!  I have now colored the almost ready car and It looks like this."
  );

  console.log(myCompleteCar);

  return myCompleteCar;
};

const finalExpectedCar = {
  carsName: "shishir's car",
  frameMaterial: "aluminium",
  length: "10ft",
  breadth: "5ft",
  numberPlateColor: "green",
  driverSeatType: "sports",
  noOfSeats: 4,
  soundSystem: "beats",
  dashBoardMaterial: "carbon fiber",
  noOfGears: 1,
  engine: "electric",
  noOfAirBags: 6,
  topSpeed: 400,
  wheels: "alloy",
  tyreRimColor: "vanta black",
  frameColor: "blue",
};

const finalCar = createMyDreamCar();

const isCarAsExpected = (finalCar, finalExpectedCar) => {
  let carIsAsExpected = true;

  if (Object.keys(finalCar).length == Object.keys(finalExpectedCar).length) {
    for (key in finalCar) {
      if (finalCar[key] !== finalExpectedCar[key]) {
        console.log(`${key} in finalCar ` + finalCar[key]);
        console.log(`${key} in finalExpectedCar` + finalExpectedCar[key]);

        carIsAsExpected = false;

        break;
      }
    }
  } else {
    console.log("object length is not equal");

    console.log(finalCar.length + finalExpectedCar.length);

    carIsAsExpected = false;
  }

  if (carIsAsExpected) {
    console.log("Mutation did not happen and the car is as expected");
  } else {
    console.log(
      `Mutation occured and is unexpected. The wheel rim color is ${finalCar.tyreRimColor} and should have been ${finalExpectedCar.tyreRimColor}`
    );

    console.log(finalExpectedCar);
  }
};

isCarAsExpected(finalCar, finalExpectedCar);
