/*
 * info: здесь будут примеры выражений для слоёв в after effects
 * *: пример выражения с различными комментариями
 */

export const commentExample = `if (time > 3) {
  // ставим условие, что если текущее время больше 3 секунд, то вывести текст
  ("Прошло больше, чем 3 секунды");
} else if (time == 3) {
  // если текущее время ровно 3 секунды, то вывести число
  (3);
} else {
  // иначе, если предыдущие условия не выполнены, то вывести другой текст
  ("Прошло меньше чем 3 секунды");
}`;

// *: пример форматирования текста

export const formatExample = `/* !! ДАННОЕ ВЫРАЖЕНИЕ ПРИМЕНЯЕТСЯ К ТЕКСТОВОМУ СЛОЮ В SOURCE TEXT !!
Данный код возвращает текущее время в композиции в формате "секунда и кадр" путём форматирования текста двумя способами.
В конце выводится переменная строкового типа, отформатированная через знак доллара и обратные "кавычки".
*/
totalFrames = timeToFrames(time); // записываем значение всего количества кадров
fps = timeToFrames(1); // записываем значение количества кадров за одну секунду
seconds = Math.floor(time); // округляем значение времени до целых секунд
frames = totalFrames % fps; // вычисляем остаток количества кадров
timePrefix = "Текущее время: "; // префикс для текста
function plural(n, forms) { // необязательная функция для склонения текста в зависимости от числа
  if (n % 10 == 1 && n % 100 != 11) return forms[0];
  else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return forms[1];
  else return forms[2];
}
// форматирование через знак доллара и обратные "кавычки"
inlineFormattedText = \`\${timePrefix}\${seconds} \${plural(seconds, ["секунда", "секунды", "секунд",])} и \${frames} \${plural(frames, ["кадр", "кадра", "кадров"])}\`;
if (seconds == 0 && frames == 0) {
  inlineFormattedText = "Начало композиции";
} else if (frames === 0) {
  inlineFormattedText = \`\${timePrefix}\${seconds} \${plural(seconds, ["секунда", "секунды", "секунд"])}\`;
}
// форматирование через конкатенацию
concatFormattedText = timePrefix + seconds + " " + plural(seconds, ["секунда", "секунды", "секунд"]) + " и " + frames + " " + plural(frames, ["кадр", "кадра", "кадров"]);
if (seconds == 0 && frames == 0) {
  concatFormattedText = "Начало композиции";
} else if (frames === 0) {
  concatFormattedText = timePrefix + seconds + " " + plural(seconds, ["секунда", "секунды", "секунд"]);
}
// возвращаем нужное значение
inlineFormattedText; // или concatFormattedText
`;

// *: использование встроенной функции wiggle для одного из положений по позиции

export const wiggleOnlyX = `// функция wiggle() будет применяться только для оси X, значение оси Y не изменяется
[wiggle(freq, amp)[0], value[1]]`;

export const wiggleOnlyY = `// функция wiggle() будет применяться только для оси Y, значение оси X не изменяется
[value[0], wiggle(freq, amp)[1]]`;

export const wiggleOnlyZ = `// функция wiggle() будет применяться только для оси Z, значения осей X и Y не изменяется
[value[0], value[1], wiggle(freq, amp)[2]]`;

/*
 * *: анимация плавного затухания
 * *: анимация попрыгунчика (bounce)
 * *: примеры использования loopOut/loopIn
 */

export const loopOutTypes = ``;

export const loopInTypes = ``;

/*
 * *: автофокус к нужному слою
 * *: автофокус между двумя слоями
 */
