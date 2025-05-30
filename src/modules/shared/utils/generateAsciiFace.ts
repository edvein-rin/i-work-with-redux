import { faker } from '@faker-js/faker';

const ASCII_FACES = [
  "        _..._        \r\n       i\u00B7...\u00B7i       \r\n     .-!\u00B7...\u00B7!-.     \r\n      `-.....-'      \r\n      !__   __!      \r\n     (~(_)-(_)~)     \r\n      !  (_)  !      \r\n       \\ `-' /       \r\n       !`---'!       \r\n      /.     .\\      \r\n _.-~'  `. .'  `~-._ \r\n'         V         `\r\n",
  "                     \r\n       _.---._       \r\n     .(((|||))).     \r\n    (((//'~`\\\\)))    \r\n    ))!_______!((    \r\n   ((((  /-\\  ))))   \r\n    )))`' < `'(((    \r\n   (((!  `-'  !)))   \r\n    )))\\.___./(((    \r\n      /-.   .-\\      \r\n _.-~'   \\ /   `~-._ \r\n'         V         `\r\n",
  "                     \r\n                     \r\n       .:=:=:.       \r\n      i;'~ ~`:i      \r\n      ! ^   ^ !      \r\n     (. \u00B0   \u00B0 .)     \r\n      !  .W.  !      \r\n       \\(/-\\)/       \r\n       !`._.'!       \r\n     _/ `._.' \\_     \r\n _.-~ \\/[>O<]\\/ ~-._ \r\n'  \\    \\ : /    /  `\r\n",
  "                     \r\n       _.---._       \r\n     .(((|||))).     \r\n    (((//'~`\\\\)))    \r\n    ))! -\u00B7\u00B7\u00B7- !((    \r\n   (((. o   o .)))   \r\n    )))   J   (((    \r\n   ((( \\ \u00B7-\u00B7 / )))   \r\n    )))!`._.'!(((    \r\n      /'     `\\      \r\n _.-~' ._\\ /_. `~-._ \r\n'        `.'        `\r\n",
  "                     \r\n        _..._        \r\n      .~(|||)~.      \r\n     ((//'~`\\\\))     \r\n     (! -\u00B7\u00B7\u00B7- !)     \r\n     (. .   . .)     \r\n      |   U   |      \r\n      !  .-.  !      \r\n      (_     _)      \r\n     _/`~---~'\\_     \r\n _.-~ \\/[>O<]\\/ ~-._ \r\n'       \\ : /       `\r\n",
  "       .~...~.       \r\n      i\u00B7.....\u00B7i      \r\n    .-!\u00B7.....\u00B7!-.    \r\n    `\u00B7.._____..\u00B7'    \r\n    ((! \u00B7   \u00B7 !))    \r\n    ((. \u00B0   \u00B0 .))    \r\n     )) _.v._ ((     \r\n     (!((/-\\))!)     \r\n       !\\\\\u00A1//!       \r\n      /`.___.'\\      \r\n _.-~'`-.___.-'`~-._ \r\n'                   `\r\n",
  "                     \r\n       _.---._       \r\n     .(((|||))).     \r\n    (((/(((((\\)))    \r\n    ))!       !((    \r\n   (((. -   - .)))   \r\n    )))   U   (((    \r\n   ((( \\ \u00B7-\u00B7 / )))   \r\n    )))!`._.'!(((    \r\n      /`.___.'\\      \r\n _.-~'`-.___.-'`~-._ \r\n'                   `",
];

/**
 * Generated manually via [Adel Faure ASCII Face Maker](https://adelfaure.itch.io/ascii-facemaker).
 */
export const generateAsciiFace = (): string => {
  return faker.helpers.arrayElement(ASCII_FACES);
};
