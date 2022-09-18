console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
let numInt= parseInt('10')
console.log(typeof(numInt))
console.log(typeof(10))
let palabra = "python and jargon"
console.log(palabra.match('on'))
let pal ='I hope this course is not full of jargon'
console.log(pal.includes('jargon'))
let randomNum = math.floor(math.random()*101)

let randomNum1 = math.floor(math.random()*256)
let pala='JavaScript'
cosole.log(pala[math.random()])
console.log("1\t1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")
let frase = 'You cannot end a sentence with because because because is a conjunction'
console.log(frase.substring(31,54))
let frase1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(frase1.match('love'))
console.log(frase.match('because'))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
matches = sentence.replace(/%/g, '')
matches1 = matches.replace(/@/g, '')
matches2 = matches1.replace(/$/g, '')
matches3 = matches2.replace(/#/g, '')
matches4 = matches3.replace(/&/g, '')
console.log(matches4.match()) 
const newSentence = sentence.replace(reg,"")
