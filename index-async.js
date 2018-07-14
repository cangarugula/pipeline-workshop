const operations = {
  addFromFile: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fs.readFile(arg, (err, result)=> {
      fn(err, input + result.toString()*1);
    });
  },
  set: (input, arg, fn) => {
    fn(null, arg*1);
  },
  add: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input + arg*1);
  },
  mult: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input * arg*1);
  }
};

const pipelineAsync = (str) => {
  let commands = str.split(' | ');
  let commandsArr = []
  commands.forEach((command) => {
    let currElem = command.split(" ");

    let command = [currElem[0],currElem[1]]
    commandsArr.push(command)
  })
  console.log(commandsArr)
  let sum = 0;
  const cb = (input) => {
    if(typeof result === 'undefined') {
      return err
    } else {
      sum = result
      return sum
    }
  }
  function process (err,input){
    if(!commandsArr.length){
      cb(input)
    } else {
      let command = commandsArr.shift()
      operations.command[0](input)
    }
  }
  console.log('sum: ',sum)
}

module.exports = pipelineAsync
