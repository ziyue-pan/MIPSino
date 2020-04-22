// import {} from '../utils/register';
import * as fs from 'fs';
import * as readline from 'readline';

function readFileToArr(full_path: string, callback: (arr: string[]) => void) {
    var fRead = fs.createReadStream(full_path);
    var obj_stream = readline.createInterface({ input: fRead });
    var arr = new Array();
    obj_stream.on('line', (line) => { arr.push(line); });
    obj_stream.on('close', () => { callback(arr); });
}

function trim(str: string) {
    const reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
}

export function parse(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var parsed_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'mipsino';
    var data_cursor = 0, text_cursor = 0;

    readFileToArr(full_path, (in_str) => {
        in_str.forEach((val, idx) => {
            var delete_idx: number = val.lastIndexOf('#');
            if(delete_idx !== -1)
                in_str[idx] = val.substring(0, delete_idx);
        });
        in_str.forEach((val, idx) => {                  // trim all spaces
            in_str[idx] = trim(val);
        });  
        in_str = in_str.filter(obj => obj !== "");      // filter spaces
        in_str.forEach((val) => {
            console.log(val);
        });
    });

    return parsed_path;
}