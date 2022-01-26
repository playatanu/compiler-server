const {c, cpp, node, python, java} = require('compile-run');
  const compiler = async(code,input,len) => {

      if (len == 'c') return resultcode = await c.runSource(code,{ stdin: input});
      else if (len == 'cpp') return resultcode = await cpp.runSource(code,{ stdin: input});
      else if (len == 'java') return resultcode = await java.runSource(code,{ stdin: input});
      else return "select len";
        
    }
    
module.exports = compiler;