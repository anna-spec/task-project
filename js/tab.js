let tabs = document.getElementById('tabs');
let tabContent = document.getElementById('tabContent');

for(let k of tabs.children){
    k.addEventListener('click', function(el) {
        for(let k of tabs.children){
            k.classList.remove('active')
        }
        el.target.classList.add('active')
        for(let k of tabContent.children){
            if (k.classList.contains(el.target.id + '-tabContent')) {
                k.style.display = 'block'
            }else{
                k.style.display = 'none'
            }
        }
    })
}