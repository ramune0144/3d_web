let input = "xss+u<3=9"
let a = []
let b = []
let op = ["+","-","*","/"]
let relop = ["<",">","="]
let letter = ["a" ,"b" ,"c" ,"d" ,"e" ,"f", "g" ,"h" ,"i" ,"j", "k" ,"l", "m" ,"n" ,"o", "p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x", "y" ,"z",
"A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I", "J", "K" ,"L", "M" ,"N" ,"O", "P" ,"Q" ,"R" ,"S" ,"T", "U" ,"V" ,"W" ,"X", "Y" ,"Z"]
let digit = ["1","2","3","4","5","6","7","8","9","0"]


for (let i in input) {
    console.log(input[i]);
    try {
        if ( relop.indexOf (input[i])!= -1) {
            a.push(i);
        }
        else if (digit.indexOf (input[i])!= -1){
            a.push("dig");
        }
        else if (op.indexOf (input[i])!= -1){
            a.push(i);
        }
        else if (letter.indexOf (input[i])!= -1 ){
            a.push("lett");
        }
        b.push(input[i]);
      }
      catch(err) {
        if (relop.indexOf (input[i])!= -1) {
            a.push(i);
        }
        else if (op.indexOf (input[i])!= -1){
            a.push(i);
        }
        else if (letter.indexOf (input[i])!= -1){
            a.push("lett");
        }
        b.push(input[i]);
      }
      console.log(a);
      console.log(b);
      

let dfa = {0:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6},
        2:{'>':4, '=':3, 'other':5},
        3:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        4:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        5:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        6:{'dig':14, 'lett':11,'+':99,'-':99,'*':99,'/':99,'<':99,'>':99,'=':99,'other':0},
        7:{'=':8,'other':9},
        8:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        9:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        11:{'dig':11, 'lett':11,'other':12},
        12:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        14:{'dig':14,'other':15},
        15:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        17:{'=':18,'other':19},
        18:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        19:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        20:{'=':21,'other':22},
        21:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0}, 
        22:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0}, 
        23:{'=':24,'other':25},
        24:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        25:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0}, 
        23:{'=':27,'other':28},
        27:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        28:{'dig':14, 'lett':11,'+':17,'-':20,'*':23,'/':26,'<':2,'>':7,'=':6,'other':0},
        99:{'other':0}
}
let final={
        15:"digit",
        12:"ID",
        18:"op",
        19:"op",
        21:"op",
        22:"op",
        24:"op",
        25:"op",
        27:"op",
        28:"op",
        3:"relop",
        4:"relop",
        5:"relop",
        6:"relop",
        8:"relop",
        9:"relop",
        99:"err"
 }

 function statemachine(transitions, initial, accepting, s, _val,fin_stage_map) {
  var state = initial
  const state_travel = []
  const val_ = []
  var num_elm_s = s.length
  var i = 0
  while (i < num_elm_s) {
    console.log(state)
    try {
        
        state = transitions[state][s[i]]
        val_.push(_val[i])
        
        i+=1
    
    } 
    
    catch {
        
        state = transitions[state]['other']
        i+=1
    }
    if (state in accepting){
            if (state !=99 && state !=6){
                i-=1
                state_travel.push( [state in accepting , fin_stage_map[state],state])
                val_.push(_val[i])
                val_.push(',')
            }
            else{
                state_travel.push( [state in accepting , fin_stage_map[state],state])
                val_.push(_val[i])
                val_.push(',')
            }
                
        }
    }

    var fin_val ="".join(val_).split(',')
    console.log(fin_val)
    fin_rem=[]
    for (i in fin_val){
        fin_rem.push(i.slice(0,(i.length)-1))
    }
    return [state_travel,fin_rem];
  }

finalstage=[15,12,18,19,21,22,24,25,27,28,3,4,5,6,8,9]

accept = statemachine(dfa,0,finalstage,a,b,final)
console.log(accept[0])
console.log(accept[1])


}