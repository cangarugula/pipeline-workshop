
const operations = {
  set: (input, arg )=> {
    return arg*1;
  },
  add: (input, arg)=> {
    //we need to add to something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input + arg*1;
  },
  mult: (input, arg)=> {
    //we need to multiply by something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input * arg*1;
  }
}

const pipelineSync = (str) => {
  let commands = str.split(' | ');
  let hash = {}
  commands.forEach((command)=> {
    let currElem = command.split(' ');
    hash[currElem[0]] = currElem[1];
  })

  let sum = 0
  for(let key in hash){

    sum = operations[key](sum,hash[key])
  }
  return sum;
}



module.exports = pipelineSync
