
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () =>
{
    tabContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) =>
    {
        item.classList.remove('tabheader__item_active');
    })
}
hideTabContent()
const showTabContent = (i = 0) =>
{
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()

let c = 0;
const autoFunctionSlider = () =>
{
    if (c === 4) c = 0;
    hideTabContent()
    showTabContent(c);
    c++;
}
let autoslider = setInterval( autoFunctionSlider, 1500);

tabsParent.addEventListener('click', (e) =>
{
    clearInterval(autoslider)
    setTimeout(() => {
        autoslider = setInterval( autoFunctionSlider, 1500);
    }, 3000);
    if (e.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) =>
        {
            if (e.target === item) {
                hideTabContent()
                showTabContent(i)
                c = i;
            }
        })
    }
})