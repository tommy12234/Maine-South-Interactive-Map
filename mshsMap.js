window.onload = function(){
    var MAP_WIDTH  = 760;
    var MAP_HEIGHT = 645;

    var paper = Raphael(0, 0, MAP_WIDTH, MAP_HEIGHT);

    //Creation of all styles for rooms
    //Bathrooms: Grey
    var bathStyle = {
        fill: "#a9a9a9",
        stroke: "#696969",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };  
    //Administrative/Other non-academic rooms: Brown
    var miscNARoomstyle = {
        fill: "#915b15",
        stroke: "#442a08",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Unknown Rooms (will later become just stairs): Black and Grey
    var unknownRoomStyle = {
        fill: "#3a3a3a",
        stroke: "#000000",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Math: Blue
    var mathRoomStyle = {
        fill: "#0be8dd",
        stroke: "#0e726d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //English: Red
    var engRoomStyle = {
        fill: "#c40b0b",          
        stroke: "#6d0d0d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Science: Green
    var sciRoomStyle = {
        fill: "#1b9b17",
        stroke: "#093d07",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Social Science: Orange
    var socSciRoomStyle = {
        fill: "#dd800d",
        stroke: "#96570a",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Foreign Language: Yellow
    var langRoomStyle = {
        fill: "#f7ec20",
        stroke: "#a59f2b",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Miscellanious rooms (such as art electives): Purple
    var miscRoomStyle = {
        fill: "#ff66ff",
        stroke: "#660066",
        "stoke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
      
    var hundredBarriersStyle = {
        fill: "#ffffff",
        stroke: "#000000",
        "stroke-width": 1,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    //Put all region names with locations and stuff in here
    var mathRooms = {}, engRooms = {}, sciRooms = {}, socSciRooms = {}, langRooms = {}, miscRooms = {}, unknownRooms = {}, miscNARooms = {}, bathrooms = {};

    //Not sure this is necessary
    //var regions = {mathRooms, engRooms, sciRooms, histRooms, langRooms, miscRooms};
      
    //Temporary rectangles to be used as a coordinate system for other room placement
    var hundredBarriers = {};
    hundredBarriers["0-100, 0-100"] = paper.rect(0, 0, 100, 100);
    hundredBarriers["100-200"] = paper.rect(100, 0, 100, 20);
    hundredBarriers["200-300"] = paper.rect(200, 0, 100, 20);
    hundredBarriers["300-400"] = paper.rect(300, 0, 100, 20);
    hundredBarriers["400-500"] = paper.rect(400, 0, 100, 20);
    hundredBarriers["500-600"] = paper.rect(500, 0, 100, 20);
    hundredBarriers["600-700"] = paper.rect(600, 0, 100, 20);
    hundredBarriers["700-760"] = paper.rect(700, 0, 100, 20);
      
    hundredBarriers["100-200"] = paper.rect(0, 100, 20, 100);
    hundredBarriers["200-300"] = paper.rect(0, 200, 20, 100);
    hundredBarriers["300-400"] = paper.rect(0, 300, 20, 100);
    hundredBarriers["400-500"] = paper.rect(0, 400, 20, 100);
    hundredBarriers["500-600"] = paper.rect(0, 500, 20, 100);
    hundredBarriers["600-645"] = paper.rect(0, 600, 20, 100);
    
    //East side even-numbered 1st Floor A-wing rooms
    unknownRooms["East A-Wing Stairs (1st Floor)"] = paper.rect(708, 333, 39, 11);
    mathRooms["A128"] = paper.rect(708, 346, 39, 14);
    mathRooms["A126"] = paper.rect(708, 361, 39, 17);
    mathRooms["A124"] = paper.rect(708, 379, 39, 17);
    mathRooms["A122"] = paper.rect(708, 397, 39, 17);
    mathRooms["A120"] = paper.rect(708, 415, 39, 14);
    miscRooms["A118 (Driver's Ed)"] = paper.rect(708, 431, 39, 13);
    miscNARooms["A116"] = paper.rect(708, 446, 39, 15);
    mathRooms["A114"] = paper.rect(708, 463, 39, 18); 
    unknownRooms["Main A-Wing Stairs (1st Floor)"] = paper.rect(708, 483, 39, 21);
      
    //West side even-numbered First Floor A-wing rooms
    mathRooms["A112"] = paper.rect(708, 524, 39, 10);
    mathRooms["A110"] = paper.rect(708, 535, 39, 10);
    mathRooms["A108 (Math Department Chair)"] = paper.rect(708, 546, 39, 6);
    unknownRooms["A106-A"] = paper.rect(708, 554, 39, 7);
    unknownRooms["A106-B"] = paper.rect(708, 562, 39, 6);
    engRooms["A104 and A104-A"] = paper.rect(708, 570, 39, 9);  
    unknownRooms["West A-Wing Stairs (1st Floor)"] = paper.rect(708, 581, 39, 10);
    engRooms["A102"] = paper.rect(708, 593, 39, 8);
      
    //East side odd-numbered 1st Floor A-Wing rooms
    mathRooms["A127"] = paper.rect(668, 342, 25, 17);  
    mathRooms["A125"] = paper.rect(668, 360, 25, 17);
    mathRooms["A123"] = paper.rect(668, 378, 25, 17);  
    mathRooms["A121"] = paper.rect(668, 396, 25, 17);
    unknownRooms["North A-Wing Stairs (1st Floor)"] = paper.rect(668, 415, 25, 9);  
    mathRooms["A119"] = paper.rect(668, 426, 25, 18);
    mathRooms["A117"] = paper.rect(668, 445, 25, 15);
    mathRooms["A115"] = paper.rect(668, 461, 25, 18);
    bathrooms["1st Floor A-Wing Bathrooms"] = paper.rect(668, 481, 25, 23);
    
    //West side odd-numbered 1st Floor A-wing rooms
    mathRooms["A113"] = paper.rect(668, 524, 25, 10);
    mathRooms["A111"] = paper.rect(668, 535, 25, 8);
    mathRooms["A109"] = paper.rect(668, 544, 25, 8);  
    mathRooms["A107"] = paper.rect(668, 553, 25, 10);
    engRooms["A105"] = paper.rect(668, 565, 25, 8);
    mathRooms["A103"] = paper.rect(668, 575, 25, 8);
    mathRooms["A101"] = paper.rect(668, 584, 25, 8);
    mathRooms["A101-A (Math lab)"] = paper.rect(668, 593, 25, 8);
      
    //Even-numbered 2nd Floor A-wing rooms 
    unknownRooms["East A-Wing Stairs (2nd Floor)"] = paper.rect(711, 25, 42, 16);  
    sciRooms["A230"] = paper.rect(711, 43, 42, 23);
    miscNARooms["Chemistry Prep Room (Staff Only)"] = paper.rect(711, 68, 42, 9);
    sciRooms["A228"] = paper.rect(711, 79, 42, 27);
    socSciRooms["A224"] = paper.rect(711, 108, 42, 20);
    socSciRooms["A222"] = paper.rect(711, 129, 42, 8);
    socSciRooms["A220"] = paper.rect(711, 138, 42, 19);
    langRooms["A218"] = paper.rect(711, 159, 42, 12);
    unknownRooms["Main A-Wing Stairs (2nd Floor)"] = paper.rect(711, 173, 42, 14);
    socSciRooms["A216"] = paper.rect(711, 189, 42, 8);
    langRooms["A214"] = paper.rect(711, 199, 42, 9);
    langRooms["A212"] = paper.rect(711, 209, 42, 9);
    langRooms["A210"] = paper.rect(711, 219, 42, 9);
    langRooms["A208"] = paper.rect(711, 229, 42, 12);
    langRooms["A206"] = paper.rect(711, 242, 42, 12);
    langRooms["A204"] = paper.rect(711, 255, 42, 12);
    unknownRooms["West A-Wing Stairs (2nd Floor)"] = paper.rect(711, 269, 42, 9);
    socSciRooms["S202"] = paper.rect(711, 280, 42, 17);
    
    //Odd-numbered 2nd Floor A-wing rooms
    socSciRooms["A233"] = paper.rect(661, 39, 36, 12);
    //A231 and A229 are sometimes conjoined to serve both English and Social Science classes. For this program, A231 will be considered a social science room only, and A229 will be considered an English-only room.
    socSciRooms["A231"] = paper.rect(661, 52, 36, 20);
    engRooms["A229"] = paper.rect(661, 74, 36, 18);
    socSciRooms["A227"] = paper.rect(661, 94, 36, 14);
    unknownRooms["North A-Wing Stairs (2nd Floor)"] = paper.rect(661, 110, 36, 10);
    engRooms["A225"] = paper.rect(661, 122, 36, 10);
    socSciRooms["A223"] = paper.rect(661, 134, 36, 14);
    socSciRooms["A221"] = paper.rect(661, 149, 36, 12);
    langRooms["A219"] = paper.rect(661, 163, 36, 12);
    bathrooms["2nd Floor A-Wing Bathrooms (Staff Only)"] = paper.rect(661, 177, 36, 10);
    miscNARooms["A217 (Social Science and Foreign Language Department Chairs)"] = paper.rect(661, 189, 36, 10);
    miscNARooms["A215 (Social Science Department Office)"] = paper.rect(661, 200, 36, 10);
    miscNARooms["A213 (Foreign Language Department Office)"] = paper.rect(661, 211, 36, 10);
    engRooms["A211"] = paper.rect(661, 223, 36, 10);
    socSciRooms["A209"] = paper.rect(661, 235, 36, 10);
    socSciRooms["A207"] = paper.rect(661, 246, 36, 10);
    socSciRooms["A205"] = paper.rect(661, 257, 36, 10);
    langRooms["A203"] = paper.rect(661, 269, 36, 12);
    socSciRooms["A201 and A201-A (Social Worker)"] = paper.rect(661, 283, 36, 14);
    
    //Even-numbered 3rd Floor A-wing rooms
    unknownRooms["East A-Wing Stairs (3rd Floor)"] = paper.rect(580, 24, 40, 15);
    sciRooms["A320"] = paper.rect(580, 41, 40, 34);
    sciRooms["A318"] = paper.rect(580, 76, 40, 28);
    miscNARooms["A318-A (Science Office)"] = paper.rect(580, 106, 40, 10);
    sciRooms["A316"] = paper.rect(580, 118, 40, 32);
    sciRooms["A314"] = paper.rect(580, 151, 40, 30);
    unknownRooms["Main A-Wing Stairs (3rd Floor)"] = paper.rect(580, 183, 40, 18);
    miscNARooms["A312 Chemistry Storage (Staff Only)"] = paper.rect(580, 203, 40, 12);
    sciRooms["A310"] = paper.rect(580, 217, 40, 14);
    sciRooms["A308"] = paper.rect(580, 232, 40, 14);
    sciRooms["A306"] = paper.rect(580, 247, 40, 14);
    sciRooms["A304"] = paper.rect(580, 262, 40, 12);
    unknownRooms["West A-Wing Stairs (3rd Floor)"] = paper.rect(580, 276, 40, 10);
    //This will be spaced differently than other same-color adjacent rooms, because this will be discovere dwhat type later
    unknownRooms["A300"] = paper.rect(580, 288, 40, 9);
    
    //Odd-numbered A-Wing Rooms
    miscNARooms["A321 (Social Worker)"] = paper.rect(529, 24, 37, 15);
    sciRooms["A319"] = paper.rect(529, 41, 37, 32);
    sciRooms["A317"] = paper.rect(529, 74, 37, 28);
    miscNARooms["A317-A (Teachers' Office)"] = paper.rect(529, 104, 37, 8);
    unknownRooms["North A-Wing Stairs (3rd Floor)"] = paper.rect(529, 114, 37, 9);
    
    //Set each rooms to different styles
    for(var roomName in mathRooms){
        mathRooms[roomName].attr(mathRoomStyle);  
    }

    for(var roomName in engRooms){
        engRooms[roomName].attr(engRoomStyle);
    }

    for(var roomName in sciRooms){
        sciRooms[roomName].attr(sciRoomStyle);
    }

    for(var roomName in socSciRooms){
        socSciRooms[roomName].attr(socSciRoomStyle);
    }

    for(var roomName in langRooms){
        langRooms[roomName].attr(langRoomStyle);
    }   

    for(var roomName in miscRooms){
        miscRooms[roomName].attr(miscRoomStyle);
    }
      
    for(var roomName in hundredBarriers){
        hundredBarriers[roomName].attr(hundredBarriersStyle);
    }
      
    for(var roomName in miscNARooms){
        miscNARooms[roomName].attr(miscNARoomstyle);
    }
      
    for(var roomName in unknownRooms){
        unknownRooms[roomName].attr(unknownRoomStyle);
    }
      
    for(var roomName in bathrooms){
        bathrooms[roomName].attr(bathStyle);
    }

  }