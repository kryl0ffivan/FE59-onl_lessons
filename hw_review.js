// Нейминг классов страшнее ядерной войны

// blockContainerToDoActiveCheckbox
// inputToDoValueToDotext
// block__container__todo_Active_Checkbox
// block__container__todo_Active

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Добавляем классы со стилями, а не стили инлайново
// parentCard.style.backgroundColor = 'rgb(182, 177, 177)';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Экспортируем функции индифидуально, не стоит объеденять в общекты перед экспортом
// export const updatedata = {
//   updateAllCount: function(todos) {

//   const newToDoActiveCards = document.querySelectorAll('.block__container__todo_Active');
//   block__text_all.textContent = `All: ${newToDoActiveCards.length}`;
// },

// updateCompletedCount: function(todos) {
//   const checkedCheckboxes = document.querySelectorAll('.block__container__todo_Active_Checkbox:checked');
//   block__text_completed.textContent = `Completed: ${checkedCheckboxes.length}`;
// }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// в локал сторадж мы должны сетать не верстку   const todoItemsHTML = divTodoItems.innerHTML;, а объект, содержащий всю инфу по тудушкам, переведененный в JSON формат

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// data-id= - это очень хорошее решение, я вам об этом не говорил но в будущем в подобных случаях мы именно их и будем применять,

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// id одинаковые, оно может и даже работает но противоречит концепции уникальности id

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// при первом вызове   const allTodos = getData(); в allTodos записывается null, поскольку в локал сторадже еще нет таких данных, соответственно allTodos.push(newTodo); валиться ошибка все, что связано с локал стораджом не работает

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// если из модуля не сделать экспорт и в другой модуль не импортнуть то никто ничего не увидит
// если функция не видит какой-то параметр из другого модуля - нужно либо импортнуть его либо передать в качестве аргумента

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// например при удалении тудушки вызываешь функцию deleteTodo(event, ul, allTodo, todoCount, allTodo);
// и передаешь в нее пять аргументов, а принимаешь только 4 (еxport function deleteTodo(event, ul, todoCount, allTodo) {),
// нарушая порядок аргументов и тем самым ломая работу приложения;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// localStorage.clear() - как бы тут ок но лучше никогда не юзать поскольку в реале у нас может быть в локал сторадже много всякой полезной инфы и мы ее этим полностью затрем
