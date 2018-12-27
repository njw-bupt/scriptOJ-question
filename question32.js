const parseData = (data) =>{
    let keyData = data.metaData;
    let valueData = data.rows;
    let res = [];
    for(let i=0; i<valueData.length; i++){
        let obj = {};
        for(let j=0; j<keyData.length; j++){
            obj[keyData[j].name]=  valueData[i][j];         
        }
        res.push(obj);
    }
    return res;
}

data = {
    rows: [
      ["Lisa", 16, "Female", "2000-12-01"],
      ["Bob", 22, "Male", "1996-01-21"]
    ],
    metaData: [
      { name: "name", note: '' },
      { name: "age", note: '' },
      { name: "gender", note: '' },
      { name: "birthday", note: '' }
    ]
  }

  let res = parseData(data);
  console.log(res[0],res[1]);