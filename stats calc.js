//  take as integer input the number of times a occurs. provide field.
    var A = prompt("number of times A occurs:")    

//    take as integer input the number of times b occurs. provide field.
    var B = prompt("number of times B occurs:")

//    take as integer input the number of times c occurs. provide field.
    var C = prompt("number of times C occurs:")
//    take as integer input the total number of intervals.
    var TotalIntervals = prompt("what is the total number of intervals?: ")
//   take theta as integer input.
    var Theta = prompt("what is theta?: ")
//    -what to do if one of them is left blank?
//        -if total intervals is blank, return error
//    -what to do if one or more has zero as an input?
//        -f x is zero, then x intersect anything else is zero

// calculate and provide p of a
    var PofA = A / TotalIntervals
//calculate and provide p of b
    var PofB = B / TotalIntervals
//calculate and provie p of c
    var PofC = C / TotalIntervals
// calculate and provide p of theta
    var PofTheta = Theta / TotalIntervals
//  calculate and provide a intersect b
    var AintersectB = A * B;
//  calculate and provide b intersect c
    var BintersectC = B * C;
//  calculate and provide a intersect c
    var AintersectC = A * C;    
//  calculate and provide a intersect b intersect c
    var ABCIntersect = A * B * C;
//  calculate and provideP(a given b)
    var PofAgivenB = AintersectB / PofB
//  calculate and provide P(a given c)
    var PofAgivenC = AintersectC / PofC
//    calculate and provide P(b given c)
    var PofBgivenC = BintersectC / PofC
//    calculate and provide P(c given a)
    var PofCgivenA = CintersectA / PofA
//    calculate and provide P(c given b)
    var PofCgivenB = CintersectB / PofB
//    calculate and provide P(b given a)
    var PofBgivenA = BintersectA / PofA
//    calculate and provide equation 2:
//      -calculate b intersect theta, save as BintersectTheta
    var BintersectTheta = PofTheta * PofB
//        -- P(a intersect(b intersect theta)) divided by P(b intersect theta)
    var Equation2 = (PofA * BintersectTheta) / BintersectTheta
//return P(a | b, theta)

//    -a button to clear all fields.
//    -