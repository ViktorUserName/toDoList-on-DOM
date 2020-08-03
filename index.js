const cl = console.log
let checkNow = 0;
let checkNot = 0;

const h1 = document.createElement('h1');
const input = document.createElement('input')
const div = document.createElement('div');

document.querySelector('#root').append(div)
document.body.lastElementChild.classList.add('firstContainer') //---1 div

document.querySelector('.firstContainer').append(document.createElement('div'))
document.querySelector('.firstContainer').firstChild.classList.add('list')
document.querySelector('.firstContainer').style.height = `${document.documentElement.clientHeight}` // ====> узнать автомат
document.querySelector('.firstContainer').style.width = `${document.documentElement.clientWidth}`


document.querySelector('.list').append(document.createElement('div'))
document.querySelector('.list').append(document.createElement('div'))
document.querySelector('.list').append(document.createElement('div'))
document.querySelector('.list').firstChild.classList.add('listHeader')
document.querySelector('.listHeader').nextSibling.classList.add('listInput')
document.querySelector('.listInput').nextSibling.classList.add('listTasks')

document.querySelector('.listHeader').append(document.createElement('div'))
document.querySelector('.listHeader').append(document.createElement('div'))
document.querySelector('.listHeader').firstChild.classList.add('listHeaderHead')
document.querySelector('.listHeader').lastChild.classList.add('inputDiv')
document.querySelector('.inputDiv').append(document.createElement('input'))
document.querySelector('.inputDiv').lastChild.classList.add('inputOwn')
document.querySelector('.inputDiv').append(document.createElement('button'))
document.querySelector('.inputOwn').nextElementSibling.classList.add('addButton')
// document.querySelector('.addButton').append(document.createElement('img'))
document.querySelector('.inputown').before(document.createElement('form'))
document.querySelector('form').setAttribute('id','inputForm')

document.querySelector('.inputOwn').setAttribute('type','text')
document.querySelector('.inputOwn').setAttribute('form','inputForm')
document.querySelector('.inputOwn').setAttribute('placeholder','...What u wanna do')
document.querySelector('.inputOwn').setAttribute('id','inputValueId')

document.querySelector('.addButton').setAttribute('id','addButtonId')

document.querySelector('.listInput').append(document.createElement('ul'))
document.querySelector('.listInput').firstChild.classList.add('ulDo')



addButtonId.onclick = () => { 
    document.querySelector('.ulDo').append(document.createElement('li'));
    document.querySelector('.ulDo').lastChild.classList.add('lishka')


    document.querySelector('.ulDo').lastChild.textContent = `${document.querySelector('#inputValueId').value}`
    document.querySelector('.ulDo').lastChild.prepend(document.createElement('input'))
    document.querySelector('.ulDo').lastChild.querySelector('input').setAttribute('type','checkbox')

    document.querySelector('.ulDo').lastChild.querySelector('input').classList.add('abc')  
    checkNow = checkNow +1

    document.querySelector('#inputValueId').value = ''

}





document.querySelector('.listHeaderHead').textContent = 'TODO list'



// for (key of document.querySelector('.ulDo').getElementsByTagName('input')){
//     if (key.checked === true){
//         checkNow = checkNow + 1
//     } else { checkNow = checkNow -1}
// }

document.querySelector('.listTasks').append(document.createElement('BUTTON'))
document.querySelector('.listTasks').firstChild.classList.add('button')
document.querySelector('.button').textContent = 'delete'
document.querySelector('.button').setAttribute('id','buttonForDelete')
document.querySelector('.listTasks').append(document.createElement('div'))
document.querySelector('.listTasks').lastChild.classList.add('numberTXT')
// document.querySelector('.numberTXT').textContent = `${checkNow} || ${checkNot}`


buttonForDelete.onclick = () => {
    for (key of document.querySelector('.ulDo').getElementsByTagName('input')){
        if(key.checked === true){
            key.parentNode.innerHTML = ''
        }
    }
    // while (document.querySelector('.ulDo').getElementsByTagName('input').checked = true){
    //     document.querySelector('.ulDo').getElementsByTagName('input').parentNode = ''
    // }
}






cl(document.documentElement.outerHTML)

























