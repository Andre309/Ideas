// Масиви для кожної кнопки
const genres = [
'Комедія', 
'Драма', 
'Фантастика', 
'Трилер', 
'Детектив', 
'Еротика', 
'Жахи', 
'Казка', 
'Містика', 
'Новела', 
'Оповідання', 
'Пригоди', 
'Психологія',
'Роман',
'Романтика',
'Трагедія',
'Фентезі'];

const locations = [
'Ліс', 
'Місто', 
'Космос', 
'Школа',];

const situations = [
'Втеча', 
'Зустріч', 
'Таємниця', 
'Свято'];

const mainCharacters = [
'Поліцейський', 
'Учень', 
'Інопланетянин', 
'Шпигун'];

const secondaryCharacters = [
'Сусід', 
'Друг', 
'Антагоніст', 
'Тренер'];

// Функція для вибору випадкового елемента
function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Функція для показу результату
function showResult(buttonId, array) {
    const resultDiv = document.getElementById(`result${buttonId}`);
    resultDiv.textContent = getRandomItem(array); // Вибираємо випадковий елемент
    resultDiv.style.display = 'block'; // Показуємо результат
}

// Обробники подій на кнопки
document.getElementById('actEmotion').addEventListener('click', function () {
    showResult('Emotion', genres); // Покажемо результат для "Жанр"
});

document.getElementById('actBodyParts').addEventListener('click', function () {
    showResult('BodyParts', locations); // Покажемо результат для "Локація"
});

document.getElementById('actImprov').addEventListener('click', function () {
    showResult('Improv', situations); // Покажемо результат для "Ситуація"
});

document.getElementById('actMainCharacter').addEventListener('click', function () {
    showResult('MainCharacter', mainCharacters); // Покажемо результат для "Головний герой"
});

document.getElementById('actLetters').addEventListener('click', function () {
    showResult('Letters', secondaryCharacters); // Покажемо результат для "Другорядний персонаж"
});
