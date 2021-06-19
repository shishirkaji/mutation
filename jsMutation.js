// Suppose this is an custom dream car.

const dreamCar = {
  color: "white",
  noOfGears: 1,
  engine: "electric",
  noOfAirBags: 6,
  topSpeed: "400kmph",
  length: "10ft",
  breadth: "5ft",
  driverSeatType: "sports",
  frameMaterial: "aluminium",
  dashBoard: "carbonFiber",
};

console.log(
  "I am about to show you what exactly is mutation in software programming."
);

const manufacturingLine = {
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

    return { ...carBase, driverSeatType: "sports" };
  },

  addDashboad: (carBase) => {
    carBase["soundSystem"] = "beats";
    carBase["dashBoardMaterial"] = "carbon fiber";

    return carBase;
  },
  addEveryThingElse: (carBase) => {
    carBase["noOfGears"] = "1";
    carBase["engine"] = "electric";
    carBase["noOfAirBags"] = "6";
    carBase["topSpeed"] = "400";
    carBase["wheels"] = "alloy";
    carBase["tyreRimColor"] = "vanta black";

    return carBase;
  },

  addColor: (carBase, frameColor, tyreRimColor, numberPlateColor) => {
    frameColor ? (carBase["frameColor"] = frameColor) : undefined;

    tyreRimColor ? (carBase["tyreRimColor"] = tyreRimColor) : undefined;

    numberPlateColor
      ? (carBase["numberPlateColor"] = numberPlateColor)
      : undefined;

    return carBase;
  },
};

const createMyDreamCar = () => {
  // carWorkInProgress is a car that starts from nothing in production line to a production ready car that is to be driven.
  let carWorkInProgress;

  // testingColorInMyCar is a display of carWorkInProgress with different colors
  // it is used to test different colors so that I dont actually color my carWorkInProgress and
  // make it look horrible while trying

  let testingColorInMyCar;

  // myCompleteCar is simply the carWorkInProgress but after coloring it with my desired color.
  let myCompleteCar;

  const { createFrame, addSeats, addDashboad, addEveryThingElse, addColor } =
    manufacturingLine;

  // create frame

  carWorkInProgress = createFrame("shishir's car");

  console.log(carWorkInProgress);
  console.log("-- basic car structure is ready.");

  carWorkInProgress = addSeats(carWorkInProgress);

  console.log(carWorkInProgress);
  console.log("-- car after adding seats.");

  // now we will only use impure function to mutate carWorkInProgress.

  // it actually does not look like its being mutated.

  // the downside of such mutation are :

  carWorkInProgress = addDashboad(carWorkInProgress);

  console.log(carWorkInProgress);
  console.log("-- car after adding dashboard.");

  //   great this works as expected.

  carWorkInProgress = addEveryThingElse(carWorkInProgress);

  console.log(carWorkInProgress);
  console.log("-- car after adding everything else.");

  console.log(
    "######### from below this line I will try different color on my car unless mentioned. NOTE no changes should happen to my car that is almost ready as it is only trial ############"
  );

  // now we ONLY want to first see how the car would look when we create different colors but not actually paint it YET.
  // now here is the twist PAY ATTENTION!

  testingColorInMyCar = addColor(carWorkInProgress, "red", "white");

  console.log(testingColorInMyCar);
  console.log(
    "-- checking red frame color and white rim color on my dream car"
  );

  // nah red does not look good, huh lets try blue

  testingColorInMyCar = addColor(
    carWorkInProgress,
    "blue",
    "yellow",
    "dark red"
  );

  console.log(testingColorInMyCar);
  console.log(
    "-- checking blue frame color, yellow rim color and dark red number plate color on my dream car"
  );

  // cool blue looks good with yellow rim ONLY and NOT painting my number plate with dark red.
  // Number plate's color is good by default and that is what i am going to paint my car with .
  console.log("  ");

  console.log("######### ");
  console.log("color trial has finished.");
  console.log(
    "Now I am going to color my car with blue and number plate as green "
  );
  console.log("######### ");

  carWorkInProgress = addColor(carWorkInProgress, "blue", undefined, "green");

  //   finally after coloring my carWorkInProgress , my car is complete

  myCompleteCar = carWorkInProgress;

  console.log("  ");
  console.log("Awesome!  I have now colored your car and It looks like this.");

  console.log(myCompleteCar);
};

createMyDreamCar();
