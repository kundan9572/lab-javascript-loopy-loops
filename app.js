// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
    let ProGrad_1="XXXX";
// 1.2 Print `"The driver's name is XXXX"`.
    console.log("The driver's name is " + ProGrad-1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
    let ProGrad_2="YYYY";
// 1.4 Print `"The navigator's name is YYYY"`.
    console.log("The navigator's name is " + ProGrad-2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

    if(ProGrad_1 == ProGrad_2){
        console.log("Wow , you both have equally long names, XX characters!.");
    }
    else if( ProGrad_1 > ProGrad_2){
        console.log("The driver has the longest name, it has XX characters.");
    }
    else{
        console.log("It seems that the navigator has the longest name, it has XX characters.");
    }

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
    let str="Prograde";
    str = str.toLowerCase();
    let msg=" ";
    for(i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        msg = msg +" " + str[i];
    }
    }
    console.log(str+msg)

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
    let str1 = "ProGRadE";
    let str2 = str1.toLowerCase()
    let count = 0;
    let count1 = 0;
    for(let i=0 ; i< str1.length ; i++) 
    {
        if(str1[i] === str2[i]){
            count++;
        }
        else{
            count1=str1.length-count
        
        }
    }
    console.log("Lower case letter are : " + count)
    console.log("Upper case letter are : " + count1)


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
    let str = "ProGrad";
    let msg = "";
    str = str.toUpperCase()
    for(let i=0; i<str.length ; i++){
         msg= msg + " " + str[i] ;
    }
    console.log(msg);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
    let str = "ProGrad";
    let msg = "";
    for(let i=str.length-1; i >= 0 ; i--){
        msg= msg + str[i];
    }
    console.log(msg)

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
    let str1= "ProGrad";
    let str2= "FACEPrep";
    let str3= str1 + " "+str2;
    console.log("Before reverse :"+str3 );
    str3= str2+ " " +str1;
    console.log("After reverse :"+str3 );
 
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

    let str = "ProGrad";
    let msg = "";
    for(let i=str.length-1; i >= 0 ; i--){
        msg= msg + str[i];
    }
    if(str == msg){
            console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome")
    }

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
