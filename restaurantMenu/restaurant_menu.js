const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$43.5', 'Pasta -$32.55', 'Burger -$2.99', 'Salmon -$4'];
const dessertMenu = ['Cake -$1', 'Ice Cream -$5', 'Pudding -$10', 'Fruit Salad -$4.5'];

const breakfastItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1} : ${item}</p>`).join('');
document.getElementById('breakastMenuItems').innerHTML = breakfastItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1} : ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1} : ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;