//console.log(document.body);
//console.log(document.body.childNodes) //так мы можем узнать все узлы "ноды" внутри этого родителя(body)
//console.log(document.body.firstChild) этот метод позволяет узнать самый первый узел внутри этого родителя
//console.log(document.body.lastChild) этот метод позволяет узнать самый последний узел внутри родителя
//console.log(document.querySelector('#current').parentNode.parentNode);//этот метод позволяет получить родителя id атрибута "current", и так можно дайти до главного родителя
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//console.log(document.querySelector('.wrapper').parentElement);
for (let node of document.body.childNodes) {
    if(node.nodeName !== '#text') {
        break;
    }
    console.log(node)
};