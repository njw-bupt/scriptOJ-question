function initCheckBox () {
    //全选/不选状态的影响
    let all_select = document.querySelector('#check-all');
    let options = Array.from(document.querySelectorAll('.check-item'));
    all_select.addEventListener("change", function(){
        options.forEach(element => {
            element.checked = all_select.checked;
        });
    })

    //每个勾选框的影响
    options.forEach(element=>{
        element.addEventListener("change",function(){
            all_select.checked = options.every(function(ele){
                return ele.checked;
            });
        })
    })
  }
  initCheckBox();

//   document.querySelector("#id")
//   document.querySelector(".classname")
//   Array.from() 从一个可迭代对象中创建数组实例
//   checkbox checked属性标志其是否被选中
//   Array.every(function(ele,index,array){return 判断}) 检查是否每一项都符合要求