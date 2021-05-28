  let rovers = [ // All rovers currently on Mars
      {
        name: "Ironrover",
        direction: "N",
        position: {
          x: 0,
          y: 0
        },
        travelLog: []
      },
      {
        name: "Wagonrover",
        direction: "S",
        position: {
          x: 9,
          y: 9
        },
        travelLog: []
      }
    ];
    
    let obstacles = [ // Things which might block the way of a rover
      {
        name: "stone",
        position: {
          x: 3,
          y: 3
        }
      },
      {
        name: "mountain",
        position: {
          x: 4,
          y: 4
        }
      },
      {
        name: "cliff",
        position: {
          x: 5,
          y: 5
        }
      }
    ];
    
    function turnLeft(direc) { // Turns the rover to the left
      console.log('turnLeft was called');
      switch(direc) {
        case "N":
          return "W";
        case "S":
          return "E";
        case "E":
          return "N";
        case "W":
          return "S";
      }
    }
    
    function turnRight(direc) { // Turns the rover to the right
      console.log('turnRight was called');
      switch(direc) {
        case "N":
          return "E";
        case "S":
          return "W";
        case "E":
          return "S";
        case "W":
          return "N";
      }
    }
    
    function moveForward(rover) { // Moves the rover forward (if possible)
      console.log('moveForward was called');
      let hasMoved = false;
      if (rover.direction == "N") { // Rover is facing North
        if (rover.position.y > 0) { // Rover is not at the border
          if (checkObstacles(rover.position.x,rover.position.y-1) == false) { // No obstacles ahead, go rover!
            rover.position.y -= 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x,rover.position.y-1) + " blocking the way");
          }
        }
        else { // Rover at the border
          console.log("Can't go forward. You're at the border");
        }
        
      }
      else if (rover.direction == "S") { // Rover is facing South
        if (rover.position.y < 9) { // Rover is not at the border
          if (checkObstacles(rover.position.x,rover.position.y+1) == false) { // No obstacles ahead, go rover!
            rover.position.y += 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x,rover.position.y+1) + " blocking the way");
          }
        }
        else { // Rover at the border
          console.log("Can't go forward. You're at the border");
        }
      }
      else if (rover.direction == "E") { // Rover is facing East
        if (rover.position.x < 9) { // Rover is not at the border
          if (checkObstacles(rover.position.x+1,rover.position.y) == false) { // No obstacles ahead, go rover!
            rover.position.x += 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x+1,rover.position.y) + " blocking the way");
          }    
        }
        else { // Rover at the border
          console.log("Can't go forward. You're at the border");
        }
      }
      else if (rover.direction == "W") { // Rover is facing West
        if (rover.position.x > 0) { // Rover is not at the border
          if (checkObstacles(rover.position.x-1,rover.position.y) == false) { // No obstacles ahead, go rover!
            rover.position.x -= 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x-1,rover.position.y) + " blocking the way");
          }    
        }
        else { // Rover at the border
          console.log("Can't go forward. You're at the border")  
        }
      }
      else {
        console.log("Invalid direction");
      }
      // Updates rover's travel log
      if (hasMoved) {
        let newPosition = { x: rover.position.x, y: rover.position.y };
        rover.travelLog.push(newPosition);
      }
      return hasMoved;
    }
    
    function moveBackward(rover) { // Moves the rover backward (if possible)
      console.log('moveBackward was called');
      let hasMoved = false;
      if (rover.direction == "N") { // Rover is facing North
        if (rover.position.y < 9) {  // Rover is not at the border
          if (checkObstacles(rover.position.x,rover.position.y+1) == false) { // No obstacles ahead, go rover!
            rover.position.y += 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x,rover.position.y+1) + " blocking the way");
          }
        }
        else { // Rover at the border
          console.log("Can't go backward. You're at the border");
        }
      }
      else if (rover.direction == "S") { // Rover is facing South
        if (rover.position.y > 0) { // Rover is not at the border
          if (checkObstacles(rover.position.x,rover.position.y-1) == false) { // No obstacles ahead, go rover!
            rover.position.y -= 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x,rover.position.y-1) + " blocking the way");
          }
        }
        else { // Rover at the border
          console.log("Can't go backward. You're at the border");
        }
      }
      else if (rover.direction == "E") { // Rover is facing East
        if (rover.position.x > 0) { // Rover is not at the border
          if (checkObstacles(rover.position.x-1,rover.position.y) == false) { // No obstacles ahead, go rover!
            rover.position.x -= 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x-1,rover.position.y) + " blocking the way");
          }    
        }
        else { // Rover at the border
          console.log("Can't go backward. You're at the border");
        }
      }
      else if (rover.direction == "W") { // Rover is facing West
        if (rover.position.x < 9) { // Rover is not at the border
          if (checkObstacles(rover.position.x+1,rover.position.y) == false) { // No obstacles ahead, go rover!
            rover.position.x += 1;
            hasMoved = true;
          }
          else { // Obstacle ahead
            console.log("You can't move because there's a/an " + checkObstacles(rover.position.x+1,rover.position.y) + " blocking the way");
          }    
        }
        else { // Rover at the border
          console.log("Can't go backward. You're at the border");
          
        }
      }
      else {
        console.log("Invalid direction");
      }
      // Updates rover's travel log
      if (hasMoved) {
        let newPosition = { x: rover.position.x, y: rover.position.y };
        rover.travelLog.push(newPosition);
      }
      return hasMoved;
    }
      
    function moveRover(rover, command) {
      switch(command) { // Executes one of the four possible commands
        case "l":
          rover.direction = turnLeft(rover.direction);
          return true;
        case "r":
          rover.direction = turnRight(rover.direction);
          return true;
        case "f":
          return moveForward(rover);
        case "b":
          return moveBackward(rover);
      }
    }
    
    function checkObstacles(x,y) { // Checks if the rover can move
      for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i].position.x == x && obstacles[i].position.y == y) { // If there's an obstacle at the next position...
          return obstacles[i].name; // ...we'll know it, including the obstacle's name
        }
      }
      for (i = 0; i < rovers.length; i++) {
        if (rovers[i].position.x == x && rovers[i].position.y == y) { // If there's a rover at the next position...
          return rovers[i].name; // ...we'll know it, including the rover's name
        }
      }
      return false; // All clear, rover may go on
    }
      
    function receiveCommands(rover,commands) {
      let isValid = true;
      let hasMoved = false;
      
      if (commands.length > 0) {  // Commands were given
        for (let i = 0; i < commands.length; i++) {
          if (commands[i] != "f" && commands[i] != "b" && commands[i] != "r" && commands[i] != "l") { // If invalid commands were given, change isValid to "false"
            console.log("Please only use the following commands: 'f' for forward, 'b' for backward, 'r' for right, 'l' for left");
            isValid = false;
            break;
          }
        }
        
        if (isValid) { // Only valid commands were given
          console.log("Original " + rover.name + "'s position: [" + rover.position.x + "," + rover.position.y + "] with direction " + rover.direction);
          let newPosition = { x: rover.position.x, y: rover.position.y };

          if (rover.travelLog.length == 0) { // Prevents repeating the rover's last position in case of a new call to the rover
            rover.travelLog.push(newPosition); // Logs initial position
          }
          
          for (let i = 0; i < commands.length; i++) {
            hasMoved = moveRover(rover,commands.charAt(i)); // Executes one command at a time
            if (hasMoved) {
              console.log("Updated " + rover.name + "'s position: [" + rover.position.x + "," + rover.position.y + "] with direction " + rover.direction);
            }  
          }
        }
      }
        
      else { // No commands were given
        console.log("Are you forgetting to write the commands?");
      }
    }
    
    // Ironrover will bump into all three obstacles and a border
    receiveCommands(rovers[0],"frrffflfffrflffrflffbbbbb"); // Go Ironrover go!
    
    // Uncomment to see the travel log
    console.log(rovers[0].travelLog);
    
    // Wagonrover will bump into an obstacle and also into Ironrover
    receiveCommands(rovers[1],"rrfffflfffflfrffffffrf"); // Your turn, Wagonrover!
    
    // Uncomment to see the travel log
    console.log(rovers[1].travelLog);

    // Ironrover will bump into Wagonrover
    receiveCommands(rovers[0],"rf"); // Go Ironrover go!

    // Uncomment to see the travel log
    console.log(rovers[0].travelLog);