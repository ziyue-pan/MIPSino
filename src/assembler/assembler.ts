// import {} from '../utils/register';
import * as fs from 'fs';

export function assemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var assembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'hex';
    var data_cursor = 0x10010000, text_cursor = 0x0040000;
    var label_table: { [key: string]: number };
    try {
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.replace(/#.*?\n|\t|\n/g, ' ').replace(/:/g, ': ').split(/\s+/);
        in_arr.forEach((val) => {
            console.log(val);
        });
    } catch (e) {
        console.log('Error:', e.stack);
    }

    // readFileToArr(full_path, (in_str) => {
    //     in_str.forEach((val, idx) => {
    //         var delete_idx: number = val.lastIndexOf('#');  // filter out comments
    //         if (delete_idx !== -1)
    //             in_str[idx] = val.substring(0, delete_idx);
    //         in_str[idx] = in_str[idx].replace(/\t/g, ' ');  // filter tabs with spaces
    //     });
    //     in_str.forEach((val, idx) => {                      // trim all spaces
    //         in_str[idx] = trim(val);
    //     });
    //     in_str = in_str.filter(obj => obj !== "");          // filter blank 

    // in_str.forEach((val) => {
    //     console.log(val);
    // });
    return assembled_path;
}