// import {} from '../utils/register';
import * as fs from 'fs';
import { inst_set } from './instruction';

enum field_set { data, text };


export function Assemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var assembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'hex';
    var data_cursor = 0x10010000, text_cursor = 0x0040000;
    var field: field_set = field_set.data;
    var label_table = new Map<string, number>();
    try {
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.replace(/#.*?\n|\t|\n|#.*?/g, ' ').replace(/:/g, ': ').replace(/(^\s*)|(\s*$)/g, '').split(/\s+/);
        in_arr.forEach((val, idx) => {
            if (val === '.data') {
                if (idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    data_cursor = parseInt(in_arr[idx], 16);
                }
                field = field_set.data;
            } else if (val === '.text') {
                if (idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    text_cursor = parseInt(in_arr[idx], 16);
                }
                field = field_set.text;
            } else if (val === '.byte') {
                data_cursor += 1;
            } else if (val === '.half') {
                data_cursor += 2;
            } else if (val === '.word') {
                data_cursor += 4;
            } else if (inst_set.includes(val)) {
                text_cursor += 4;
            } else if (val[val.length - 1] === ':') {
                label_table.set(val.substring(0, val.length - 1), field === field_set.data ? data_cursor : text_cursor);
            }
        });
        label_table.forEach((value, key) => {
            console.log(key, value);
        });
    } catch (e) {
        console.log('Error:', e.stack);
    }

    return assembled_path;
}