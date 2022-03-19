// 한꺼번에 다루기
import * as printerjs from './printer.js';
// named export? default export? 둘중 하나만 쓰기를 권장함 많으면 naed 별로없으면 defualt
import codeit,{  // default export
  title, data as members} from './members.js'; // named expoert
// const title = 'title';
print(printerjs.title);
print(printerTitle);
print(members)