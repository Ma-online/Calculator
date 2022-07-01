var input = document.querySelector('.input');
//console.log(input);
var items = Array.from(document.querySelectorAll('.item'));
//console.log(items)
// console.log(document.querySelector('.item'))
items.forEach(function(btn){
    console.log(btn)
    //khi click
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0')
        input.innerHTML = '';
        if(btn.innerHTML=='AC')
        input.innerHTML='0'
        else if(btn.innerHTML=='DEL'){
            //xóa kí tự cuối
            var arrtext = Array.from(input.innerHTML)
            arrtext.splice(arrtext.length-1,1);
            //nếu có số thì gán vào input
            if(arrtext.length!=0)
            input.innerHTML = arrtext.join('');
            else input.innerHTML = '0'
        }
        else if(btn.innerHTML =='='){
            //xử lý chuổi
            input.innerHTML = eval(input.innerHTML);
        }
        else input.innerHTML+= btn.innerHTML;
    })
})